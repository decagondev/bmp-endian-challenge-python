# Ticket 4: Implement BITMAPINFOHEADER Logging

## Description
This ticket requires you to implement the `logBMPInfoHeader` function to parse the **BITMAPINFOHEADER** (bytes 14–53) and log key information fields. This 40-byte header contains critical image metadata including dimensions, color depth, and compression settings. You'll extract width, height, and bit count to validate the BMP format and prepare for pixel data processing.

## Acceptance Criteria
- The function should extract and log the image width from bytes 18–21.
- The function should extract and log the image height from bytes 22–25.
- The function should extract and log the bit count from bytes 28–29.
- The function should validate that the bit count is 24 for 24-bit BMPs.
- The function should log a warning for non-24-bit BMPs.
- The function should be called automatically after successful file header validation.

## Implementation Guidance
- Use the `readInt32LE` function to extract width and height (signed integers).
- Use the `readUInt16LE` function to extract bit count (unsigned 16-bit).
- Log each extracted value to the console for debugging.
- Implement validation logic to check if the bit count equals 24.
- Log appropriate warning messages for unsupported formats.
- Ensure the function integrates with the existing BMP parsing workflow.

## Testing
- **Auto-testing**: Change `CURRENT_TICKET` to `4` at the top of `index.js` to enable automatic testing.
- Check the browser console for test results - you should see "✅ Image Dimensions & Bit Count: PASSED" when your implementation is correct.
- The tests verify that your functions can correctly parse BMP info header data using mock data.
- For manual testing: Upload a 24-bit BMP file and verify that width, height, and bit count are logged correctly to the console.
