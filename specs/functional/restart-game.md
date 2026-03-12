# Functional Specification: Restart Game

## Summary
The "Restart Game" feature allows a player to reset their current progress and start a new game from the beginning without reloading the entire page.

## Motivation
Players may want to restart a game if they make a mistake early on or if they want to try again to improve their score. Resetting the game without a page reload provides a smoother user experience.

## Design Side-Effects
-   Adds a new "Restart" button to the sidebar.
-   Resets the score and current place index.
-   Clears all dots and labels from the map.
-   May require a confirmation dialog to prevent accidental restarts.

## Requirements
- [ ] A "Restart" button should be visible in the sidebar footer.
- [ ] Clicking "Restart" should prompt the user for confirmation.
- [ ] If confirmed:
    - [ ] The score must be reset to 0.
    - [ ] All previous dots and labels must be removed from the map.
    - [ ] The game must return to the initial state (the first place to find).
    - [ ] The sidebar list must be updated to its initial state.
- [ ] If cancelled, the game state should remain unchanged.

## Implementation Plan
1.  **HTML**: Add a `<button id="btn-restart">` to the `#sidebar-footer` in `index.html`.
2.  **CSS**: Ensure the button is styled consistently in `assets/styles.css`.
3.  **JavaScript**:
    -   Add an event listener for `btn-restart` in `assets/game.js`.
    -   Implement the `restartGame()` function:
        -   Display a `confirm()` dialog.
        -   Reset internal state variables (`score`, `currentIndex`).
        -   Clear the map UI elements (`.dot`, `.place-label`).
        -   Update the sidebar and message box for the first item.

## Verification
-   Start a game, identify a few places correctly, and then click "Restart".
-   Confirm the restart and verify the score is 0 and the map is empty.
-   Start a game and click "Restart" but choose "Cancel" in the confirmation dialog.
-   Verify that the game continues as if nothing happened.
