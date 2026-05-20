# zoomer.ts

`zoomer.ts` defines the `Zoomer` enemy and its movement, collision, and rendering logic.

## Purpose

This module models a small enemy that navigates tile-based levels using anchor-based movement rules. It is a good case study in entity logic and map interaction.

## Exported Class

### `Zoomer`

Represents a moving object with directional state, an anchor side, and map-aware movement rules.

#### Anchor Values

- `TOP = 1`
- `DOWN = 2`
- `LEFT = 3`
- `RIGHT = 4`

#### Direction Values

- `CLOCK = 1`
- `COUNTERCLOCK = 0`

#### Properties

- `direction`
  - Current rotational movement direction.
- `anchor`
  - Side of the block to which the zoomer is attached.
- `x`, `y`
  - Pixel-level coordinates of the zoomer.
- `map`
  - Reference to the tile map used for movement decisions.

#### Methods

- `render(ctx, cameraX, cameraY)`
  - Draws the zoomer sprite onto the game canvas.
  - Uses canvas transforms to mirror or rotate the image depending on anchor orientation.

- `spawn(map, direction, anchor, x, y)`
  - Initializes the enemy with a map reference and starting tile coordinates.
  - Converts tile values into pixel coordinates.

- Movement decision helpers
  - `_canMoveStraightClock()` / `_canMoveStraightCounter()`
  - `_canTurnClock()` / `_canTurnCounter()`
  - `_canClimbClock()` / `_canClimbCounter()`

Each helper checks the `map.data` array for empty and solid tiles to determine whether the zoomer can move in a particular way.

## Usage Notes

- The `Zoomer` assumes the global `map` object and block dimensions like `blockWitdh` / `blockHeight` are available.
- The movement methods are implemented as low-level rules and can be refactored into a cleaner state machine.
- `render()` is currently not optimized for on-screen checks; it draws all zoomers regardless of visibility.

## Learning Focus

This file demonstrates:

- map-aware entity logic in a tile-based game
- using canvas transformations for sprite orientation
- how movement decisions are derived from neighbor tiles
- how to separate spawn/setup from render/update logic
