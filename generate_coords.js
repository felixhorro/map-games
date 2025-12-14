
const fs = require('fs');
const path = require('path');

const places = {
    // Ríos
    "Vístula": { lat: 54.3, lon: 18.9 }, // Mouth
    "Don": { lat: 47.1, lon: 39.3 }, // Mouth
    "Rin": { lat: 51.9, lon: 4.0 }, // Mouth (Rotterdam)
    "Sena": { lat: 49.4, lon: 0.1 }, // Mouth (Le Havre)
    "Loira": { lat: 47.2, lon: -2.2 }, // Mouth (St Nazaire)
    "Ródano": { lat: 43.3, lon: 4.8 }, // Mouth
    "Po": { lat: 44.9, lon: 12.5 }, // Mouth
    "Danubio": { lat: 45.2, lon: 29.7 }, // Delta

    // Mares
    "Mar Blanco": { lat: 65.5, lon: 36.8 },
    "Mar del Norte": { lat: 56.0, lon: 3.0 },
    "Mar Báltico": { lat: 57.7, lon: 19.4 },
    "Mar Caspio": { lat: 41.6, lon: 50.7 },
    "Mar Mediterráneo Central": { lat: 35.0, lon: 18.0 },
    "Mar Negro": { lat: 43.4, lon: 34.3 },
    "Azov": { lat: 46.0, lon: 36.5 }, // Mar de Azov

    // Otros
    "Islandia": { lat: 64.9, lon: -19.0 },
    "Cabo del Norte": { lat: 71.1, lon: 25.7 },
    "Pechora": { lat: 68.3, lon: 54.5 }, // River mouth?
    "Montañas Urales": { lat: 60.0, lon: 59.0 },
    "Islas Feroe": { lat: 62.0, lon: -6.7 },
    "Montes Escandinavos": { lat: 65.0, lon: 14.0 },
    "Península Escandinava": { lat: 63.0, lon: 14.0 },
    "Volga": { lat: 46.7, lon: 47.8 }, // Mouth in Caspian
    "Irlanda": { lat: 53.4, lon: -7.7 },
    "Gran Bretaña": { lat: 54.0, lon: -2.0 },
    "Ural": { lat: 50.0, lon: 51.0 }, // River or Mts? Usually River Ural.
    "Elbrus": { lat: 43.3, lon: 42.4 },
    "Los Alpes": { lat: 46.5, lon: 10.0 },
    "Mont Blanc": { lat: 45.8, lon: 6.8 },
    "Montes Cárpatos": { lat: 47.0, lon: 25.5 },
    "Monte Olimpo": { lat: 40.0, lon: 22.3 },
    "Creta": { lat: 35.2, lon: 24.9 },
    "Chipre": { lat: 35.1, lon: 33.3 },
    "Malta": { lat: 35.9, lon: 14.4 },
    "Sicilia": { lat: 37.5, lon: 14.0 },
    "Cerdeña": { lat: 40.1, lon: 9.0 },
    "Elba": { lat: 42.7, lon: 10.2 },
    "Córcega": { lat: 42.1, lon: 9.0 },
    "Golfo de León": { lat: 42.9, lon: 4.8 },
    "Islas Baleares": { lat: 39.5, lon: 3.0 },
    "Estrecho de Gibraltar": { lat: 35.9, lon: -5.5 },
    "Península Ibérica": { lat: 40.4, lon: -3.7 },
    "Meseta Central": { lat: 40.5, lon: -3.5 }, // Spain
    "Tajo": { lat: 38.7, lon: -9.1 }, // Mouth (Lisbon)
    "Ebro": { lat: 40.7, lon: 0.8 }, // Mouth
    "Golfo de Vizcaya": { lat: 45.0, lon: -4.0 },
    "Aneto": { lat: 42.6, lon: 0.6 },
    "Cuenca del Caspio": { lat: 45.0, lon: 50.0 }, // Broad Lowland
    "Macizo Central": { lat: 45.4, lon: 2.9 }, // France
    "Selva Negra": { lat: 48.3, lon: 8.2 },
    "Balcanes": { lat: 42.7, lon: 25.0 }, // Balkan Mts
    "Mulhacén": { lat: 37.0, lon: -3.3 },

    // Otros que quiero poner
    "Cabo de Finisterre": { lat: 42.8, lon: -9.2 },
    "Cabo de St Vicente": { lat: 37.0, lon: -8.9 },
    "Mar Mediterráneo": { lat: 38.0, lon: 5.0 }, // Western
    "Océano Atlántico": { lat: 45.0, lon: -15.0 },
    "Océano Ártico": { lat: 75.0, lon: 10.0 },
    "Lago Ladoga": { lat: 61.0, lon: 31.0 },
    "Península Italiana": { lat: 43.0, lon: 12.0 },
    "Península Jutland": { lat: 56.0, lon: 9.5 }, // Denmark

    // Desconocidos / Corrections
    "Meseta final": { lat: 62.0, lon: 35.0 }, // Guessing Valdai/Onega? Or maybe "Meseta Finlandesa"?
    "Duina del norte": { lat: 64.5, lon: 40.5 }, // Northern Dvina (Arkhangelsk)
    "Vasgos": { lat: 48.1, lon: 7.0 }, // Vosges
    "Etha": { lat: 37.7, lon: 15.0 } // Etna
};

// Map Projection Logic (Approximation)
// Lambert Conformal Conic (LCC)
// Parameters guessed for standard Europe map
const R = 6371; // Earth radius
const LCC_LON0 = 20 * (Math.PI / 180); // Central Meridian 20E
const LCC_LAT0 = 50 * (Math.PI / 180); // Reference Lat (not critical for relative)
const LCC_STD_PARALLEL = 50 * (Math.PI / 180); // Single parallel approx

function project(latDeg, lonDeg) {
    // Simple Conic
    // r = C - lat
    // theta = (lon - lon0) * sin(std_parallel) ??
    // Using standard formulas:
    // n = sin(phi1)  (if 1 SP) or ...
    // Let's use simple cone:
    const n = Math.sin(LCC_STD_PARALLEL);
    const F = (Math.cos(LCC_STD_PARALLEL) * Math.pow(Math.tan(Math.PI / 4 + LCC_STD_PARALLEL / 2), n)) / n;
    
    const latRad = latDeg * (Math.PI / 180);
    const lonRad = lonDeg * (Math.PI / 180);
    
    const rho = F * Math.pow(1 / Math.tan(Math.PI / 4 + latRad / 2), n);
    const theta = n * (lonRad - LCC_LON0);
    
    // x = rho * sin(theta)
    // y = -rho * cos(theta) (Standard polar to cartesian, y up? Usually map y is down)
    // Map Y is down, so we flip later.
    const x = rho * Math.sin(theta);
    const y = -rho * Math.cos(theta); // This y increases northwards (rho decreases).
    
    return { x, y };
}

// Calibration Points (Lat/Long -> Pixel X/Y)
// X/Y are for 3000x2152 image
const calibration = [
    { geo: { lat: 39.5, lon: -0.4 }, pixel: { x: 660, y: 1614 } }, // Valencia (Lat 40, Lon 0 approx)
    { geo: { lat: 60.0, lon: 30.0 }, pixel: { x: 1950, y: 645 } }, // St Petersburg
    { geo: { lat: 36.0, lon: -5.5 }, pixel: { x: 360, y: 1830 } }, // Gibraltar
    { geo: { lat: 71.1, lon: 25.8 }, pixel: { x: 1650, y: 215 } }, // North Cape
    { geo: { lat: 51.5, lon: 0.0 }, pixel: { x: 720, y: 1100 } }, // London
    { geo: { lat: 35.0, lon: 33.3 }, pixel: { x: 2550, y: 1900 } }  // Cyprus (Guess)
];

// Fit affine transform: Pixel = A * Projected + B
// Px = ax * Px_proj + bx * Py_proj + cx
// Py = ay * Px_proj + by * Py_proj + cy

function solveAffine(calibData) {
    // Simple linear regression for x and y separately
    // We want to minimize error.
    // Inputs: Px_proj, Py_proj. Target: PixelX.
    // X = a*u + b*v + c
    
    // Prepare matrices?
    // Let's iterate to find best a,b,c
    // Or just use 3 points to solve exactly.
    // Let's use first 3 points.
    const p1 = calibData[0];
    const p2 = calibData[1];
    const p3 = calibData[2];
    
    const proj1 = project(p1.geo.lat, p1.geo.lon);
    const proj2 = project(p2.geo.lat, p2.geo.lon);
    const proj3 = project(p3.geo.lat, p3.geo.lon);
    
    // Solving linear system is annoying in raw JS without libraries.
    // Let's assume Map X aligns with Proj X roughly, and Map Y with Y.
    // Px = scale * Px_proj + offX
    // Py = -scale * Py_proj + offY (since map y is inverted relative to proj y usually)
    // This assumes perfectly north-up oriented map at center and standard projection.
    
    // Let's try simple scale/offset fit first.
    // Px = S_x * Proj_x + O_x
    // Py = S_y * Proj_y + O_y
    
    // Use P1 and P2 to find S and O.
    const Sx = (p2.pixel.x - p1.pixel.x) / (proj2.x - proj1.x);
    const Ox = p1.pixel.x - Sx * proj1.x;
    
    const Sy = (p2.pixel.y - p1.pixel.y) / (proj2.y - proj1.y);
    const Oy = p1.pixel.y - Sy * proj1.y;
    
    return { Sx, Ox, Sy, Oy };
}

const transform = solveAffine(calibration);
console.log('Transform:', transform);

// Read original places.json
const rawJson = fs.readFileSync('places.json', 'utf8');
const data = JSON.parse(rawJson);

// Flatten
const flatList = [];
for (const cat in data) {
    data[cat].forEach(name => {
        let coords = places[name];
        if (!coords) {
            console.warn(`Warning: No coordinates for ${name}. Using 0,0.`);
            coords = { lat: 0, lon: 0 };
        }
        
        const proj = project(coords.lat, coords.lon);
        const pidX = Math.round(transform.Sx * proj.x + transform.Ox);
        const pidY = Math.round(transform.Sy * proj.y + transform.Oy);
        
        flatList.push({
            name: name,
            category: cat,
            x: pidX,
            y: pidY
        });
    });
}

// Write result
fs.writeFileSync('places_with_coords.json', JSON.stringify(flatList, null, 2));
console.log('Done.');
