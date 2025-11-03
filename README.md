## What you'll find here

- `package.json` — dependencies & scripts
- `vite.config.js` — Vite config
- `index.html` — app root
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — top-level React app (Monaco editor + controls)
- `src/Visualizer.jsx` — core visualization logic (parsing, AST traversal, passes, UI mapping)
- `src/astWorker.js` — optional web worker to parse/transform off the main thread
- `src/runtimeHelpers.js` — small helpers used for analysis
- `README` sections inside this file explaining how each file works and how to run locally