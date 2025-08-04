# Ticket 5: Implement RGB Values Extraction

## Description
This ticket involves implementing the `extractRGBValues` function to extract RGB color values from the BMP pixel data. You'll navigate the pixel data section starting from the data offset, handle BMP's bottom-up row order, account for row padding, and convert BGR (Blue-Green-Red) values to RGB format. This function is crucial for preparing the pixel data for canvas rendering.

## Acceptance Criteria
- The function should extract RGB values from the pixel data starting at the data offset.
- It should handle BMP's bottom-up row order correctly (rows stored from bottom to top).
- It should account for 4-byte row padding in the pixel data.
- It should convert BGR values to RGB format (BMP stores as BGR).
- It should return an array of RGB triplets `[R, G, B]`.
- The array length should match the image dimensions (width × height).

## Implementation Guidance
- Calculate the bytes per row: `width * 3` (3 bytes per pixel for 24-bit).
- Calculate row padding: `(4 - (bytesPerRow % 4)) % 4`.
- Handle bottom-up row order: if height > 0, read rows from bottom to top.
- For each pixel, extract BGR values and convert to RGB.
- Store RGB values in an array of triplets.
- Ensure proper bounds checking to avoid buffer overruns.

## Testing
- **Auto-testing**: Change `CURRENT_TICKET` to `5` at the top of `index.js` to enable automatic testing.
- Check the browser console for test results - you should see "✅ RGB Extraction: PASSED" when your implementation is correct.
- The tests verify that your function correctly extracts RGB values and handles BMP row order using mock data.
- The console will show the extracted RGB values for verification.
