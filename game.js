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

  // ---------------------------------------------------------
  // REFACTOR: Relative Coordinates
  // ---------------------------------------------------------
  // Reference Dimensions (from actual map.jpg)
  const REF_WIDTH = 3000;
  const REF_HEIGHT = 2152;

  // Convert allPlaces absolute coordinates to Percentages 0-100
  // User feedback: Dots are shifted right. Correction: -1.5% on X.
  const X_OFFSET_PCT = -1.5;

  allPlaces.forEach(p => {
    if (p.x !== undefined && p.y !== undefined) {
      p.xPct = (p.x / REF_WIDTH) * 100 + X_OFFSET_PCT;
      p.yPct = (p.y / REF_HEIGHT) * 100;
    }
  });

  let remainingPlaces = [...allPlaces];
  let foundPlaces = [];
  let currentTarget = null;

  // DOM Elements
  const mapImg = document.getElementById('map-img');
  // We need the CONTAINER where dots are appended to calculate relative clicks correctly
  // Dots are appended to mapWrapper? No, now map-container-inner
  const mapContainerInner = document.getElementById('map-container-inner'); // wrapper for relative pos

  const messageBox = document.getElementById('message-box');
  const placesList = document.getElementById('places-list');
  const scoreHeader = document.getElementById('score-header');

  // Initialize
  initGame();

  function initGame() {
    mapImg.addEventListener('click', handleMapClick);
    renderSidebar();
    updateScoreUI(); // Initial Score
    console.log("Juego iniciado.");
  }

  function updateScoreUI() {
    if (scoreHeader) {
      const total = allPlaces.length;
      const found = total - remainingPlaces.length;
      scoreHeader.innerText = `${found}/${total} sitios encontrados`;
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

  // Handle Map Clicks
  // Now we calculate clicks relative to the IMAGE visual display and convert to %.
  function handleMapClick(e) {
    // e.target should be mapImg (or dot?)
    if (e.target !== mapImg && e.target.parentNode !== mapContainerInner) return;

    const rect = mapImg.getBoundingClientRect();

    // Click position relative to the image element
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Check bounds
    if (clientX < 0 || clientX > rect.width || clientY < 0 || clientY > rect.height) return;

    // Convert to Percentage
    const clickPctX = (clientX / rect.width) * 100;
    const clickPctY = (clientY / rect.height) * 100;

    // Find nearest place using PCT distance
    // We compare against p.xPct and p.yPct which include the offsets.
    // To ensure isotropic distance (circles are circles), we should account for aspect ratio of the REFERENCE map.
    // REF_WIDTH = 3000, REF_HEIGHT = 2152. Ratio = 1.39.
    // 1% of Width = 30px. 1% of Height = 21.52px.
    // So dy_pct should be scaled by (21.52/30) = 0.717 to match dx_pct scale?
    // Or just map back to Reference Pixels:

    const clickRefX = (clickPctX / 100) * REF_WIDTH;
    const clickRefY = (clickPctY / 100) * REF_HEIGHT;

    let nearest = null;
    let minDist = Infinity;

    for (const place of allPlaces) {
      // Compare click (in ref pixels) vs Place location (in ref pixels derived from adjusted %)
      // place.xPct is the VISUAL center. We want to click near the visual center.
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

    if (nearest) {
      // Check if already found
      const isRemaining = remainingPlaces.find(p => p.name === nearest.name);
      if (!isRemaining) {
        showMessage(`Ya has encontrado ${nearest.name}.`, "info");
        return;
      }

      currentTarget = nearest;
      showDot(nearest);

      // Visual feedback? Scroll list?
      // No text prompt as requested

      // NEW: Clear error states (red items) when a new dot is placed
      // We can re-render to clear all classes, or check for .failed
      renderSidebar();
    }
  }

  function showDot(place) {
    // Remove old active
    const old = document.querySelector('.dot.active');
    if (old) old.remove();

    const dot = document.createElement('div');
    dot.className = 'dot active';

    // Use Percentage Coordinates
    dot.style.left = place.xPct + '%';
    dot.style.top = place.yPct + '%';

    // Append to the relative container
    mapContainerInner.appendChild(dot);
  }

  function handleListClick(place, listItem) {
    if (!currentTarget) {
      showMessage("Primero haz clic en un punto del mapa.", "error");
      return;
    }

    if (place.name === currentTarget.name) {
      // Correct
      showMessage("¡Correcto!", "success");

      const idx = remainingPlaces.findIndex(p => p.name === place.name);
      if (idx > -1) remainingPlaces.splice(idx, 1);

      renderSidebar();
      updateScoreUI();

      // Update dot style
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
        mapContainerInner.appendChild(label);
      }

      currentTarget = null;

      if (remainingPlaces.length === 0) {
        showMessage("¡JUEGO COMPLETADO!", "success", 10000);
      }

    } else {
      // Incorrect
      showMessage("Incorrecto.", "error");
      const item = placesList.querySelector(`li[data-name="${place.name}"]`);
      if (item) {
        item.classList.add('failed');
      }
    }
  }
});
