# BMP Parser Starter Project

Welcome to the BMP Parser Starter Project! This project provides a skeleton for parsing and rendering BMP image files in the browser using vanilla JavaScript and the Canvas API. Your task is to implement the logic for various functionalities as outlined in the tickets below. The project uses Tailwind CSS for styling and includes a basic HTML structure with a file input and canvas.

## Getting Started

1. **Clone the Repository**: Set up the project locally.
2. **Install a Local Server**: Use a tool like Python (`python -m http.server 8000`) to serve the files.
3. **Open in Browser**: Navigate to `http://localhost:8000` and open `index.html`.
4. **Test Your Code**: Use the provided `test.js` to verify the `readLE` functions.

## Project Structure
- `index.html`: The HTML template with file input and canvas.
- `index.js`: JavaScript file with placeholders for your implementations.
- `test.js`: Test file to validate `readLE` functions.

## Tickets to Complete

### Ticket 1: Implement Render Random Colors
- **Description**: Create a `renderRandomColors` function to fill the canvas with random RGB colors when the page loads. Use the Canvas API to generate a pattern or solid color with random values (0-255 for R, G, B).
- **Acceptance Criteria**: The canvas should display random colors on page load without requiring a file upload.
- **File**: `index.js`
- **Placeholder**: Look for the `renderRandomColors` function.

### Ticket 2: Implement readLE Functions
- **Description**: Implement `readUInt32LE`, `readInt32LE`, and `readUInt16LE` functions to parse little-endian integers from a `Uint8Array` buffer using bitwise operations. These functions are critical for reading BMP header data.
- **Acceptance Criteria**: Pass the tests in `test.js`, which checks against sample byte sequences (e.g., 0x12345678, 0xFF800000, 0xABCD).
- **File**: `index.js`
- **Placeholder**: Look for the `readUInt32LE`, `readInt32LE`, and `readUInt16LE` functions.
- **Testing**: Run `test.js` in the console or a test environment.

### Ticket 3: Implement BMP Loading and BITMAPFILEHEADER Logging
- **Description**: Create a `loadBMPAndLogHeader` function to read a BMP file using `FileReader`, parse the BITMAPFILEHEADER (offset 0–13), and log its fields (e.g., DataOffset at offset 10) to the console.
- **Acceptance Criteria**: Console logs the DataOffset and verifies the signature is "BM" for valid BMP files.
- **File**: `index.js`
- **Placeholder**: Look for the `loadBMPAndLogHeader` function.
- **Trigger**: Called when a file is selected in the event listener.

### Ticket 4: Implement BITMAPINFOHEADER Logging
- **Description**: Create a `logBMPInfoHeader` function to parse the BITMAPINFOHEADER (offset 14–53) from the BMP buffer and log its fields (e.g., Width at 18, Height at 22, BitCount at 28) to the console.
- **Acceptance Criteria**: Console logs Width, Height, and BitCount, ensuring they match a valid 24-bit BMP.
- **File**: `index.js`
- **Placeholder**: Look for the `logBMPInfoHeader` function.
- **Trigger**: Called after `loadBMPAndLogHeader`.

### Ticket 5: Implement RGB Values Extraction
- **Description**: Create an `extractRGBValues` function to extract RGB values from the BMP pixel data as an array of `[R, G, B]` triplets, starting at the data offset.
- **Acceptance Criteria**: Returns an array of RGB values based on width, height, and row padding (4-byte alignment).
- **File**: `index.js`
- **Placeholder**: Look for the `extractRGBValues` function.
- **Parameters**: `buffer`, `dataOffset`, `width`, `height`.

### Ticket 6: Implement RGB Rendering to Canvas
- **Description**: Create a `renderRGBToCanvas` function to render the RGB array onto the canvas using the Canvas API.
- **Acceptance Criteria**: The canvas displays the image based on the RGB array, matching the BMP file’s pixel data.
- **File**: `index.js`
- **Placeholder**: Look for the `renderRGBToCanvas` function.
- **Parameters**: `rgbValues`, `width`, `height`.
- **Trigger**: Called after extracting RGB values.

## Development Notes
- Use the Canvas API (`createImageData`, `putImageData`) for rendering.
- Handle BMP’s bottom-up row order (if height > 0) and 4-byte row padding.
- Test with 24-bit uncompressed BMP files.
- Errors can be logged to the console for debugging.

## Submission
Submit your completed `index.js` with all functions implemented and passing the `test.js` checks.
