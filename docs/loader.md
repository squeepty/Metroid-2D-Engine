# loader.ts

`loader.ts` implements a simple asynchronous image loader for sprite assets.

## Purpose

This module loads images in the background and makes them available by key name so the rendering code can use them when ready.

## Exported Class

### `Loader`

Manages a collection of loaded images and offers methods to request and retrieve them.

#### Properties

- `ims`
  - Object mapping image keys to loaded `Image` objects.

#### Methods

- `loadImage(key, src)`
  - Creates a new browser `Image`.
  - Returns a Promise that resolves when the asset loads successfully.
  - Stores the loaded image in `ims` using the provided key.
  - Example: `loader.loadImage("zoomer", "./img/zoomer.jpg")`.

- `getImage(key)`
  - Returns the previously loaded image by key.
  - Returns `null` if the asset is not yet loaded.

## Usage Notes

- Images are loaded asynchronously, so the rest of the engine should gracefully handle missing assets.
- The module currently logs a message when images finish loading.
- This loader can be extended to support other asset types or loading progress tracking.

## Learning Focus

This file teaches:

- asynchronous asset loading with Promises
- using the HTML `Image` API
- caching loaded resources for later use
