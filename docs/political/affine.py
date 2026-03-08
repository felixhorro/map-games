import json

# Lat/Lon
x1, y1 = -21.9422, 64.1459   # Reykjavik
x2, y2 = -3.7033, 40.4167    # Madrid
x3, y3 = 33.3614, 35.1706    # Nicosia

# Map Pixels
p1x, p1y = 131, 87
p2x, p2y = 144, 751
p3x, p3y = 902, 905

def det_3x3(m):
    return (m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
            m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
            m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]))

# Matrix for A, B, C
M = [
    [x1, y1, 1],
    [x2, y2, 1],
    [x3, y3, 1]
]
D = det_3x3(M)

MA = [[p1x, y1, 1], [p2x, y2, 1], [p3x, y3, 1]]
MB = [[x1, p1x, 1], [x2, p2x, 1], [x3, p3x, 1]]
MC = [[x1, y1, p1x], [x2, y2, p2x], [x3, y3, p3x]]

A = det_3x3(MA) / D
B = det_3x3(MB) / D
C = det_3x3(MC) / D

MD = [[p1y, y1, 1], [p2y, y2, 1], [p3y, y3, 1]]
ME = [[x1, p1y, 1], [x2, p2y, 1], [x3, p3y, 1]]
MF = [[x1, y1, p1y], [x2, y2, p2y], [x3, y3, p3y]]

D_coeff = det_3x3(MD) / D
E_coeff = det_3x3(ME) / D
F_coeff = det_3x3(MF) / D

with open('/Users/felix.horro/projects/europe/docs/political/capitals_latlon.json') as f:
    data = json.load(f)

with open('/Users/felix.horro/projects/europe/docs/political/places.json') as f:
    places = json.load(f)

out_countries = []
out_capitals = []

for idx, country in enumerate(places['Countries']):
    capital = places['Capitals'][idx]
    
    if capital in data:
        lat = data[capital]['lat']
        lon = data[capital]['lon']
        
        # We need a proper map projection for better accuracy.
        # Europe typically uses Lambert Azimuthal Equal Area or similar.
        # But for this simple affine mapping, we just try it out.
        # Standard stereographic might be better, but let's test affine.
        map_x = A * lon + B * lat + C
        map_y = D_coeff * lon + E_coeff * lat + F_coeff
        
        # Check clipping/wrapping for map edge
        
        out_countries.append({"category": "Countries", "name": country, "x": int(map_x), "y": int(map_y)})
        
        # Placing capital slightly below or above country dot so they don't overlap.
        # We'll just put capital at same X, Y+15
        out_capitals.append({"category": "Capitals", "name": capital, "x": int(map_x), "y": int(map_y) + 15})
    else:
        print(f"Skipping {capital}")

final_list = out_countries + out_capitals

with open('/Users/felix.horro/projects/europe/docs/political/places_with_coords_gemini.json', 'w') as f:
    json.dump(final_list, f, indent=4)
print("Saved outputs")
