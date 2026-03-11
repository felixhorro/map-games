# Deployment Plan

This document outlines the deployment strategy and process for the Map Games project.

## Strategy

We use a "Source-to-Docs" sync strategy. The `src/` directory contains the source of truth, and the `docs/` directory contains the production-ready build.

## Deployment Process

### 1. Local Development
- All changes are made in the `src/` directory.
- Use local tools (like the mapper) to generate coordinates.
- Verify changes locally before pushing.

### 2. Automated Deployment (GitHub Actions)
The project is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

- **Workflow:** [.github/workflows/deploy.yml](file:///Users/felix.horro/projects/europe/.github/workflows/deploy.yml)
- **Deployment Source:** The `src/` directory.
- **Trigger:** Push to `main` branch.

### 3. Manual Sync (Legacy)
The `./scripts/deploy.sh` script was previously used to sync `src/` to `docs/`. This is now deprecated in favor of GitHub Actions, but can still be used for local previews if needed.

```bash
./scripts/deploy.sh
```

## Checkpoints
Before deploying, ensure:
- [ ] No temporary files or "mappers" are in the `src/` folder (only assets intended for the user).
- [ ] `places.json` has been updated with the latest coordinates.
- [ ] The `docs/index.html` file correctly points to the shared assets.

## Public URL
The game is accessible at:
- Political: `.../index.html?game=political`
- Physical: `.../index.html?game=physical`
