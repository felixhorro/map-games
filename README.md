# Europe Geography Games

A project to learn and play with European geography maps (political and physical).

## Project Structure

This project follows a clean organization inspired by Spec-Driven Development standards.

- **[/src](file:///Users/felix.horro/projects/europe/src)**: The source of truth for the application. All development happens here.
  - `/assets`: Shared CSS, JS (game logic), and images.
  - `/political`: Game configuration and places data.
  - `/physical`: Game configuration and places data.
  - (Each game folder contains `config.json` and `places.json`).
- **[/docs](file:///Users/felix.horro/projects/europe/docs)**: The folder served to the user. This is generated/synced from `src` using the deployment script.
- **[/specs](file:///Users/felix.horro/projects/europe/specs)**: Functional and technical specifications for the project.
  - `/functional`: User-facing features and requirements.
  - `/technical`: Architecture, deployment, and implementation details.
- **[/tools](file:///Users/felix.horro/projects/europe/tools)**: Development utilities, such as the map coordinate mapper.
- **[/scripts](file:///Users/felix.horro/projects/europe/scripts)**: Automation scripts, including deployment.
- **[/tests](file:///Users/felix.horro/projects/europe/tests)**: Placeholders for automated tests to verify game logic.

## Deployment

To sync changes from `src` to `docs`, run:

```bash
./scripts/deploy.sh
```

## How to Run

1. Open `docs/index.html` in your browser.
2. Use the query parameter `?game=political` or `?game=physical` to switch between games.
