// ============================================================================
// STUDENT CONFIGURATION - CHANGE THIS TO ENABLE TESTING
// ============================================================================
// Change this number to run tests for completed tickets
// 0 = no tests, 1 = test ticket 1, 2 = test tickets 1-2, etc.
const CURRENT_TICKET = 0;

// Flag to track if a file has been loaded (for Ticket 6 testing)
let fileLoaded = false;
let loadedFileData = null;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Gets an optimized canvas context for frequent read operations.
 * This eliminates the willReadFrequently warning.
 */
function getOptimizedCanvasContext() {
    const canvas = document.getElementById('canvas');
    return canvas.getContext('2d', { willReadFrequently: true });
}

// ============================================================================
// MAIN FUNCTIONS TO IMPLEMENT
// ============================================================================

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
    // 1. Get the canvas element and set dimensions
    // 2. Get the 2D context using getOptimizedCanvasContext()
    // 3. Create ImageData and generate random RGB values for each pixel
    // 4. Apply the pixel data to the canvas
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
    // 7. Set fileLoaded = true and store loadedFileData for testing
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
    // 2. Get 2D context using getOptimizedCanvasContext()
    // 3. Create ImageData and convert RGB values to pixel data
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
    runTestsForTicket(CURRENT_TICKET);
};

// ============================================================================
// ⚠️  DO NOT EDIT ANYTHING BELOW THIS LINE  ⚠️
// ============================================================================
// This section contains the automated test system.
// Modifying this code may break the testing functionality.
// ============================================================================

/**
 * Runs tests based on the current ticket number.
 * Tests are cumulative - setting ticket 3 will test tickets 1, 2, and 3.
 */
function runTestsForTicket(ticketNumber) {
    if (ticketNumber < 1) {
        console.log("🎯 No tests to run. Set CURRENT_TICKET to 1 or higher to start testing.");
        return;
    }

    console.log(`🧪 Running tests for tickets 1-${ticketNumber}...`);
    console.log("=".repeat(50));

    // Test data for Ticket 2
    const testBuffer = new Uint8Array([
        0x78, 0x56, 0x34, 0x12, // 0x12345678 (unsigned)
        0x00, 0x00, 0x80, 0xFF, // 0xFF800000 (signed, -8388608)
        0xCD, 0xAB             // 0xABCD (unsigned)
    ]);

    // Mock BMP data for Tickets 3-6
    const mockBMPData = new Uint8Array([
        // BITMAPFILEHEADER (14 bytes)
        0x42, 0x4D,             // Signature: "BM"
        0x4A, 0x00, 0x00, 0x00, // FileSize: 74 bytes
        0x00, 0x00, 0x00, 0x00, // Reserved: 0
        0x36, 0x00, 0x00, 0x00, // DataOffset: 54 bytes
        
        // BITMAPINFOHEADER (40 bytes)
        0x28, 0x00, 0x00, 0x00, // Size: 40
        0x02, 0x00, 0x00, 0x00, // Width: 2 pixels
        0x02, 0x00, 0x00, 0x00, // Height: 2 pixels
        0x01, 0x00,             // Planes: 1
        0x18, 0x00,             // BitCount: 24 bits
        0x00, 0x00, 0x00, 0x00, // Compression: 0 (none)
        0x14, 0x00, 0x00, 0x00, // ImageSize: 20 bytes (2x2 with padding)
        0x00, 0x00, 0x00, 0x00, // XpixelsPerM: 0
        0x00, 0x00, 0x00, 0x00, // YpixelsPerM: 0
        0x00, 0x00, 0x00, 0x00, // ColorsUsed: 0
        0x00, 0x00, 0x00, 0x00, // ColorsImportant: 0
        
        // Pixel data (2x2 with 4-byte row padding)
        // Row 1: Red pixel, Blue pixel + 2 bytes padding
        0xFF, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x00,
        // Row 2: Green pixel, White pixel + 2 bytes padding
        0x00, 0xFF, 0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00
    ]);

    // Ticket 1: Random Colors Rendering
    if (ticketNumber >= 1) {
        console.log("=== Testing Ticket 1: Random Colors Rendering ===");
        if (typeof renderRandomColors === 'function') {
            try {
                // Get the canvas before calling the function
                const canvas = document.getElementById('canvas');
                const ctx = getOptimizedCanvasContext();
                
                // Clear the canvas first
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Call the function
                renderRandomColors();
                
                // Check if pixels were actually drawn
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                
                // Check if any non-zero RGB values exist (indicating colors were drawn)
                let hasColors = false;
                for (let i = 0; i < data.length; i += 4) {
                    if (data[i] > 0 || data[i + 1] > 0 || data[i + 2] > 0) {
                        hasColors = true;
                        break;
                    }
                }
                
                if (hasColors) {
                    console.log("✅ Ticket 1: PASSED (random colors rendered to canvas)");
                } else {
                    console.log("❌ Ticket 1: FAILED - no colors detected on canvas");
                }
            } catch (error) {
                console.log("❌ Ticket 1: FAILED - " + error.message);
            }
        } else {
            console.log("⏭️ Ticket 1: SKIPPED (function not implemented)");
        }
        console.log("");
    }

    // Ticket 2: readLE Functions
    if (ticketNumber >= 2) {
        console.log("=== Testing Ticket 2: readLE Functions ===");
        
        if (typeof readUInt32LE === 'function') {
            const result1 = readUInt32LE(testBuffer, 0);
            const expected1 = 0x12345678;
            if (result1 === expected1) {
                console.log("✅ readUInt32LE: PASSED");
            } else {
                console.log(`❌ readUInt32LE: FAILED - expected ${expected1}, got ${result1}`);
            }
        } else {
            console.log("⏭️ readUInt32LE: SKIPPED (function not implemented)");
        }

        if (typeof readInt32LE === 'function') {
            const result2 = readInt32LE(testBuffer, 4);
            const expected2 = -8388608;
            if (result2 === expected2) {
                console.log("✅ readInt32LE: PASSED");
            } else {
                console.log(`❌ readInt32LE: FAILED - expected ${expected2}, got ${result2}`);
            }
        } else {
            console.log("⏭️ readInt32LE: SKIPPED (function not implemented)");
        }

        if (typeof readUInt16LE === 'function') {
            const result3 = readUInt16LE(testBuffer, 8);
            const expected3 = 0xABCD;
            if (result3 === expected3) {
                console.log("✅ readUInt16LE: PASSED");
            } else {
                console.log(`❌ readUInt16LE: FAILED - expected ${expected3}, got ${result3}`);
            }
        } else {
            console.log("⏭️ readUInt16LE: SKIPPED (function not implemented)");
        }
        console.log("");
    }

    // Ticket 3: BMP Loading and Header Logging
    if (ticketNumber >= 3) {
        console.log("=== Testing Ticket 3: BMP Header Parsing ===");
        
        if (typeof readUInt16LE === 'function' && typeof readUInt32LE === 'function') {
            const signature = readUInt16LE(mockBMPData, 0);
            const expectedSignature = 0x4D42; // "BM" in little-endian
            if (signature === expectedSignature) {
                console.log("✅ BMP Signature: PASSED");
            } else {
                console.log(`❌ BMP Signature: FAILED - expected ${expectedSignature}, got ${signature}`);
            }

            const dataOffset = readUInt32LE(mockBMPData, 10);
            const expectedOffset = 54;
            if (dataOffset === expectedOffset) {
                console.log("✅ Data Offset: PASSED");
            } else {
                console.log(`❌ Data Offset: FAILED - expected ${expectedOffset}, got ${dataOffset}`);
            }
        } else {
            console.log("⏭️ Ticket 3: SKIPPED (readLE functions not implemented)");
        }
        console.log("");
    }

    // Ticket 4: Info Header Logging
    if (ticketNumber >= 4) {
        console.log("=== Testing Ticket 4: BMP Info Header ===");
        
        if (typeof readInt32LE === 'function' && typeof readUInt16LE === 'function') {
            const width = readInt32LE(mockBMPData, 18);
            const height = readInt32LE(mockBMPData, 22);
            const bitCount = readUInt16LE(mockBMPData, 28);
            
            if (width === 2 && height === 2 && bitCount === 24) {
                console.log("✅ Image Dimensions & Bit Count: PASSED");
            } else {
                console.log(`❌ Image Dimensions & Bit Count: FAILED - width: ${width}, height: ${height}, bitCount: ${bitCount}`);
            }
        } else {
            console.log("⏭️ Ticket 4: SKIPPED (readLE functions not implemented)");
        }
        console.log("");
    }

    // Ticket 5: RGB Values Extraction
    if (ticketNumber >= 5) {
        console.log("=== Testing Ticket 5: RGB Values Extraction ===");
        
        if (typeof extractRGBValues === 'function') {
            const dataOffset = 54;
            const width = 2;
            const height = 2;
            
            try {
                const rgbValues = extractRGBValues(mockBMPData, dataOffset, width, height);
                
                if (Array.isArray(rgbValues) && rgbValues.length === 4) {
                    const validRGB = rgbValues.every(rgb => 
                        Array.isArray(rgb) && rgb.length === 3 && 
                        rgb.every(val => typeof val === 'number' && val >= 0 && val <= 255)
                    );
                    
                    if (validRGB) {
                        console.log("✅ RGB Extraction: PASSED");
                        console.log("   Extracted RGB values:", rgbValues);
                    } else {
                        console.log("❌ RGB Extraction: FAILED - invalid RGB values");
                    }
                } else {
                    console.log("❌ RGB Extraction: FAILED - expected array of 4 RGB triplets");
                }
            } catch (error) {
                console.log("❌ RGB Extraction: FAILED - " + error.message);
            }
        } else {
            console.log("⏭️ Ticket 5: SKIPPED (function not implemented)");
        }
        console.log("");
    }

    console.log("=".repeat(50));
    console.log(`🎯 Tests complete for tickets 1-${ticketNumber}`);
    if (ticketNumber >= 6) {
        console.log("💡 Upload a BMP file to test Ticket 6 (complete workflow)");
    } else {
        console.log("💡 Change CURRENT_TICKET to test more tickets as you complete them!");
    }
    console.log("");
}

/**
 * Runs Ticket 6 test when a file is actually loaded by the user.
 * This tests the complete end-to-end workflow with real file data.
 */
function runTicket6Test(file) {
    console.log("=".repeat(50));
    console.log("=== Testing Ticket 6: Complete Workflow with Real File ===");
    
    if (typeof renderRGBToCanvas === 'function' && 
        typeof logBMPInfoHeader === 'function' && 
        typeof extractRGBValues === 'function' && 
        fileLoaded && loadedFileData) {
        
        try {
            // Get the canvas
            const canvas = document.getElementById('canvas');
            const ctx = getOptimizedCanvasContext();
            
            // Check if pixels were actually drawn
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            // Check if any non-zero RGB values exist (indicating the image was rendered)
            let hasImageData = false;
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] > 0 || data[i + 1] > 0 || data[i + 2] > 0) {
                    hasImageData = true;
                    break;
                }
            }
            
            if (hasImageData) {
                console.log("✅ Ticket 6: PASSED (file successfully loaded and rendered)");
                console.log("   File:", file.name);
                console.log("   Canvas dimensions:", canvas.width, "x", canvas.height);
                console.log("   🎉 Complete workflow working!");
            } else {
                console.log("❌ Ticket 6: FAILED - no image data detected on canvas");
                console.log("   Check that your functions call each other in the correct order");
            }
            
        } catch (error) {
            console.log("❌ Ticket 6: FAILED - " + error.message);
        }
    } else {
        console.log("⏭️ Ticket 6: SKIPPED (required functions not implemented or no file loaded)");
        console.log("   Need: logBMPInfoHeader, extractRGBValues, renderRGBToCanvas");
    }
    
    console.log("=".repeat(50));
    console.log("");
}