# Functional Specification: Page Title

## Summary
The goal of this feature is to dynamically update the browser tab title (the `<title>` tag) to reflect the specific game being played, rather than showing a generic or static title.

## Motivation
Updating the page title provides immediate context to the user about which game they are playing. It also improves the user experience when navigating between multiple open tabs.

## Design Side-Effects
- No impact on game performance.
- Changes the existing behavior where the title might be static (e.g., "Map Games").

## Requirements
- [ ] The page title must update automatically when a game is loaded.
- [ ] The title should follow a consistent format: `Map Games - [Game Name]`.
- [ ] The "Game Name" should be derived from the game's metadata (e.g., in `config.json`).
- [ ] If no specific game name is found, a default title like `Map Games` should be used.

## Implementation Plan
1. Update `config.json` for each game to include a `displayName` or similar property if not already present.
2. Modify `src/assets/game.js` to read the game name from the configuration.
3. Use `document.title = ...` to set the new title once the configuration is processed.

## Verification
- Open the Political Europe game and verify the tab title is "Map Games - Political Europe".
- Open the Physical Europe game and verify the tab title is "Map Games - Physical Europe".
- Verify that the title is updated immediately upon page load.
