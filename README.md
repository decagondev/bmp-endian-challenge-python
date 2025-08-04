# BMP Endian Challenge

Welcome to the BMP Endian Challenge! This project teaches you how to parse and render BMP image files in the browser using vanilla JavaScript and the Canvas API. You'll implement various functions step-by-step through a series of tickets, learning about binary data parsing, endianness, and image processing.

## 📚 Documentation & Resources

- **[BMP File Structure Guide](BMP-STRUCTURE.md)** - Complete breakdown of BMP file format, headers, and data organization
- **[Endianness Guide](ENDIANNESS.md)** - Understanding big vs little endian for binary data parsing
- **[JavaScript References](REFERENCES.md)** - Official documentation links for Canvas API, FileReader, and other key functions
- **[Development Tickets](tickets/)** - Detailed implementation requirements for each feature

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (to avoid CORS issues with file loading)

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd bmp-endian-challenge
   ```

2. **Start a Local Server**
   
   **Using Node.js**
   ```bash
   # Install a simple HTTP server globally
   npm install -g http-server
   
   # Start the server
   http-server -p 8000
   ```

   **Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Using PHP**
   ```bash
   php -S localhost:8000
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:8000`
   - Open the browser's Developer Tools (F12) to view console output

4. **Test Your Implementation**
   - Use the provided `test.js` to validate your functions
   - Check the console for test results and debugging information

## 📁 Project Structure

```
bmp-endian-challenge/
├── index.html          # Main HTML template with file input and canvas
├── index.js            # JavaScript file with placeholders for implementations
├── test.js             # Comprehensive test suite for all functions
├── README.md           # This file - project overview and setup
├── BMP-STRUCTURE.md    # Detailed BMP file format documentation
├── ENDIANNESS.md       # Endianness explanation and examples
├── REFERENCES.md       # JavaScript API documentation links
├── images/             # Sample BMP files for testing
│   ├── image-1.bmp
│   └── image-2.bmp
└── tickets/            # Individual implementation tickets
    ├── ticket-1.md     # Render Random Colors
    ├── ticket-2.md     # Implement readLE Functions
    ├── ticket-3.md     # BMP Loading and Header Logging
    ├── ticket-4.md     # Info Header Logging
    ├── ticket-5.md     # RGB Values Extraction
    └── ticket-6.md     # RGB Rendering to Canvas
```

## 🧪 Testing Your Code

### Auto-Running Test System

The project includes an integrated test system that automatically runs tests based on your progress. Here's how to use it:

1. **Enable Testing**: At the top of `index.js`, change the `CURRENT_TICKET` constant:
   ```javascript
   const CURRENT_TICKET = 0; // No tests
   const CURRENT_TICKET = 1; // Test Ticket 1
   const CURRENT_TICKET = 2; // Test Tickets 1-2
   const CURRENT_TICKET = 3; // Test Tickets 1-3
   // ... and so on
   ```

2. **Tests Run Automatically**: When you refresh the page, tests for all tickets up to your current number will run automatically.

3. **Cumulative Testing**: Setting `CURRENT_TICKET = 4` will test tickets 1, 2, 3, and 4 together.

4. **Check Results**: Open the browser console (F12) to see test results with clear pass/fail indicators.

### Expected Test Output

When you set `CURRENT_TICKET = 6`, you should see:

```
🧪 Running tests for tickets 1-6...
==================================================

=== Testing Ticket 1: Random Colors Rendering ===
✅ Ticket 1: PASSED (function executed without error)

=== Testing Ticket 2: readLE Functions ===
✅ readUInt32LE: PASSED
✅ readInt32LE: PASSED
✅ readUInt16LE: PASSED

=== Testing Ticket 3: BMP Header Parsing ===
✅ BMP Signature: PASSED
✅ Data Offset: PASSED

=== Testing Ticket 4: BMP Info Header ===
✅ Image Dimensions & Bit Count: PASSED

=== Testing Ticket 5: RGB Values Extraction ===
✅ RGB Extraction: PASSED
   Extracted RGB values: [[255, 0, 0], [0, 0, 255], [0, 255, 0], [255, 255, 255]]

=== Testing Ticket 6: RGB Rendering to Canvas ===
✅ RGB Rendering: PASSED (function executed without error)

==================================================
🎯 Tests complete for tickets 1-6
💡 Change CURRENT_TICKET to test more tickets as you complete them!
```

### Test Details

- **Ticket 1**: Tests that `renderRandomColors()` executes without errors
- **Ticket 2**: Tests bitwise operations for reading little-endian integers
- **Ticket 3**: Tests BMP header parsing with mock data
- **Ticket 4**: Tests BMP info header parsing with mock data
- **Ticket 5**: Tests RGB extraction and BMP row order handling
- **Ticket 6**: Tests RGB rendering to canvas

### Manual Testing (Optional)

You can also manually test by:
- Uploading BMP files to see the complete workflow
- Checking console logs for header information
- Verifying that images display correctly on the canvas

## 🎯 Tickets to Complete

### [Ticket 1: Implement Render Random Colors](tickets/ticket-1.md)
- **Description**: Create a `renderRandomColors` function to fill the canvas with random RGB colors when the page loads.
- **Acceptance Criteria**: Canvas displays random colors on page load without requiring file upload.
- **File**: `index.js` - Look for the `renderRandomColors` function.

### [Ticket 2: Implement readLE Functions](tickets/ticket-2.md)
- **Description**: Implement `readUInt32LE`, `readInt32LE`, and `readUInt16LE` functions for parsing little-endian integers.
- **Acceptance Criteria**: Pass all tests in `test.js` for bitwise operations.
- **File**: `index.js` - Look for the `readUInt32LE`, `readInt32LE`, and `readUInt16LE` functions.

### [Ticket 3: Implement BMP Loading and BITMAPFILEHEADER Logging](tickets/ticket-3.md)
- **Description**: Create `loadBMPAndLogHeader` function to read BMP files and parse the BITMAPFILEHEADER.
- **Acceptance Criteria**: Console logs DataOffset and verifies "BM" signature.
- **File**: `index.js` - Look for the `loadBMPAndLogHeader` function.

### [Ticket 4: Implement BITMAPINFOHEADER Logging](tickets/ticket-4.md)
- **Description**: Create `logBMPInfoHeader` function to parse BITMAPINFOHEADER and log key fields.
- **Acceptance Criteria**: Console logs Width, Height, and BitCount for valid 24-bit BMPs.
- **File**: `index.js` - Look for the `logBMPInfoHeader` function.

### [Ticket 5: Implement RGB Values Extraction](tickets/ticket-5.md)
- **Description**: Create `extractRGBValues` function to extract RGB values from BMP pixel data.
- **Acceptance Criteria**: Returns array of RGB triplets, handles BMP bottom-up row order correctly.
- **File**: `index.js` - Look for the `extractRGBValues` function.

### [Ticket 6: Implement RGB Rendering to Canvas](tickets/ticket-6.md)
- **Description**: Create `renderRGBToCanvas` function to render RGB array onto canvas.
- **Acceptance Criteria**: Canvas displays image matching the BMP file's pixel data.
- **File**: `index.js` - Look for the `renderRGBToCanvas` function.

## 🔧 Development Guidelines

### Implementation Order
1. **Start with Ticket 1** - Get familiar with the Canvas API
2. **Complete Ticket 2** - Master bitwise operations for endianness
3. **Work through Tickets 3-6** - Build the BMP parsing pipeline

### Key Concepts
- **Canvas API**: Use `createImageData` and `putImageData` for rendering
- **BMP Format**: Handle bottom-up row order and 4-byte row padding
- **Endianness**: BMP files use little-endian byte order (see [ENDIANNESS.md](ENDIANNESS.md))
- **Bitwise Operations**: Essential for reading binary data correctly

### Testing Strategy
- Run `test.js` after completing each ticket
- Use the provided sample BMP files in the `images/` directory
- Check browser console for error messages and validation logs
- Ensure all tests pass before moving to the next ticket

## 📝 Submission

Submit your completed `index.js` with all functions implemented and passing the `test.js` checks. Ensure all tickets are completed and the BMP viewer works end-to-end.

## 🆘 Troubleshooting

- **CORS Errors**: Make sure you're serving files through a local web server, not opening `index.html` directly
- **File Not Loading**: Ensure you're using a valid 24-bit BMP file
- **Tests Failing**: Check that your functions match the expected signatures and return values
- **Canvas Not Updating**: Verify your rendering functions are being called in the correct order
- **Bitwise Operations**: Double-check your endianness handling in the readLE functions

## 📖 Additional Resources

- [MDN Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
- [MDN TypedArray Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- [BMP File Format Specification](https://en.wikipedia.org/wiki/BMP_file_format)

## 🎓 Learning Objectives

By completing this challenge, you will learn:
- Binary data parsing and endianness concepts
- Canvas API for image rendering
- FileReader API for client-side file processing
- Bitwise operations in JavaScript
- BMP file format structure and parsing
- Step-by-step debugging and testing strategies
