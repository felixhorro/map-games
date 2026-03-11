#!/bin/bash

# Configuration
SRC_DIR="src"
PUBLIC_DIR="public"

echo "🚀 Starting deployment..."

# 1. Clean public directory (keeping .gitkeep)
find "$PUBLIC_DIR" -mindepth 1 ! -name ".gitkeep" -delete

# 2. Copy all files from src to public
# We use -r to copy recursively. 
# We include index.html, assets/, and the game folders (political, physical).
cp -r "$SRC_DIR/"* "$PUBLIC_DIR/"

echo "✅ Deployment complete! Clean files copied to $PUBLIC_DIR"
echo "You can now open $PUBLIC_DIR/index.html?game=political in your browser."
