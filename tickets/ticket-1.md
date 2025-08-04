# Ticket 1: Implement Render Random Colors

## Description
This ticket tasks you with implementing the `renderRandomColors` function to fill the canvas with random RGB colors when the page loads. The goal is to create a dynamic visual starting point for the BMP Viewer, allowing users to see a colorful display before uploading a file. You'll use the Canvas API to generate random color values and apply them to the canvas, helping you explore basic rendering techniques.

## Acceptance Criteria
- The canvas should display a pattern or solid color composed of random RGB values when the page loads.
- Each pixel or a significant portion of the canvas should have a unique or pseudo-random color.
- The function should be triggered automatically via the `window.onload` event.
- No file upload should be required to see the random colors.
- The canvas dimensions can be set to a default size or adjusted dynamically.

## Implementation Guidance
- Access the canvas element using a DOM method.
- Define the canvas dimensions using appropriate properties.
- Obtain the 2D rendering context.
- Create a data structure to hold pixel information.
- Use loops to iterate over the canvas area:
  - Generate random values for color channels.
  - Assign these values to the pixel data structure.
- Apply the pixel data to the canvas using a rendering method.
- Ensure the function runs on page load.

## Testing
- Open `index.html` in a browser after serving it locally.
- Verify that the canvas displays random colors immediately upon loading, without needing a file.
- **Auto-testing**: Change `CURRENT_TICKET` to `1` at the top of `index.js` to enable automatic testing.
- Check the browser console for test results - you should see "✅ Ticket 1: PASSED" when your implementation is correct.
