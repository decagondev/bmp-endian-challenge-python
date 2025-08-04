# Ticket 4: Implement BITMAPINFOHEADER Logging

## Description
This ticket requires implementing the `logBMPInfoHeader` function to parse the **BITMAPINFOHEADER** (bytes 14–53) from the BMP buffer and log its key fields to the console. This 40-byte header contains image dimensions and format details, building on the previous header parsing to prepare for pixel data handling.

## Acceptance Criteria
- The function should accept a byte array buffer as input.
- It should log the image width, height, and bits per pixel using reading functions.
- It should check that the bits per pixel match the expected 24-bit format.
- The function should be callable after validating the initial header.
- A warning should be logged for incompatible bit depths.

## Implementation Guidance
- Use reading functions to extract width, height, and bit count from the buffer.
- Log these values to the console for inspection.
- Add a validation step to check the bit depth.
- Issue a warning if the bit depth does not meet the requirement.
- Ensure the buffer position aligns with the header structure.

## Testing
- Call this function after loading a BMP file.
- Upload a 24-bit BMP and check the console for width, height, and bit count.
- Test with a non-24-bit BMP to verify the warning.
