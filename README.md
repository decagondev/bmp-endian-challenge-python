# BMP Parser Starter Project

Welcome to the BMP Parser Starter Project! This project provides a skeleton for parsing and rendering BMP image files in the browser using vanilla JavaScript and the Canvas API. Your task is to implement the logic for various functionalities as outlined in the tickets below. The project uses Tailwind CSS for styling and includes a basic HTML structure with a file input and canvas.

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
   
   **Option A: Using Python (Recommended)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js**
   ```bash
   # Install a simple HTTP server globally
   npm install -g http-server
   
   # Start the server
   http-server -p 8000
   ```
   
   **Option C: Using PHP**
   ```bash
   php -S localhost:8000
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:8000`
   - Open `index.html` in your browser
   - Open the browser's Developer Tools (F12) to view console output

4. **Test Your Implementation**
   - Use the provided `test.js` to validate your `readLE` functions
   - Check the console for test results and debugging information

## 📁 Project Structure

```
bmp-endian-challenge/
├── index.html          # Main HTML template with file input and canvas
├── index.js            # JavaScript file with placeholders for implementations
├── test.js             # Test suite for readLE functions
├── README.md           # This file - project overview and setup
├── BMP-STRUCTURE.md    # Detailed BMP file format documentation
├── ENDIANNESS.md       # Endianness explanation and examples
├── REFERENCES.md       # JavaScript API documentation links
└── tickets/            # Individual implementation tickets
    ├── ticket-1.md     # Render Random Colors
    ├── ticket-2.md     # Implement readLE Functions
    ├── ticket-3.md     # BMP Loading and Header Logging
    ├── ticket-4.md     # Info Header Logging
    ├── ticket-5.md     # RGB Values Extraction
    └── ticket-6.md     # RGB Rendering to Canvas
```

## 🧪 Testing Your Code

### Running the Test Suite

The `test.js` file contains automated tests for the `readLE` functions (Ticket 2). To run the tests:

1. **In Browser Console:**
   - Open `index.html` in your browser
   - Open Developer Tools (F12)
   - Go to the Console tab
   - Copy and paste the contents of `test.js` into the console
   - Press Enter to run the tests

2. **Expected Test Output:**
   ```
   Running tests for readLE functions...
   readUInt32LE test: PASSED
   readInt32LE test: PASSED
   readUInt16LE test: PASSED
   Tests complete.
   ```

### Manual Testing Checklist

Based on the tickets, here's what you should test:

#### Ticket 1: Render Random Colors ✅
- [ ] Canvas displays random colors immediately when page loads
- [ ] Colors change on each page refresh
- [ ] No file upload required to see colors

#### Ticket 2: readLE Functions ✅
- [ ] All three tests in `test.js` pass
- [ ] `readUInt32LE` correctly reads `0x12345678`
- [ ] `readInt32LE` correctly reads `0xFF800000` as signed
- [ ] `readUInt16LE` correctly reads `0xABCD`

#### Ticket 3: BMP Loading and Header Logging ✅
- [ ] Console logs "BM" signature when valid BMP is uploaded
- [ ] Console logs DataOffset value (typically 54 for 24-bit BMPs)
- [ ] Console shows error for non-BMP files

#### Ticket 4: Info Header Logging ✅
- [ ] Console logs Width, Height, and BitCount values
- [ ] BitCount shows 24 for 24-bit BMPs
- [ ] Warning appears for non-24-bit BMPs

#### Ticket 5: RGB Values Extraction ✅
- [ ] Function returns array of RGB triplets
- [ ] Array length matches image dimensions (width × height)
- [ ] RGB values are correctly extracted from pixel data

#### Ticket 6: RGB Rendering to Canvas ✅
- [ ] Canvas displays the uploaded BMP image correctly
- [ ] Image colors match the original file
- [ ] Canvas dimensions match the image dimensions

## 🎯 Tickets to Complete

### [Ticket 1: Implement Render Random Colors](tickets/ticket-1.md)
- **Description**: Create a `renderRandomColors` function to fill the canvas with random RGB colors when the page loads.
- **Acceptance Criteria**: Canvas displays random colors on page load without requiring file upload.
- **File**: `index.js` - Look for the `renderRandomColors` function.

### [Ticket 2: Implement readLE Functions](tickets/ticket-2.md)
- **Description**: Implement `readUInt32LE`, `readInt32LE`, and `readUInt16LE` functions for parsing little-endian integers.
- **Acceptance Criteria**: Pass all tests in `test.js`.
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
- **Acceptance Criteria**: Returns array of RGB triplets based on width, height, and row padding.
- **File**: `index.js` - Look for the `extractRGBValues` function.

### [Ticket 6: Implement RGB Rendering to Canvas](tickets/ticket-6.md)
- **Description**: Create `renderRGBToCanvas` function to render RGB array onto canvas.
- **Acceptance Criteria**: Canvas displays image matching the BMP file's pixel data.
- **File**: `index.js` - Look for the `renderRGBToCanvas` function.

## 🔧 Development Notes

- **Canvas API**: Use `createImageData` and `putImageData` for rendering
- **BMP Format**: Handle bottom-up row order and 4-byte row padding
- **Testing**: Use 24-bit uncompressed BMP files for best compatibility
- **Debugging**: Check browser console for error messages and validation logs
- **Endianness**: BMP files use little-endian byte order (see [ENDIANNESS.md](ENDIANNESS.md))

## 📝 Submission

Submit your completed `index.js` with all functions implemented and passing the `test.js` checks. Ensure all tickets are completed and the BMP viewer works end-to-end.

## 🆘 Troubleshooting

- **CORS Errors**: Make sure you're serving files through a local web server, not opening `index.html` directly
- **File Not Loading**: Ensure you're using a valid 24-bit BMP file
- **Tests Failing**: Check that your `readLE` functions use bitwise operations correctly
- **Canvas Not Updating**: Verify your rendering functions are being called in the correct order

## 📖 Additional Resources

- [MDN Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [MDN FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
- [BMP File Format Specification](https://en.wikipedia.org/wiki/BMP_file_format)
