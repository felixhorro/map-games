# Deployment Plan

This document outlines the deployment strategy and process for the Map Games project.

## Strategy

We use a "Source-to-Public" sync strategy. The `src/` directory contains the source of truth, and the `public/` directory contains the production-ready build.

## Deployment Process

### 1. Local Development
- All changes are made in the `src/` directory.
- Tools like the mapper are used to generate coordinates, which are then manually updated in `src/{game}/places.json`.

### 2. Manual Deployment (Sync)
To "deploy" the current state of the code to the public folder, run the deployment script:

```bash
./scripts/deploy.sh
```

This script:
- Clears the `public/` folder.
- Synchronizes all files from `src/`.
- Prepares the app for static hosting (e.g., GitHub Pages).

### 3. Automated Deployment (Future)
If the project moves to GitHub Pages, we can automate this via GitHub Actions:
- On push to `main`, run `deploy.sh`.
- Deploy the resulting `public/` folder to the `gh-pages` branch.

## Checkpoints
Before deploying, ensure:
- [ ] No temporary files or "mappers" are in the `src/` folder (only assets intended for the user).
- [ ] `places.json` has been updated with the latest coordinates.
- [ ] The `public/index.html` file correctly points to the shared assets.

## Public URL
The game is accessible at:
- Political: `.../index.html?game=political`
- Physical: `.../index.html?game=physical`
