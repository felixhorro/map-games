document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Game ID from Query Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('game') || 'political'; // Default to political

    // 2. State Variables
    let config = null;
    let allPlaces = [];
    let validPlaces = [];
    let masterRemaining = [];
    let currentCategory = null;
    let remainingPlaces = [];
    let currentTarget = null;
    let isSolved = false;
    let showHints = false;

    // 3. DOM Elements
    const mapImg = document.getElementById('map-img');
    const mapContainerInner = document.getElementById('map-container-inner');
    const messageBox = document.getElementById('message-box');
    const placesList = document.getElementById('places-list');
    const scoreHeader = document.getElementById('score-header');
    const btnTogglePoints = document.getElementById('btn-toggle-points');
    const btnToggleSolve = document.getElementById('btn-toggle-solve');

    // 4. Load Game Data
    Promise.all([
        fetch(`${gameId}/config.json`).then(r => {
            if (!r.ok) throw new Error(`Could not load config for game: ${gameId}`);
            return r.json();
        }),
        fetch(`${gameId}/places.json`).then(r => {
            if (!r.ok) throw new Error(`Could not load places for game: ${gameId}`);
            return r.json();
        })
    ])
        .then(([configData, placesData]) => {
            config = configData;
            allPlaces = placesData;
            setupGame();
        })
        .catch(err => {
            console.error(err);
            showMessage("Error loading game data. Check console for details.", "error", 0);
        });

    function setupGame() {
        // Set Page Title
        if (config.gameName) {
            document.title = `Map Games - ${config.gameName}`;
        }

        // Set Map Source
        mapImg.src = `${gameId}/${config.mapImage}`;
        mapImg.alt = config.mapAlt || "Map";

        // Set Aspect Ratio for Dots
        mapContainerInner.style.aspectRatio = `${config.refWidth} / ${config.refHeight}`;

        // Initialize Coordinates (Percent)
        allPlaces.forEach(p => {
            if (p.x !== undefined && p.y !== undefined) {
                p.xPct = (p.x / config.refWidth) * 100;
                p.yPct = (p.y / config.refHeight) * 100;
            }
        });

        validPlaces = allPlaces.filter(p => p.x !== undefined && p.y !== undefined);
        masterRemaining = [...validPlaces];

        // Set Button Labels
        if (config.labels) {
            btnTogglePoints.innerText = config.labels.showPoints;
            btnToggleSolve.innerText = config.labels.solve;
        }

        // determine initial category
        if (config.categories && config.categories.length > 0) {
            currentCategory = config.categories[0];
            remainingPlaces = validPlaces.filter(p => p.category === currentCategory);
        } else {
            currentCategory = null;
            remainingPlaces = [...validPlaces];
        }

        initEventListeners();
        renderSidebar();
        updateScoreUI();
    }

    function initEventListeners() {
        mapImg.addEventListener('click', handleMapClick);
        btnTogglePoints.addEventListener('click', toggleHints);
        btnToggleSolve.addEventListener('click', toggleSolve);
    }

    // --- Actions ---

    function toggleHints() {
        if (isSolved) return;
        showHints = !showHints;
        btnTogglePoints.innerText = showHints ? config.labels.hidePoints : config.labels.showPoints;
        renderDots();
    }

    function toggleSolve() {
        isSolved = !isSolved;
        if (isSolved) {
            btnToggleSolve.innerText = config.labels.hideAnswers;
            btnTogglePoints.disabled = true;
            mapImg.style.pointerEvents = 'none';
            placesList.style.pointerEvents = 'none';
        } else {
            btnToggleSolve.innerText = config.labels.solve;
            btnTogglePoints.disabled = false;
            mapImg.style.pointerEvents = 'auto';
            placesList.style.pointerEvents = 'auto';
        }
        renderDots();
    }

    // --- Rendering ---

    function renderDots() {
        // Clear old dots/labels
        Array.from(mapContainerInner.children).forEach(child => {
            if (child !== mapImg && child !== messageBox) {
                child.remove();
            }
        });

        // Determine which dots to show
        let placesToShow = [];
        if (isSolved) {
            placesToShow = validPlaces;
        } else if (currentCategory) {
            placesToShow = validPlaces.filter(p => p.category === currentCategory);
        } else {
            placesToShow = validPlaces;
        }

        placesToShow.forEach(p => {
            const isFound = !masterRemaining.find(r => r.name === p.name);

            if (isFound || isSolved) {
                createDot(p, 'correct');
                createLabel(p);
            } else if (showHints) {
                createDot(p, (currentTarget && currentTarget.name === p.name) ? 'active' : 'hint');
            } else if (currentTarget && currentTarget.name === p.name) {
                createDot(p, 'active');
            }
        });

        // Show found items from other categories
        if (!isSolved && currentCategory) {
            const othersFound = validPlaces.filter(p => p.category !== currentCategory && !masterRemaining.find(r => r.name === p.name));
            othersFound.forEach(p => {
                createDot(p, 'correct');
                createLabel(p);
            });
        }
    }

    function createDot(p, type) {
        const dot = document.createElement('div');
        dot.className = `dot ${type}`;

        // Add specific class for category (like 'capital')
        if (p.categoryClass) {
            dot.classList.add(p.categoryClass);
        }

        // Add 'faded' if it's from a previous category (specific logic for political)
        if (currentCategory === 'Capitals' && p.category === 'Countries') {
            dot.classList.add('faded');
        }

        dot.style.left = p.xPct + '%';
        dot.style.top = p.yPct + '%';
        mapContainerInner.appendChild(dot);
    }

    function createLabel(p) {
        const label = document.createElement('div');
        label.className = 'place-label';

        if (p.categoryClass) {
            label.classList.add(p.categoryClass);
        }

        if (currentCategory === 'Capitals' && p.category === 'Countries') {
            label.classList.add('faded');
        }

        label.innerText = p.name;
        label.style.left = p.xPct + '%';
        label.style.top = p.yPct + '%';
        mapContainerInner.appendChild(label);
    }

    function updateScoreUI() {
        if (!scoreHeader) return;

        const totalInCategory = currentCategory ? validPlaces.filter(p => p.category === currentCategory).length : validPlaces.length;
        const foundInCategory = totalInCategory - remainingPlaces.length;

        let label = config.labels.scoreTemplate;
        label = label.replace('{found}', foundInCategory);
        label = label.replace('{total}', totalInCategory);
        label = label.replace('{category}', currentCategory || "");

        scoreHeader.innerText = label;
    }

    function showMessage(text, type = "info", duration = 3000) {
        if (!messageBox) return;
        messageBox.innerText = text;
        messageBox.className = "";
        if (type) messageBox.classList.add(type);
        messageBox.classList.remove("hidden");

        if (duration > 0) {
            setTimeout(() => {
                messageBox.classList.add("hidden");
            }, duration);
        }
    }

    function renderSidebar() {
        placesList.innerHTML = '';
        remainingPlaces.sort((a, b) => a.name.localeCompare(b.name));

        remainingPlaces.forEach(p => {
            const li = document.createElement('li');
            li.className = 'place-item';
            li.innerText = p.name;
            li.dataset.name = p.name;
            li.onclick = () => handleListClick(p, li);
            placesList.appendChild(li);
        });
    }

    // --- Interaction Handlers ---

    function handleMapClick(e) {
        if (isSolved) return;
        if (e.target !== mapImg && e.target.parentNode !== mapContainerInner) return;

        const rect = mapImg.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        if (clientX < 0 || clientX > rect.width || clientY < 0 || clientY > rect.height) return;

        const clickPctX = (clientX / rect.width) * 100;
        const clickPctY = (clientY / rect.height) * 100;

        // Convert back to reference pixels for distance calculation
        const clickRefX = (clickPctX / 100) * config.refWidth;
        const clickRefY = (clickPctY / 100) * config.refHeight;

        let nearest = null;
        let minDist = config.maxSelectionDist || 50; // Use config or default

        for (const place of validPlaces) {
            const dx = place.x - clickRefX;
            const dy = place.y - clickRefY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < minDist) {
                minDist = dist;
                nearest = place;
            }
        }

        if (nearest) {
            // Check if already found
            const isRemaining = masterRemaining.find(p => p.name === nearest.name);
            if (!isRemaining) {
                showMessage(`${config.labels.alreadyFound} ${nearest.name}.`, "info");
                return;
            }

            currentTarget = nearest;
            renderDots();
            renderSidebar(); // Clear failed states
        }
    }

    function handleListClick(place, listItem) {
        if (isSolved) return;

        if (!currentTarget) {
            showMessage(config.labels.clickFirst, "error");
            return;
        }

        if (place.name === currentTarget.name) {
            // Correct
            showMessage(config.labels.correctMsg, "success");

            // Remove from category and master
            const idxCat = remainingPlaces.findIndex(p => p.name === place.name);
            if (idxCat > -1) remainingPlaces.splice(idxCat, 1);

            const idxMaster = masterRemaining.findIndex(p => p.name === place.name);
            if (idxMaster > -1) masterRemaining.splice(idxMaster, 1);

            currentTarget = null;

            // Check if category finished
            if (remainingPlaces.length === 0) {
                // Next category?
                if (config.categories) {
                    const currentIdx = config.categories.indexOf(currentCategory);
                    if (currentIdx > -1 && currentIdx < config.categories.length - 1) {
                        currentCategory = config.categories[currentIdx + 1];
                        remainingPlaces = validPlaces.filter(p => p.category === currentCategory);
                        showMessage(`${config.labels.nextCategory}: ${currentCategory}`, "success", 5000);
                    } else {
                        // All finished
                        showMessage(config.labels.gameCompleted, "success", 10000);
                    }
                } else {
                    showMessage(config.labels.gameCompleted, "success", 10000);
                }
            }

            renderSidebar();
            updateScoreUI();
            renderDots();
        } else {
            // Incorrect
            showMessage(config.labels.incorrectMsg, "error");
            listItem.classList.add('failed');
        }
    }
});
