document.addEventListener('DOMContentLoaded', () => {
    // Place array. IMPORTANT: The 'x' and 'y' coordinates are missing.
    // USE docs/political/mapper_v2.html to generate a places_with_coords.json file
    // and replace this array with the content of that downloaded file.
    const allPlaces = [
        {
            "category": "Countries",
            "name": "Albania",
            "x": 616,
            "y": 821
        },
        {
            "category": "Countries",
            "name": "Andorra",
            "x": 267,
            "y": 744
        },
        {
            "category": "Countries",
            "name": "Armenia",
            "x": 1080,
            "y": 697
        },
        {
            "category": "Countries",
            "name": "Austria",
            "x": 512,
            "y": 644
        },
        {
            "category": "Countries",
            "name": "Azerbaijan",
            "x": 1145,
            "y": 681
        },
        {
            "category": "Countries",
            "name": "Belarus",
            "x": 725,
            "y": 463
        },
        {
            "category": "Countries",
            "name": "Belgium",
            "x": 352,
            "y": 552
        },
        {
            "category": "Countries",
            "name": "Bosnia and Herzegovina",
            "x": 570,
            "y": 717
        },
        {
            "category": "Countries",
            "name": "Bulgaria",
            "x": 722,
            "y": 741
        },
        {
            "category": "Countries",
            "name": "Croatia",
            "x": 544,
            "y": 685
        },
        {
            "category": "Countries",
            "name": "Cyprus",
            "x": 903,
            "y": 920
        },
        {
            "category": "Countries",
            "name": "Czech Republic",
            "x": 540,
            "y": 586
        },
        {
            "category": "Countries",
            "name": "Denmark",
            "x": 441,
            "y": 413
        },
        {
            "category": "Countries",
            "name": "Estonia",
            "x": 658,
            "y": 356
        },
        {
            "category": "Countries",
            "name": "Finland",
            "x": 652,
            "y": 218
        },
        {
            "category": "Countries",
            "name": "France",
            "x": 292,
            "y": 657
        },
        {
            "category": "Countries",
            "name": "Georgia",
            "x": 1018,
            "y": 672
        },
        {
            "category": "Countries",
            "name": "Germany",
            "x": 445,
            "y": 562
        },
        {
            "category": "Countries",
            "name": "Greece",
            "x": 654,
            "y": 845
        },
        {
            "category": "Countries",
            "name": "Hungary",
            "x": 594,
            "y": 652
        },
        {
            "category": "Countries",
            "name": "Iceland",
            "x": 176,
            "y": 116
        },
        {
            "category": "Countries",
            "name": "Ireland",
            "x": 163,
            "y": 455
        },
        {
            "category": "Countries",
            "name": "Italy",
            "x": 530,
            "y": 812
        },
        {
            "category": "Countries",
            "name": "Kazakhstan",
            "x": 1153,
            "y": 457
        },
        {
            "category": "Countries",
            "name": "Kosovo",
            "x": 627,
            "y": 765
        },
        {
            "category": "Countries",
            "name": "Latvia",
            "x": 673,
            "y": 396
        },
        {
            "category": "Countries",
            "name": "Liechtenstein",
            "x": 424,
            "y": 649
        },
        {
            "category": "Countries",
            "name": "Lithuania",
            "x": 630,
            "y": 430
        },
        {
            "category": "Countries",
            "name": "Luxembourg",
            "x": 373,
            "y": 577
        },
        {
            "category": "Countries",
            "name": "Malta",
            "x": 505,
            "y": 941
        },
        {
            "category": "Countries",
            "name": "Moldova",
            "x": 743,
            "y": 617
        },
        {
            "category": "Countries",
            "name": "Monaco",
            "x": 372,
            "y": 734
        },
        {
            "category": "Countries",
            "name": "Montenegro",
            "x": 594,
            "y": 757
        },
        {
            "category": "Countries",
            "name": "Netherlands",
            "x": 381,
            "y": 511
        },
        {
            "category": "Countries",
            "name": "North Macedonia",
            "x": 649,
            "y": 788
        },
        {
            "category": "Countries",
            "name": "Norway",
            "x": 450,
            "y": 278
        },
        {
            "category": "Countries",
            "name": "Poland",
            "x": 558,
            "y": 525
        },
        {
            "category": "Countries",
            "name": "Portugal",
            "x": 79,
            "y": 742
        },
        {
            "category": "Countries",
            "name": "Romania",
            "x": 688,
            "y": 661
        },
        {
            "category": "Countries",
            "name": "Russia",
            "x": 975,
            "y": 173
        },
        {
            "category": "Countries",
            "name": "San Marino",
            "x": 470,
            "y": 734
        },
        {
            "category": "Countries",
            "name": "Serbia",
            "x": 630,
            "y": 723
        },
        {
            "category": "Countries",
            "name": "Slovakia",
            "x": 600,
            "y": 606
        },
        {
            "category": "Countries",
            "name": "Slovenia",
            "x": 512,
            "y": 680
        },
        {
            "category": "Countries",
            "name": "Spain",
            "x": 160,
            "y": 739
        },
        {
            "category": "Countries",
            "name": "Sweden",
            "x": 521,
            "y": 237
        },
        {
            "category": "Countries",
            "name": "Switzerland",
            "x": 396,
            "y": 657
        },
        {
            "category": "Countries",
            "name": "Turkey",
            "x": 903,
            "y": 801
        },
        {
            "category": "Countries",
            "name": "Ukraine",
            "x": 746,
            "y": 563
        },
        {
            "category": "Countries",
            "name": "United Kingdom",
            "x": 263,
            "y": 475
        },
        {
            "category": "Countries",
            "name": "Vatican City",
            "x": 469,
            "y": 785
        },
        {
            "category": "Capitals",
            "name": "Tirana",
            "x": 614,
            "y": 791
        },
        {
            "category": "Capitals",
            "name": "Andorra la Vella",
            "x": 264,
            "y": 744
        },
        {
            "category": "Capitals",
            "name": "Yerevan",
            "x": 1093,
            "y": 710
        },
        {
            "category": "Capitals",
            "name": "Vienna",
            "x": 540,
            "y": 624
        },
        {
            "category": "Capitals",
            "name": "Baku",
            "x": 1181,
            "y": 658
        },
        {
            "category": "Capitals",
            "name": "Minsk",
            "x": 702,
            "y": 456
        },
        {
            "category": "Capitals",
            "name": "Brussels",
            "x": 351,
            "y": 539
        },
        {
            "category": "Capitals",
            "name": "Sarajevo",
            "x": 572,
            "y": 735
        },
        {
            "category": "Capitals",
            "name": "Sofia",
            "x": 682,
            "y": 748
        },
        {
            "category": "Capitals",
            "name": "Zagreb",
            "x": 528,
            "y": 700
        },
        {
            "category": "Capitals",
            "name": "Nicosia",
            "x": 921,
            "y": 906
        },
        {
            "category": "Capitals",
            "name": "Prague",
            "x": 504,
            "y": 579
        },
        {
            "category": "Capitals",
            "name": "Copenhagen",
            "x": 478,
            "y": 431
        },
        {
            "category": "Capitals",
            "name": "Tallinn",
            "x": 656,
            "y": 331
        },
        {
            "category": "Capitals",
            "name": "Helsinki",
            "x": 642,
            "y": 306
        },
        {
            "category": "Capitals",
            "name": "Paris",
            "x": 305,
            "y": 590
        },
        {
            "category": "Capitals",
            "name": "Tbilisi",
            "x": 1088,
            "y": 670
        },
        {
            "category": "Capitals",
            "name": "Berlin",
            "x": 492,
            "y": 511
        },
        {
            "category": "Capitals",
            "name": "Athens",
            "x": 701,
            "y": 881
        },
        {
            "category": "Capitals",
            "name": "Budapest",
            "x": 590,
            "y": 643
        },
        {
            "category": "Capitals",
            "name": "Reykjavik",
            "x": 128,
            "y": 113
        },
        {
            "category": "Capitals",
            "name": "Dublin",
            "x": 198,
            "y": 443
        },
        {
            "category": "Capitals",
            "name": "Rome",
            "x": 469,
            "y": 782
        },
        {
            "category": "Capitals",
            "name": "Astana",
            "x": 1197,
            "y": 348
        },
        {
            "category": "Capitals",
            "name": "Pristina",
            "x": 627,
            "y": 761
        },
        {
            "category": "Capitals",
            "name": "Riga",
            "x": 638,
            "y": 396
        },
        {
            "category": "Capitals",
            "name": "Vaduz",
            "x": 425,
            "y": 649
        },
        {
            "category": "Capitals",
            "name": "Vilnius",
            "x": 668,
            "y": 455
        },
        {
            "category": "Capitals",
            "name": "Luxembourg City",
            "x": 373,
            "y": 577
        },
        {
            "category": "Capitals",
            "name": "Valletta",
            "x": 505,
            "y": 940
        },
        {
            "category": "Capitals",
            "name": "Chisinau",
            "x": 757,
            "y": 645
        },
        {
            "category": "Capitals",
            "name": "Monaco City",
            "x": 373,
            "y": 735
        },
        {
            "category": "Capitals",
            "name": "Podgorica",
            "x": 593,
            "y": 758
        },
        {
            "category": "Capitals",
            "name": "Amsterdam",
            "x": 376,
            "y": 507
        },
        {
            "category": "Capitals",
            "name": "Skopje",
            "x": 654,
            "y": 779
        },
        {
            "category": "Capitals",
            "name": "Oslo",
            "x": 462,
            "y": 324
        },
        {
            "category": "Capitals",
            "name": "Warsaw",
            "x": 611,
            "y": 513
        },
        {
            "category": "Capitals",
            "name": "Lisbon",
            "x": 35,
            "y": 785
        },
        {
            "category": "Capitals",
            "name": "Bucharest",
            "x": 724,
            "y": 706
        },
        {
            "category": "Capitals",
            "name": "Moscow",
            "x": 833,
            "y": 330
        },
        {
            "category": "Capitals",
            "name": "San Marino City",
            "x": 468,
            "y": 733
        },
        {
            "category": "Capitals",
            "name": "Belgrade",
            "x": 611,
            "y": 696
        },
        {
            "category": "Capitals",
            "name": "Bratislava",
            "x": 563,
            "y": 617
        },
        {
            "category": "Capitals",
            "name": "Ljubljana",
            "x": 506,
            "y": 677
        },
        {
            "category": "Capitals",
            "name": "Madrid",
            "x": 139,
            "y": 777
        },
        {
            "category": "Capitals",
            "name": "Stockholm",
            "x": 554,
            "y": 348
        },
        {
            "category": "Capitals",
            "name": "Bern",
            "x": 393,
            "y": 652
        },
        {
            "category": "Capitals",
            "name": "Ankara",
            "x": 875,
            "y": 782
        },
        {
            "category": "Capitals",
            "name": "Kyiv",
            "x": 772,
            "y": 538
        },
        {
            "category": "Capitals",
            "name": "London",
            "x": 287,
            "y": 520
        },
        {
            "category": "Capitals",
            "name": "Vatican City (Capital)",
            "x": 470,
            "y": 783
        }
    ];

    const REF_WIDTH = 1200;
    const REF_HEIGHT = 978;

    allPlaces.forEach(p => {
        if (p.x !== undefined && p.y !== undefined) {
            p.xPct = (p.x / REF_WIDTH) * 100;
            p.yPct = (p.y / REF_HEIGHT) * 100;
        }
    });

    const validPlaces = allPlaces.filter(p => p.x !== undefined && p.y !== undefined);

    let currentCategory = "Countries";
    let remainingPlaces = validPlaces.filter(p => p.category === currentCategory);
    let masterRemaining = [...validPlaces];

    let currentTarget = null;
    let isSolved = false;
    let showHints = false;

    const mapImg = document.getElementById('map-img');
    const mapContainerInner = document.getElementById('map-container-inner');
    const messageBox = document.getElementById('message-box');
    const placesList = document.getElementById('places-list');
    const scoreHeader = document.getElementById('score-header');
    const btnTogglePoints = document.getElementById('btn-toggle-points');
    const btnToggleSolve = document.getElementById('btn-toggle-solve');

    // Initialization safeguard
    if (validPlaces.length === 0) {
        showMessage("WARNING: Missing coordinates in game.js. Use mapper_v2.html first and add the (x,y) coordinates of each place to the code.", "error", 0);
        return;
    }

    initGame();

    function initGame() {
        mapImg.addEventListener('click', handleMapClick);
        btnTogglePoints.addEventListener('click', toggleHints);
        btnToggleSolve.addEventListener('click', toggleSolve);
        renderSidebar();
        updateScoreUI();
    }

    function toggleHints() {
        if (isSolved) return;
        showHints = !showHints;
        btnTogglePoints.innerText = showHints ? "Hide points" : "Show points";
        renderDots();
    }

    function toggleSolve() {
        isSolved = !isSolved;
        if (isSolved) {
            btnToggleSolve.innerText = "Hide answers";
            btnTogglePoints.disabled = true;
            mapImg.style.pointerEvents = 'none';
            placesList.style.pointerEvents = 'none';
        } else {
            btnToggleSolve.innerText = "Solve";
            btnTogglePoints.disabled = false;
            mapImg.style.pointerEvents = 'auto';
            placesList.style.pointerEvents = 'auto';
        }
        renderDots();
    }

    function renderDots() {
        Array.from(mapContainerInner.children).forEach(child => {
            if (child !== mapImg && child !== messageBox) {
                child.remove();
            }
        });

        // Loop over the specific category we are in right now, OR all if solved
        let placesToShow = isSolved ? validPlaces : validPlaces.filter(p => p.category === currentCategory);

        placesToShow.forEach(p => {
            const isMissingFromMaster = !masterRemaining.find(r => r.name === p.name);

            if (isMissingFromMaster) {
                createDot(p, 'correct');
                createLabel(p);
            } else if (isSolved) {
                createDot(p, 'correct');
                createLabel(p);
            } else if (showHints) {
                createDot(p, (currentTarget && currentTarget.name === p.name) ? 'active' : 'hint');
            } else if (currentTarget && currentTarget.name === p.name) {
                createDot(p, 'active');
            }
        });

        // Render already found places from PAST categories as well if not solved
        if (!isSolved) {
            const previousCategoriesFound = validPlaces.filter(p => p.category !== currentCategory && !masterRemaining.find(r => r.name === p.name));
            previousCategoriesFound.forEach(p => {
                createDot(p, 'correct');
                createLabel(p);
            });
        }
    }

    function createDot(p, type) {
        const dot = document.createElement('div');
        dot.className = `dot ${type}`;

        if (p.category === 'Countries' && currentCategory === 'Capitals') {
            dot.classList.add('faded');
        } else if (p.category === 'Capitals') {
            dot.classList.add('capital');
        }

        dot.style.left = p.xPct + '%';
        dot.style.top = p.yPct + '%';
        mapContainerInner.appendChild(dot);
    }

    function createLabel(p) {
        const label = document.createElement('div');
        label.className = 'place-label';

        if (p.category === 'Countries' && currentCategory === 'Capitals') {
            label.classList.add('faded');
        } else if (p.category === 'Capitals') {
            label.classList.add('capital');
        }

        label.innerText = p.name;
        label.style.left = p.xPct + '%';
        label.style.top = p.yPct + '%';
        mapContainerInner.appendChild(label);
    }

    function updateScoreUI() {
        if (scoreHeader) {
            const mappedTotal = validPlaces.filter(p => p.category === currentCategory).length;
            const found = mappedTotal - remainingPlaces.length;
            const categoryLabel = currentCategory === "Countries" ? "countries" : "capitals";
            scoreHeader.innerText = `${currentCategory}: ${found}/${mappedTotal} found`;
        }
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

    function handleMapClick(e) {
        if (isSolved) return;
        if (e.target !== mapImg && e.target.parentNode !== mapContainerInner) return;

        const rect = mapImg.getBoundingClientRect();
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        if (clientX < 0 || clientX > rect.width || clientY < 0 || clientY > rect.height) return;

        const clickPctX = (clientX / rect.width) * 100;
        const clickPctY = (clientY / rect.height) * 100;
        const clickRefX = (clickPctX / 100) * REF_WIDTH;
        const clickRefY = (clickPctY / 100) * REF_HEIGHT;

        let nearest = null;
        let minDist = Infinity;

        // Compare clicks against the current category places ONLY
        const currentPlaces = validPlaces.filter(p => p.category === currentCategory);

        for (const place of currentPlaces) {
            const placeVisualX = (place.xPct / 100) * REF_WIDTH;
            const placeVisualY = (place.yPct / 100) * REF_HEIGHT;
            const dx = placeVisualX - clickRefX;
            const dy = placeVisualY - clickRefY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < minDist) {
                minDist = dist;
                nearest = place;
            }
        }

        if (nearest && minDist < 200) {
            const isRemaining = remainingPlaces.find(p => p.name === nearest.name);
            if (!isRemaining) {
                showMessage(`You have already found ${nearest.name}.`, "info");
                return;
            }
            currentTarget = nearest;
            renderDots();
            renderSidebar();
        } else if (nearest) {
            showMessage(`You clicked nowhere, the closest one is too far.`, "info", 1500);
        }
    }

    function handleListClick(place, listItem) {
        if (isSolved) return;
        if (!currentTarget) {
            showMessage("Click a point on the map first.", "error");
            return;
        }

        if (place.name === currentTarget.name) {
            showMessage("Correct!", "success");

            // Remove from remaining
            const idx = remainingPlaces.findIndex(p => p.name === place.name);
            if (idx > -1) remainingPlaces.splice(idx, 1);

            const mIdx = masterRemaining.findIndex(p => p.name === place.name);
            if (mIdx > -1) masterRemaining.splice(mIdx, 1);

            currentTarget = null;

            if (remainingPlaces.length === 0) {
                if (currentCategory === "Countries") {
                    currentCategory = "Capitals";
                    // Advance to phase 2
                    remainingPlaces = validPlaces.filter(p => p.category === currentCategory);
                    showMessage("Great! Now let's try the capitals.", "success", 5000);
                } else {
                    showMessage("GAME COMPLETED!", "success", 10000);
                }
            }

            renderSidebar();
            updateScoreUI();
            renderDots();

        } else {
            showMessage("Incorrect.", "error");
            const item = placesList.querySelector(`li[data-name="${place.name}"]`);
            if (item) item.classList.add('failed');
        }
    }
});
