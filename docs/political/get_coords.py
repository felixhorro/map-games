import json
import urllib.request
import time
import os

capitals = [
    "Tirana", "Andorra la Vella", "Yerevan", "Vienna", "Baku", "Minsk", "Brussels", "Sarajevo", "Sofia", "Zagreb", "Nicosia", "Prague", "Copenhagen", "Tallinn", "Helsinki", "Paris", "Tbilisi", "Berlin", "Athens", "Budapest", "Reykjavik", "Dublin", "Rome", "Astana", "Pristina", "Riga", "Vaduz", "Vilnius", "Luxembourg City", "Valletta", "Chisinau", "Monaco", "Podgorica", "Amsterdam", "Skopje", "Oslo", "Warsaw", "Lisbon", "Bucharest", "Moscow", "San Marino", "Belgrade", "Bratislava", "Ljubljana", "Madrid", "Stockholm", "Bern", "Ankara", "Kyiv", "London", "Vatican City"
]

coords = {}

for cap in capitals:
    try:
        url = f"https://nominatim.openstreetmap.org/search?q={urllib.parse.quote(cap)}&format=json&limit=1"
        req = urllib.request.Request(url, headers={'User-Agent': 'AntigravityAgent/1.0'})
        response = urllib.request.urlopen(req)
        data = json.loads(response.read())
        if data:
            coords[cap] = {"lat": float(data[0]["lat"]), "lon": float(data[0]["lon"])}
        else:
            print(f"Not found: {cap}")
        time.sleep(1) # respect rate limit
    except Exception as e:
        print(f"Error for {cap}: {e}")

with open("/Users/felix.horro/projects/europe/docs/political/capitals_latlon.json", "w") as f:
    json.dump(coords, f, indent=2)
print("Done")
