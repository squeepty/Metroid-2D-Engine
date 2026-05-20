# metroid.ts

`metroid.ts` is the main game engine core. It initializes the canvas, loads assets, manages camera movement, updates game objects, and renders the scene.

## Purpose

This file serves as the entry point of the engine and includes the main update/render loop for the browser game.

## Responsibilities

- setting up keyboard input, asset loading, and UI toggles
- creating the camera and offscreen canvas layers
- spawning `Zoomer` enemies
- maintaining frame timing and FPS calculation
- performing render updates only when needed

## Main Concepts

### Global variables

The file uses global variables for shared state such as:

- camera coordinates: `cameraX`, `cameraY`
- canvas elements / rendering contexts: `camCanvas`, `frontCanvas`, `backCanvas`, `contCanvas`
- map assets and images: `images`, `zoomers`, `config`, `loader`
- timing: `totalElapsed`, `frameCounter`, `previousElapsed`

### Initialization (`window.onload`)

The setup includes:

- keyboard listening for arrow keys
- loading images for sprites and enemies
- reading checkbox configuration UI elements
- creating `Zoomer` instances and spawning them in the map
- creating offscreen canvases for layered rendering
- pre-rendering background and front layers
- starting the animation loop by calling `requestAnimationFrame(prepareNextFrame)`

### Frame loop (`prepareNextFrame`)

This function is the heartbeat of the engine:

- requests the next animation frame
- computes `delta` time and clamps it to 250ms
- updates camera movement and zoomer positions
- renders the game state

### Camera movement (`moveCamera`)

The camera moves based on arrow input at `cameraSpeed = 512` pixels per second.

It computes:

- directional vector from pressed keys
- new camera position based on elapsed time
- bounds clamping to prevent scrolling outside the map

### Rendering (`renderGame` and `renderLayer`)

`renderGame()` updates the controller overlay and draws the current visible scene.

- controller canvas changes when arrow keys are pressed
- front layer is redrawn if the camera moved or grid mode is enabled
- background, map, zoomers, and FPS are conditionally drawn based on config toggles

`renderLayer()` computes the visible block window and draws only the necessary tiles.

Key rendering details:

- uses `cameraX` / `cameraY` offsets for scrolling
- draws tiles with `drawImage(images[mapData[i][j]], x, y)`
- optionally overlays a grid and tile coordinates

## Usage Notes

- The main file currently references DOM image elements for tile sprites directly from `metroid.html`.
- There are TODOs for improved sprite sheet rendering and visibility culling.
- The engine is intentionally simple to make the update/render flow clear.

## Learning Focus

This file is a rich example of:

- orchestrating subsystems in a simple game engine
- implementing fixed-speed camera scrolling
- using offscreen canvases for layered rendering
- calculating delta time for smooth motion
- toggling debug features at runtime
