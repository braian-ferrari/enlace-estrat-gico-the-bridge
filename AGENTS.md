# Architecture

- Keep service content in `src/data/services.ts` so navigation and the Services page share one source of truth and cannot drift.
- Keep desktop content routes within the viewport below the navbar; long content scrolls inside panels, while mobile keeps natural page scrolling for readability.