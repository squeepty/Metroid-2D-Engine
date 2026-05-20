# config.ts

`config.ts` provides a lightweight configuration manager for runtime feature toggles.

## Purpose

This module is used by the main game engine to register checkbox controls and query whether a feature should be active.

## Exported Class

### `Config`

The `Config` class stores a set of named checkbox elements and exposes methods for registering and checking them.

#### Properties

- `configs`
  - Object that maps configuration names to DOM checkbox elements.

#### Methods

- `add(name, checkbox)`
  - Registers a checkbox under a display name.
  - Attaches a `change` event listener to log when the option is toggled.
  - Example: `config.add("background", c1)`.

- `check(name)`
  - Returns the current checked state of the checkbox.
  - Example: `config.check("FPS")`.

## Usage Notes

- The engine expects each named checkbox to already exist in the DOM.
- The module currently uses browser `console.log()` only for debug output.
- This class is ideal for expanding runtime options such as enabling/disabling grid overlay or debug HUD items.

## Learning Focus

This file demonstrates:

- attaching DOM event listeners
- storing DOM elements in a simple configuration object
- separating UI state from game logic
