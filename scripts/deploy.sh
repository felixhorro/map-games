#!/bin/bash

# Configuration
SRC_DIR="src"
DOCS_DIR="docs"

echo "🚀 Starting deployment..."

# 1. Clean docs directory (keeping .gitkeep)
find "$DOCS_DIR" -mindepth 1 ! -name ".gitkeep" -delete

# 2. Copy all files from src to docs
# We use -r to copy recursively. 
# We include index.html, assets/, and the game folders (political, physical).
cp -r "$SRC_DIR/"* "$DOCS_DIR/"

echo "✅ Deployment complete! Clean files copied to $DOCS_DIR"
echo "You can now open $DOCS_DIR/index.html?game=political in your browser."
