# Ticket 6: Implement RGB Rendering to Canvas

## Description
This ticket requires implementing the `renderRGBToCanvas` function to render an array of color value sets onto the canvas. This function will use the extracted color data to display the BMP image, completing the parsing and rendering process by applying the pixel data to the canvas.

## Acceptance Criteria
- The function should accept an array of color values, width, and height as inputs.
- It should set the canvas dimensions based on the image size.
- It should create a data structure for pixel rendering and populate it with the color data.
- It should use a rendering method to display the image on the canvas.
- The rendered image should reflect the original BMP file’s appearance.

## Implementation Guidance
- Access the canvas element using a DOM method.
- Set the canvas size using the provided dimensions.
- Get the 2D rendering context.
- Create a pixel data structure for the canvas.
- Iterate over the color array:
  - Map each color set to the corresponding pixel position.
  - Assign the color components to the pixel data.
  - Set an opacity value.
- Apply the pixel data to the canvas using a rendering call.
- Ensure this is part of the workflow after extracting color values.

## Testing
- Call this function after extracting color values.
- Upload a 24-bit BMP and verify the canvas shows the correct image.
- Check for accurate color representation.
