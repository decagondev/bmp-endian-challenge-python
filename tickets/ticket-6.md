# Ticket 6: Implement RGB Rendering to Canvas

## Description
This final ticket requires you to implement the `renderRGBToCanvas` function to display the extracted RGB values on the HTML canvas. You'll convert the RGB array into canvas pixel data, set the canvas dimensions to match the image, and render the pixels using the Canvas API. This completes the BMP parsing pipeline, allowing users to view uploaded BMP images in the browser.

## Acceptance Criteria
- The function should accept an array of RGB values and image dimensions.
- It should set the canvas dimensions to match the image size.
- It should convert RGB values to canvas pixel data format.
- It should render the pixels to the canvas using the Canvas API.
- The displayed image should match the original BMP file.
- The function should handle different image dimensions correctly.

## Implementation Guidance
- Get the canvas element and set its width and height properties.
- Obtain the 2D rendering context from the canvas.
- Create an ImageData object with the appropriate dimensions.
- Convert RGB triplets to RGBA pixel data (add alpha channel).
- Use nested loops to populate the ImageData array.
- Apply the pixel data to the canvas using `putImageData`.
- Ensure proper coordinate mapping from RGB array to canvas pixels.

## Testing
- **Auto-testing**: Change `CURRENT_TICKET` to `6` at the top of `index.js` to enable automatic testing.
- Check the browser console for test results - you should see "✅ RGB Rendering: PASSED" when your implementation is correct.
- The tests verify that your function can render RGB data to the canvas without errors.
- For manual testing: Upload a BMP file and verify that the image displays correctly on the canvas.
- The complete workflow should now work end-to-end: upload BMP → parse headers → extract RGB → display image.
