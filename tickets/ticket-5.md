# Ticket 5: Implement RGB Values Extraction

## Description
This ticket involves implementing the `extractRGBValues` function to extract RGB values from the BMP pixel data as an array of color triplets. The function will use the data offset, image dimensions, and row padding to navigate the pixel array, preparing the data for rendering.

## Acceptance Criteria
- The function should take a buffer, data offset, width, and height as inputs.
- It should return an array of color value sets.
- It should account for row padding to align data properly.
- It should extract color values from the buffer starting at the offset.
- The array should contain the correct number of color sets for the image.

## Implementation Guidance
- Initialize an array to hold the color data.
- Calculate the number of bytes per row based on pixel size.
- Determine the padding needed for row alignment.
- Use nested loops to iterate over the image area:
  - Adjust row index based on image orientation.
  - Compute the position of each pixel in the buffer.
  - Extract the color components from the buffer.
  - Add the color set to the array.
- Return the completed array.

## Testing
- Call this function after parsing the headers.
- Log a sample of the array to verify color extraction.
- Ensure the array size matches the image dimensions.
