/**
 * Renders random colors to the canvas when the page loads.
 * 
 * TODO: Implement this function for Ticket 1
 * - Fill the canvas with random RGB colors
 * - Set appropriate canvas dimensions
 * - Use the Canvas API to generate and display random colors
 * - Should run automatically when the page loads
 */
function renderRandomColors() {
    // TODO: Implement random color rendering
    // 1. Get the canvas element
    // 2. Set canvas dimensions
    // 3. Get the 2D context
    // 4. Generate random RGB values for each pixel
    // 5. Apply the pixel data to the canvas
}

/**
 * Reads a 32-bit unsigned integer from a buffer in little-endian format.
 * 
 * TODO: Implement this function for Ticket 2
 * @param {Uint8Array} buffer - The buffer to read from
 * @param {number} offset - The offset in the buffer to start reading from
 * @returns {number} The 32-bit unsigned integer value
 */
function readUInt32LE(buffer, offset) {
    // TODO: Implement 32-bit unsigned little-endian reading
    // Use bitwise operations to combine 4 bytes
    // Return the result as an unsigned value
    return 0;
}

/**
 * Reads a 32-bit signed integer from a buffer in little-endian format.
 * 
 * TODO: Implement this function for Ticket 2
 * @param {Uint8Array} buffer - The buffer to read from
 * @param {number} offset - The offset in the buffer to start reading from
 * @returns {number} The 32-bit signed integer value
 */
function readInt32LE(buffer, offset) {
    // TODO: Implement 32-bit signed little-endian reading
    // Use bitwise operations to combine 4 bytes
    // Return the result as a signed value
    return 0;
}

/**
 * Reads a 16-bit unsigned integer from a buffer in little-endian format.
 * 
 * TODO: Implement this function for Ticket 2
 * @param {Uint8Array} buffer - The buffer to read from
 * @param {number} offset - The offset in the buffer to start reading from
 * @returns {number} The 16-bit unsigned integer value
 */
function readUInt16LE(buffer, offset) {
    // TODO: Implement 16-bit unsigned little-endian reading
    // Use bitwise operations to combine 2 bytes
    // Return the result as an unsigned value
    return 0;
}

/**
 * Parses a BMP file and logs the BITMAPFILEHEADER data.
 * 
 * TODO: Implement this function for Ticket 3
 * @param {File} file - The BMP file to parse
 * @returns {void}
 */
function loadBMPAndLogHeader(file) {
    // TODO: Implement BMP file loading and header parsing
    // 1. Use FileReader to read the file
    // 2. Convert to Uint8Array for byte access
    // 3. Extract and log the file signature (bytes 0-1)
    // 4. Extract and log the data offset (bytes 10-13)
    // 5. Validate that the signature is "BM"
    // 6. Call logBMPInfoHeader if valid
}

/**
 * Logs the BITMAPINFOHEADER data from the BMP buffer.
 * 
 * TODO: Implement this function for Ticket 4
 * @param {Uint8Array} buffer - The buffer containing BMP data
 * @returns {void}
 */
function logBMPInfoHeader(buffer) {
    // TODO: Implement BITMAPINFOHEADER parsing
    // 1. Extract width from bytes 18-21
    // 2. Extract height from bytes 22-25
    // 3. Extract bit count from bytes 28-29
    // 4. Log all extracted values
    // 5. Validate that bit count is 24
    // 6. Call extractRGBValues if valid
}

/**
 * Extracts RGB values from the BMP pixel data as an array.
 * 
 * TODO: Implement this function for Ticket 5
 * @param {Uint8Array} buffer - The buffer containing BMP data
 * @param {number} dataOffset - The offset to the pixel data
 * @param {number} width - The image width
 * @param {number} height - The image height
 * @returns {Array} Array of [R, G, B] values
 */
function extractRGBValues(buffer, dataOffset, width, height) {
    // TODO: Implement RGB value extraction
    // 1. Calculate bytes per row and padding
    // 2. Handle bottom-up row order (BMP format)
    // 3. Extract BGR values (BMP stores as BGR, not RGB)
    // 4. Convert to RGB format
    // 5. Return array of [R, G, B] values
    return [];
}

/**
 * Renders RGB data to the canvas.
 * 
 * TODO: Implement this function for Ticket 6
 * @param {Array} rgbValues - Array of [R, G, B] values
 * @param {number} width - The image width
 * @param {number} height - The image height
 * @returns {void}
 */
function renderRGBToCanvas(rgbValues, width, height) {
    // TODO: Implement RGB to canvas rendering
    // 1. Get canvas element and set dimensions
    // 2. Get 2D context and create ImageData
    // 3. Convert RGB values to pixel data
    // 4. Apply the pixel data to the canvas
}

/**
 * Event listener for file input changes.
 * When a BMP file is selected, it triggers the parsing and display process.
 * @param {Event} event - The change event from the file input
 * @returns {void}
 */
document.getElementById('bmpInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        loadBMPAndLogHeader(file);
    }
});

// Initial call to render random colors when page loads
window.onload = function() {
    renderRandomColors();
};