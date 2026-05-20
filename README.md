# Metroid 2D Engine

A small vanilla 2D engine prototype inspired by classic *Metroid* exploration and camera-based platformer design.

> This project is built first as an educational sandbox: it explores tile maps, camera scrolling, layered canvas rendering, keyboard input, sprite loading, and entity movement logic in a lightweight browser environment.

## Educational Purpose

This repository is designed to teach and demonstrate how a simple 2D game engine can be built from scratch using raw browser APIs and straightforward game programming concepts.

Key learning goals:

- Understanding tile-based map representation using arrays
- Implementing a scrolling camera over a larger game world
- Drawing multiple canvas layers (background, map, dynamic entities)
- Handling keyboard input for real-time control
- Building entity movement and collision-aware behavior
- Structuring simple game modules in separate source files
- Observing how rendering and update loops work together in an animation frame

## Project Overview

The engine is intentionally minimal and readable, with separate responsibilities for input, asset loading, game logic, and rendering.

### Main features

- 2D map data stored in plain JavaScript arrays (`map.data` and `map.backdata`)
- Camera movement using arrow keys with pixel-perfect scrolling
- Configurable display options for background, map, grid, FPS, and enemies
- A small set of moving enemies called `Zoomer` that navigate around map tiles
- Offscreen canvas layers for efficient redraws
- Simple UI overlay showing controller status and runtime toggles

## Files and Structure

```
src/
  config.ts      - checkbox configuration manager for runtime toggles
  keyboard.ts    - keyboard listener wrapper for arrow key state
  loader.ts      - asynchronous image loader for sprite assets
  metroid.ts     - main engine, game loop, camera, rendering, and map logic
  zoomer.ts      - enemy movement and rendering logic
  metroid.html   - HTML playground with canvas elements and asset references
  css/metroid.css - styling for game layout and display
  img/           - sprite assets used by the engine
```

## How It Works

### Tile map and layers

The map is represented as a grid of numbers:

- `0` means empty space
- `1`, `2`, `3` represent different tile sprites

There are two layers:

- `map.data` is the front collision and ground layer
- `map.backdata` is the background layer

The engine renders only the visible portion of the map based on the current camera position.

### Camera scrolling

The camera is defined in blocks and pixels, and it moves smoothly with a fixed speed of `512` pixels per second.

The engine calculates the visible tile window and uses the camera offset to draw the correct portion of the map.

### Zoomer enemy behavior

`Zoomer` objects are spawned at fixed tile positions and use anchor-based movement logic.

Each zoomer can:

- move straight if path is clear
- decide whether to turn or climb around blocks
- render itself at the current camera offset

This is a useful example of how movement rules and tile-based collision checks can be implemented manually.

### Input and rendering loop

- `Keyboard` listens for arrow keys and stores key state
- `Loader` loads image assets asynchronously
- `requestAnimationFrame` drives the update/render loop
- `renderGame()` redraws canvases only when needed or when grid mode is active

## Learning Exercises

This engine is a strong starting point for many extensions and experiments:

- Add player movement and a proper character sprite
- Introduce collision detection against the front map layer
- Implement tile-based physics for gravity and jumping
- Replace hard-coded map arrays with a level loader or JSON map format
- Add sound effects and music playback
- Improve `Zoomer` AI with better pathfinding
- Refactor the engine into a modern module/bundler workflow

## Notes and TODO

- `metroid.ts` contains TODO comments for future improvements, such as better sprite rendering and screen-only entity drawing
- The project currently uses raw global variables and simple module-like classes for clarity
- This repository is best used as an educational reference rather than a production engine

## Why This Project Matters

By reading and modifying this code, learners can gain confidence in the foundational pieces of game development:

- how data structures drive level design
- how input influences game state
- how render loops keep visuals synchronized with logic
- how canvas transformations (`translate`, `scale`, `rotate`) can create dynamic sprite presentation
- how separate responsibilities make a project easier to understand and extend

Enjoy exploring the code and turning this prototype into a richer 2D game engine!

## Run from GitHub or locally

This project now includes a root `index.html` and generated `dist/` JavaScript output so it can be served directly from a Git URL via GitHub Pages or opened locally after building.

- Run locally:
  1. `npm install`
  2. `npm run build`
  3. Open `index.html` in your browser
- Run on GitHub Pages:
  1. Push the repo to GitHub
  2. Enable GitHub Pages from the repository settings
  3. Visit `https://<your-username>.github.io/<repo-name>/`

If you want a direct GitHub Pages URL, make sure the Pages source is set to the `main` branch and root folder.
