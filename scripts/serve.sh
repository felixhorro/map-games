#!/bin/bash

# Default port
PORT=8080
# Default directory to serve
DIRECTORY="docs"

# Allow overriding directory via first argument
if [ ! -z "$1" ]; then
    DIRECTORY="$1"
fi

if [ ! -d "$DIRECTORY" ]; then
    echo "❌ Error: Directory '$DIRECTORY' does not exist."
    exit 1
fi

echo "🚀 Starting Python local server on port $PORT..."
echo "📂 Serving directory: $DIRECTORY"
echo "🔗 URL: http://localhost:$PORT"
echo "Press Ctrl+C to stop the server."

# Run python server
python3 -m http.server $PORT --directory "$DIRECTORY"
