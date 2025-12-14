document.addEventListener('DOMContentLoaded', () => {
  // Embedded Data to avoid CORS issues with file:// protocol
  const allPlaces = [
    {
      "category": "Ríos (Obligatorio)",
      "name": "Vístula",
      "x": 1396,
      "y": 1115
    },
    {
      "category": "Ríos (Obligatorio)",
      "name": "Don",
      "x": 2175,
      "y": 1165
    },
    {
      "category": "Ríos (Obligatorio)",
      "name": "Rin",
      "x": 1131,
      "y": 1226
    },
    {
      "category": "Ríos (Obligatorio)",
      "name": "Sena",
      "x": 954,
      "y": 1273
    },
    {
      "category": "Ríos (Obligatorio)",
      "name": "Loira",
      "x": 897,
      "y": 1325
    },
    {
      "category": "Ríos (Obligatorio)",
      "name": "Ródano",
      "x": 982,
      "y": 1508
    },
    {
      "category": "Ríos (Obligatorio)",
      "name": "Po",
      "x": 1234,
      "y": 1683
    },
    {
      "category": "Ríos (Obligatorio)",
      "name": "Danubio",
      "x": 1602,
      "y": 1573
    },
    {
      "category": "Mares (Obligatorio)",
      "name": "Mar Blanco",
      "x": 1849,
      "y": 328
    },
    {
      "category": "Mares (Obligatorio)",
      "name": "Mar del Norte",
      "x": 1050,
      "y": 800
    },
    {
      "category": "Mares (Obligatorio)",
      "name": "Mar Báltico",
      "x": 1516,
      "y": 781
    },
    {
      "category": "Mares (Obligatorio)",
      "name": "Mar Caspio",
      "x": 2578,
      "y": 1430
    },
    {
      "category": "Mares (Obligatorio)",
      "name": "Mar Negro",
      "x": 1982,
      "y": 1597
    },
    {
      "category": "Mares (Obligatorio)",
      "name": "Azov",
      "x": 2083,
      "y": 1408
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Islandia",
      "x": 768,
      "y": 176
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Cabo del Norte",
      "x": 1602,
      "y": 63
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Pechora",
      "x": 2109,
      "y": 163
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Montañas Urales",
      "x": 2418,
      "y": 347
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Islas Feroe",
      "x": 910,
      "y": 445
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Montes Escandinavos",
      "x": 1370,
      "y": 419
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Península Escandinava",
      "x": 1564,
      "y": 336
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Volga",
      "x": 2289,
      "y": 1035
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Irlanda",
      "x": 724,
      "y": 922
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Gran Bretaña",
      "x": 917,
      "y": 1035
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Ural",
      "x": 2479,
      "y": 905
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Elbrus",
      "x": 2247,
      "y": 1490
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Los Alpes",
      "x": 1105,
      "y": 1480
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Mont Blanc",
      "x": 1048,
      "y": 1503
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Montes Cárpatos",
      "x": 1667,
      "y": 1375
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Monte Olimpo",
      "x": 1586,
      "y": 1816
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Creta",
      "x": 1709,
      "y": 2100
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Chipre",
      "x": 2052,
      "y": 2074
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Malta",
      "x": 1317,
      "y": 2087
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Sicilia",
      "x": 1289,
      "y": 1965
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Cerdeña",
      "x": 1096,
      "y": 1807
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Elba",
      "x": 1313,
      "y": 1965
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Córcega",
      "x": 1114,
      "y": 1683
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Golfo de León",
      "x": 956,
      "y": 1629
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Islas Baleares",
      "x": 873,
      "y": 1785
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Estrecho de Gibraltar",
      "x": 527,
      "y": 1876
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Península Ibérica",
      "x": 545,
      "y": 1703
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Meseta Central",
      "x": 626,
      "y": 1649
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Tajo",
      "x": 523,
      "y": 1651
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Ebro",
      "x": 731,
      "y": 1577
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Golfo de Vizcaya",
      "x": 731,
      "y": 1460
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Aneto",
      "x": 820,
      "y": 1571
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Cuenca del Caspio",
      "x": 2656,
      "y": 1295
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Macizo Central",
      "x": 926,
      "y": 1451
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Selva Negra",
      "x": 1142,
      "y": 1323
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Península Balcánica",
      "x": 1586,
      "y": 1716
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Balcanes",
      "x": 1648,
      "y": 1688
    },
    {
      "category": "Otros (Obligatorio)",
      "name": "Mulhacén",
      "x": 617,
      "y": 1820
    },
    {
      "category": "Otros que quiero poner",
      "name": "Cabo de Finisterre",
      "x": 492,
      "y": 1438
    },
    {
      "category": "Otros que quiero poner",
      "name": "Cabo de St Vicente",
      "x": 413,
      "y": 1757
    },
    {
      "category": "Otros que quiero poner",
      "name": "Mar Mediterráneo",
      "x": 1000,
      "y": 1842
    },
    {
      "category": "Otros que quiero poner",
      "name": "Océano Atlántico",
      "x": 355,
      "y": 1035
    },
    {
      "category": "Otros que quiero poner",
      "name": "Océano Ártico",
      "x": 1265,
      "y": 65
    },
    {
      "category": "Otros que quiero poner",
      "name": "Lago Ladoga",
      "x": 1775,
      "y": 618
    },
    {
      "category": "Otros que quiero poner",
      "name": "Península Italiana",
      "x": 1302,
      "y": 1707
    },
    {
      "category": "Otros que quiero poner",
      "name": "Península Jutland",
      "x": 1215,
      "y": 896
    },
    {
      "category": "Desconocidos",
      "name": "Meseta finlandesa",
      "x": 1628,
      "y": 568
    },
    {
      "category": "Desconocidos",
      "name": "Duina del norte",
      "x": 2002,
      "y": 432
    },
    {
      "category": "Desconocidos",
      "name": "Vosgos",
      "x": 1081,
      "y": 1271
    },
    {
      "category": "Desconocidos",
      "name": "Etna",
      "x": 1311,
      "y": 1970
    }
  ];

  // Heuristic corrections removed per user request. Using original JSON coordinates.

  let remainingPlaces = [...allPlaces];
  let foundPlaces = []; // IDs or names
  let currentTarget = null; // The place closest to where user clicked

  // Logic Change:
  // 1. Show all remaining places in sidebar.
  // 2. When user clicks map -> Find nearest place.
  // 3. Instead of asking "What is this?", we check if the nearest place corresponds to the currently SELECTED place in the sidebar?
  //    OR: User clicks map -> We highlight the nearest place. User then clicks that place in the list to confirm?
  //    User Request: "When the user clicks on the map then it should click on a place in the right column... user success... place disappear"
  //    Wait, "it should click on a place in the right column" implies the user clicks the MAP, and then does the user have to guess?
  //    "so there is no need of a popup and no need for confirmation button."
  //    Interpretation:
  //    Two modes of input:
  //    A) User clicks a place in the Sidebar FIRST. Then clicks the Map to place it? (Common geography game style).
  //    B) user Request says: "User clicks on the map... then it should CLICK on a place in the right column".
  //       This implies: User clicks Map -> Game figures out which place is nearest -> Game HIGHLIGHTS/SELECTS that place in the list?
  //       But if the user just clicks the map, and the game selects the right answer in the list automatically, where is the challenge?
  //       Ah, "selector offers the player all the places left. The user choose one... if it is the right one...".
  //       So:
  //       1. User clicks Map (e.g. on Paris).
  //       2. Game shows dot on Paris.
  //       3. Game HIGHLIGHTS the list / Scrolls to it? Or maybe just WAITS for user to click the name "Paris" in the list?
  //       "When the user clicks on the map then it should click on a place in the right column" -> This phrasing is confusing properly.
  //       Context: "Selector offers the player all the places left. The user choose one".
  //       So: Map Click -> Dot appears -> User must finding the corresponding name in the list and CLICK IT.
  //       If Correct -> Done.
  //       If Incorrect -> Advice.

  let currentNearest = null;

  // DOM Elements
  const mapImg = document.getElementById('map-img');
  const mapWrapper = document.getElementById('map-wrapper');
  const messageBox = document.getElementById('message-box');
  // DOM Elements - Re-query for sidebar
  const placesList = document.getElementById('places-list');
  // Initialize
  initGame();

  function initGame() {
    mapImg.addEventListener('click', handleMapClick);
    renderSidebar();
    console.log("Juego iniciado. Haz clic en el mapa y luego selecciona el nombre en la lista.");
  }


  function showMessage(text, type = "info", duration = 3000) {
    // Message box is now inside map-wrapper or generic
    const msgBox = document.getElementById('message-box');
    if (!msgBox) return; // safety

    msgBox.innerText = text;
    msgBox.className = "";
    if (type) msgBox.classList.add(type);
    msgBox.classList.remove("hidden");

    if (duration > 0) {
      setTimeout(() => {
        msgBox.classList.add("hidden");
      }, duration);
    }
  }

  function renderSidebar() {
    placesList.innerHTML = '';
    // Sort
    remainingPlaces.sort((a, b) => a.name.localeCompare(b.name));

    remainingPlaces.forEach(p => {
      const li = document.createElement('li');
      li.className = 'place-item';
      li.innerText = p.name;
      li.dataset.name = p.name;
      li.onclick = () => handleListClick(p);
      placesList.appendChild(li);
    });
  }

  // Helper: Find nearest place from ALL places (or remaining? Prompt says "nearest point is revealed... selector offers player all the places left")
  // If the user clicks on a place they already found, maybe nothing happens or it says "Already found".
  // Let's assume we find the nearest place from the FULL list. If it's already found, ignore it.
  function findNearestPlace(x, y) {
    let nearest = null;
    let minDist = Infinity;

    // We need to scale the click coordinates to the natural image dimensions
    const rect = mapImg.getBoundingClientRect();

    // Clicks are relative to viewport? No, event.clientX
    // But mapImg has object-fit. This is tricky. 
    // If object-fit: contain is used, there might be whitespace within the element box if aspect ratios differ.
    // However, we set max-width/height. 
    // Simplest robust way: 
    // Get natural dimensions
    const naturalW = mapImg.naturalWidth;
    const naturalH = mapImg.naturalHeight;

    // Get displayed dimensions of the IMAGE ITSELF (excluding letterbox)
    // Ratio
    const renderRatio = rect.width / rect.height;
    const naturalRatio = naturalW / naturalH;

    let displayW, displayH, offsetX, offsetY;

    if (renderRatio > naturalRatio) {
      // Image is height-constrained (pillarbox)
      displayH = rect.height;
      displayW = displayH * naturalRatio;
      offsetX = (rect.width - displayW) / 2;
      offsetY = 0;
    } else {
      // Image is width-constrained (letterbox)
      displayW = rect.width;
      displayH = displayW / naturalRatio;
      offsetX = 0;
      offsetY = (rect.height - displayH) / 2;
    }

    // Click relative to image content
    // e.clientX - rect.left - offsetX
    // Let's passed in x, y are already clientX, clientY relative to viewport
    // Wait, handleMapClick receives event.

    return null; // Logic moved to handleMapClick
  }

  function getClickCoords(e) {
    const rect = mapImg.getBoundingClientRect();
    const naturalW = mapImg.naturalWidth;
    const naturalH = mapImg.naturalHeight;

    // Calculate the actual size and position of the image within the element
    const elementRatio = rect.width / rect.height;
    const naturalRatio = naturalW / naturalH;

    let displayedWidth, displayedHeight, xOffset, yOffset;

    if (elementRatio > naturalRatio) {
      // Limited by height
      displayedHeight = rect.height;
      displayedWidth = displayedHeight * naturalRatio;
      xOffset = (rect.width - displayedWidth) / 2;
      yOffset = 0;
    } else {
      // Limited by width
      displayedWidth = rect.width;
      displayedHeight = displayedWidth / naturalRatio;
      xOffset = 0;
      yOffset = (rect.height - displayedHeight) / 2;
    }

    // Click position relative to the element
    const clickXInElement = e.clientX - rect.left;
    const clickYInElement = e.clientY - rect.top;

    // Check if click is within the image area
    if (clickXInElement < xOffset || clickXInElement > xOffset + displayedWidth ||
      clickYInElement < yOffset || clickYInElement > yOffset + displayedHeight) {
      return null; // Clicked in letterbox area
    }

    // Map to natural coordinates
    const xInImage = clickXInElement - xOffset;
    const yInImage = clickYInElement - yOffset;

    const scaleX = naturalW / displayedWidth;
    const scaleY = naturalH / displayedHeight;

    return {
      x: Math.round(xInImage * scaleX),
      y: Math.round(yInImage * scaleY),
      // We also need visual coords relative to the map-wrapper (which should match the image rect approx?)
      // Actually, map-wrapper wraps map-img.
      // visualX relative to map-wrapper:
      // map-wrapper should ideally be same size as image? 
      // The dots are absolute in map-wrapper.
      // Let's recalculate visual pos for the dot.
      // map-wrapper is size of the container, but we want dot on valid pixels.
      // Let's pass back the percentage within the element to place the dot?
      // Actually, best to place dot using Top/Left % of the wrapper?

      // "When user clicks... nearest point is revealed... just a dot".
      // The dot should be at the NEAREST POINT's location, not the click location.
    };
  }

  function handleMapClick(e) {
    const coords = getClickCoords(e);
    if (!coords) return;

    // Find nearest
    let nearest = null;
    let minDist = Infinity;

    for (const place of allPlaces) {
      const dx = place.x - coords.x;
      const dy = place.y - coords.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < minDist) {
        minDist = dist;
        nearest = place;
      }
    }

    if (nearest) {
      // Check if found
      const notFound = remainingPlaces.find(p => p.name === nearest.name);
      if (!notFound) {
        showMessage(`Ya has encontrado ${nearest.name}.`, "info");
        return;
      }

      currentTarget = nearest;
      showDot(nearest);

      // Visual feedback? Scroll list?
      // showMessage("¿Qué lugar es este? Selecciónalo en la lista.", "info", 0);
    }
  }

  function showDot(place) {
    // Remove old ACTIVE dot, keep CORRECT dots
    const old = document.querySelector('.dot.active');
    if (old) old.remove();

    const dot = document.createElement('div');
    dot.className = 'dot active';

    // Calculation logic same as before...
    // We need robust visual positioning.
    const rect = mapImg.getBoundingClientRect();
    const naturalW = mapImg.naturalWidth;
    const naturalH = mapImg.naturalHeight;
    const elementRatio = rect.width / rect.height;
    const naturalRatio = naturalW / naturalH;

    let displayedWidth, displayedHeight, xOffset, yOffset;
    if (elementRatio > naturalRatio) {
      displayedHeight = rect.height;
      displayedWidth = displayedHeight * naturalRatio;
      xOffset = (rect.width - displayedWidth) / 2;
      yOffset = 0;
    } else {
      displayedWidth = rect.width;
      displayedHeight = displayedWidth / naturalRatio;
      xOffset = 0;
      yOffset = (rect.height - displayedHeight) / 2;
    }

    const visualX = xOffset + (place.x / naturalW) * displayedWidth;
    const visualY = yOffset + (place.y / naturalH) * displayedHeight;

    dot.style.left = visualX + 'px';
    dot.style.top = visualY + 'px';

    mapWrapper.appendChild(dot);
  }

  function handleListClick(place, listItem) {
    if (!currentTarget) {
      showMessage("Primero haz clic en un punto del mapa.", "error");
      return;
    }

    if (place.name === currentTarget.name) {
      // Correct
      showMessage("¡Correcto!", "success");

      // Logic: Remove from list, Mark as found
      const idx = remainingPlaces.findIndex(p => p.name === place.name);
      if (idx > -1) remainingPlaces.splice(idx, 1);

      // Clear all failed states
      // Actually, re-rendering clears them.
      renderSidebar();
      // updateScore(); // element removed

      // Update dot
      const activeDot = document.querySelector('.dot.active');
      if (activeDot) {
        activeDot.classList.remove('active');
        activeDot.classList.add('correct');

        // Label
        const label = document.createElement('div');
        label.className = 'place-label';
        label.innerText = currentTarget.name;
        label.style.left = activeDot.style.left;
        label.style.top = activeDot.style.top;
        mapWrapper.appendChild(label);
      }

      currentTarget = null;

      if (remainingPlaces.length === 0) {
        showMessage("¡JUEGO COMPLETADO!", "success", 10000);
      }

    } else {
      // Incorrect
      showMessage("Incorrecto.", "error");
      // Mark item as failed (redish)
      // We need ref to list item.
      // renderSidebar needs update to pass element or ID? 
      // We passed 'place' object. We can find the element by dataset.
      const item = placesList.querySelector(`li[data-name="${place.name}"]`);
      if (item) {
        item.classList.add('failed');
      }
    }
  }

  // Keep getClickCoords as is

  // Handle window resize to reposition dots? 
  // Ideally we should but for prototype maybe not strictly required.
  // Let's add simple listener to clear dots if resize happens (brute force) or re-calc.
  // For now, accept dots might drift on resize.
});
