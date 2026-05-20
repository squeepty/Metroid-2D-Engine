# keyboard.ts

`keyboard.ts` defines a small keyboard input helper for listening to arrow keys and exposing real-time state.

## Purpose

This module abstracts raw keyboard events into a simple boolean state map. The main game loop uses it to move the camera and highlight controller buttons.

## Exported Class

### `Keyboard`

Encapsulates keyboard event listeners and provides an `isDown()` query for tracked keys.

#### Constants

- `LEFT = 37`
- `RIGHT = 39`
- `UP = 38`
- `DOWN = 40`

These values correspond to browser keyboard key codes for arrow keys.

#### Properties

- `_keys`
  - Object that stores the pressed state for each tracked key.

#### Methods

- `listenForEvents(keys)`
  - Adds `keydown` and `keyup` listeners to `window`.
  - Initializes each supplied key code in `_keys` as `false`.
  - Example: `keyboard.listenForEvents([keyboard.LEFT, keyboard.RIGHT, keyboard.UP, keyboard.DOWN])`.

- `_onKeyDown(event)`
  - Prevents default browser behavior when a tracked key is pressed.
  - Marks the key as pressed.

- `_onKeyUp(event)`
  - Marks tracked keys as released.

- `isDown(keyCode)`
  - Returns whether the requested key is currently pressed.
  - Throws an error if the key is not being tracked.

## Usage Notes

- This class captures state but does not define movement behavior.
- It is designed for continuous input checks inside a game loop.
- Errors are thrown if `isDown()` is called for unregistered keys, which enforces explicit key registration.

## Learning Focus

This file is a good introduction to:

- event-driven input handling in the browser
- separating input state from game logic
- managing key state across frames
