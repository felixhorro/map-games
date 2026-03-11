# Architecture Overview

This document describes the high-level architecture of the Map Games project.

## Overview

The project is a client-side web application designed to be a scalable engine for map-based geography games. It uses a unified game engine to handle multiple game types (e.g., Physical, Political).

## Key Components

### 1. Game Engine (`src/assets/game.js`)
The core logic that:
- Reads game configuration from URL parameters (e.g., `?game=physical`).
- Fetches game-specific data (`places.json`).
- Handles map interactions (clicks), coordinate mapping, and score tracking.
- Renders dots and labels on the map.

### 2. Game Data (`src/{game_id}/`)
Each game directory now contains two main data files:
- **`config.json`**: Map image source, dimensions, labels, and categories.
- **`places.json`**: An array of objects with metadata (name, category) and absolute `(x, y)` coordinates relative to the reference dimensions.

### 3. Display Layer (`src/index.html` & `src/assets/styles.css`)
- **index.html**: A single template page used for all games.
- **styles.css**: Unified styling for the game interface, sidebar, and map markers.

### 4. Assets (`src/assets/`)
Shared resources like fonts, common images, and the unified JS/CSS.

## Directory Structure
- `/src`: Source code and data.
- `/public`: Build/distribution folder (produced by `deploy.sh`).
- `/specs`: Project specifications and plans.
- `/tools`: Utility tools (e.g., the coordinate mapper).
- `/scripts`: Automation and deployment scripts.

## Data Flow
1. User opens `index.html?game=X`.
2. `game.js` parses the URL and fetches `X/places.json`.
3. The engine initializes the map with `X/map.jpg`.
4. User interacts with the UI, and the engine updates the state and DOM.
