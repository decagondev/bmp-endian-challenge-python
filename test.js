console.log("Running comprehensive tests for BMP Parser project...");

// ============================================================================
// TICKET 2: readLE Functions Tests
// ============================================================================

console.log("\n=== Testing Ticket 2: readLE Functions ===");

// Test data: Sample little-endian byte sequences
const testBuffer = new Uint8Array([
    0x78, 0x56, 0x34, 0x12, // 0x12345678 (unsigned)
    0x00, 0x00, 0x80, 0xFF, // 0xFF800000 (signed, -8388608)
    0xCD, 0xAB             // 0xABCD (unsigned)
]);

function testReadUInt32LE() {
    if (typeof readUInt32LE !== 'function') {
        console.log("readUInt32LE test: SKIPPED (function not implemented)");
        return;
    }
    const result = readUInt32LE(testBuffer, 0);
    const expected = 0x12345678;
    console.assert(result === expected, `readUInt32LE failed: expected ${expected}, got ${result}`);
    console.log("readUInt32LE test:", result === expected ? "PASSED" : "FAILED");
}

function testReadInt32LE() {
    if (typeof readInt32LE !== 'function') {
        console.log("readInt32LE test: SKIPPED (function not implemented)");
        return;
    }
    const result = readInt32LE(testBuffer, 4);
    const expected = -8388608;
    console.assert(result === expected, `readInt32LE failed: expected ${expected}, got ${result}`);
    console.log("readInt32LE test:", result === expected ? "PASSED" : "FAILED");
}

function testReadUInt16LE() {
    if (typeof readUInt16LE !== 'function') {
        console.log("readUInt16LE test: SKIPPED (function not implemented)");
        return;
    }
    const result = readUInt16LE(testBuffer, 8);
    const expected = 0xABCD;
    console.assert(result === expected, `readUInt16LE failed: expected ${expected}, got ${result}`);
    console.log("readUInt16LE test:", result === expected ? "PASSED" : "FAILED");
}

// ============================================================================
// TICKET 3: BMP Loading and BITMAPFILEHEADER Logging Tests
// ============================================================================

console.log("\n=== Testing Ticket 3: BMP Loading and BITMAPFILEHEADER Logging ===");

// Mock BMP file data (24-bit, 2x2 pixel image with standard 54-byte header)
const mockBMPData = new Uint8Array([
    // BITMAPFILEHEADER (14 bytes)
    0x42, 0x4D,             // Signature: "BM"
    0x4A, 0x00, 0x00, 0x00, // FileSize: 74 bytes (simplified)
    0x00, 0x00, 0x00, 0x00, // Reserved: 0
    0x36, 0x00, 0x00, 0x00, // DataOffset: 54 bytes
    
    // BITMAPINFOHEADER (40 bytes)
    0x28, 0x00, 0x00, 0x00, // Size: 40
    0x02, 0x00, 0x00, 0x00, // Width: 2 pixels
    0x02, 0x00, 0x00, 0x00, // Height: 2 pixels
    0x01, 0x00,             // Planes: 1
    0x18, 0x00,             // BitCount: 24 bits
    0x00, 0x00, 0x00, 0x00, // Compression: 0 (none)
    0x08, 0x00, 0x00, 0x00, // ImageSize: 8 bytes (2x2 with padding)
    0x00, 0x00, 0x00, 0x00, // XpixelsPerM: 0
    0x00, 0x00, 0x00, 0x00, // YpixelsPerM: 0
    0x00, 0x00, 0x00, 0x00, // ColorsUsed: 0
    0x00, 0x00, 0x00, 0x00, // ColorsImportant: 0
    
    // Pixel data (2x2, 8 bytes + 4 padding)
    0xFF, 0x00, 0x00,       // Red
    0x00, 0x00, 0xFF,       // Blue
    0x00, 0xFF, 0x00,       // Green
    0xFF, 0xFF, 0xFF, 0x00  // White, padding
]);

function testBMPSignature() {
    if (typeof loadBMPAndLogHeader !== 'function') {
        console.log("BMP Signature test: SKIPPED (function not implemented)");
        return;
    }
    const mockFile = new File([mockBMPData.buffer], "test.bmp", { type: "image/bmp" });
    let signatureLogged = false;
    const originalLog = console.log;
    console.log = function(message) {
        if (message.includes("Signature: BM")) signatureLogged = true;
        originalLog.apply(console, arguments);
    };
    loadBMPAndLogHeader(mockFile);
    console.log = originalLog;
    console.assert(signatureLogged, "BMP Signature test failed: 'BM' not logged");
    console.log("BMP Signature test:", signatureLogged ? "PASSED" : "FAILED");
}

function testDataOffset() {
    if (typeof loadBMPAndLogHeader !== 'function') {
        console.log("Data Offset test: SKIPPED (function not implemented)");
        return;
    }
    const mockFile = new File([mockBMPData.buffer], "test.bmp", { type: "image/bmp" });
    let offsetLogged = false;
    const originalLog = console.log;
    console.log = function(message) {
        if (message.includes("DataOffset: 54")) offsetLogged = true;
        originalLog.apply(console, arguments);
    };
    loadBMPAndLogHeader(mockFile);
    console.log = originalLog;
    console.assert(offsetLogged, "Data Offset test failed: 54 not logged");
    console.log("Data Offset test:", offsetLogged ? "PASSED" : "FAILED");
}

function testErrorLogging() {
    if (typeof loadBMPAndLogHeader !== 'function') {
        console.log("Error Logging test: SKIPPED (function not implemented)");
        return;
    }
    const invalidData = new Uint8Array([0xFF, 0xFF]); // Invalid signature
    const mockFile = new File([invalidData.buffer], "invalid.bmp", { type: "image/bmp" });
    let errorLogged = false;
    const originalError = console.error;
    console.error = function(message) {
        if (message.includes("Invalid BMP file")) errorLogged = true;
        originalError.apply(console, arguments);
    };
    loadBMPAndLogHeader(mockFile);
    console.error = originalError;
    console.assert(errorLogged, "Error Logging test failed: 'Invalid BMP file' not logged");
    console.log("Error Logging test:", errorLogged ? "PASSED" : "FAILED");
}

// ============================================================================
// TICKET 4: BITMAPINFOHEADER Logging Tests
// ============================================================================

console.log("\n=== Testing Ticket 4: BITMAPINFOHEADER Logging ===");

function testImageDimensions() {
    if (typeof logBMPInfoHeader !== 'function') {
        console.log("Image Dimensions test: SKIPPED (function not implemented)");
        return;
    }
    let dimensionsLogged = false;
    const originalLog = console.log;
    console.log = function(message) {
        if (message.includes("Width: 2") && message.includes("Height: 2")) dimensionsLogged = true;
        originalLog.apply(console, arguments);
    };
    logBMPInfoHeader(mockBMPData);
    console.log = originalLog;
    console.assert(dimensionsLogged, "Image Dimensions test failed: Width and Height not logged as 2");
    console.log("Image Dimensions test:", dimensionsLogged ? "PASSED" : "FAILED");
}

function testBitCount() {
    if (typeof logBMPInfoHeader !== 'function') {
        console.log("Bit Count test: SKIPPED (function not implemented)");
        return;
    }
    let bitCountLogged = false;
    const originalLog = console.log;
    console.log = function(message) {
        if (message.includes("BitCount: 24")) bitCountLogged = true;
        originalLog.apply(console, arguments);
    };
    logBMPInfoHeader(mockBMPData);
    console.log = originalLog;
    console.assert(bitCountLogged, "Bit Count test failed: 24 not logged");
    console.log("Bit Count test:", bitCountLogged ? "PASSED" : "FAILED");
}

function testWarningLogging() {
    if (typeof logBMPInfoHeader !== 'function') {
        console.log("Warning Logging test: SKIPPED (function not implemented)");
        return;
    }
    const invalidBitCountData = new Uint8Array([
        ...mockBMPData.slice(0, 28), // Up to BitCount
        0x10, 0x00,                 // BitCount: 16 (invalid)
        ...mockBMPData.slice(30)    // Rest of data
    ]);
    let warningLogged = false;
    const originalWarn = console.warn;
    console.warn = function(message) {
        if (message.includes("Not a 24-bit BMP")) warningLogged = true;
        originalWarn.apply(console, arguments);
    };
    logBMPInfoHeader(invalidBitCountData);
    console.warn = originalWarn;
    console.assert(warningLogged, "Warning Logging test failed: 'Not a 24-bit BMP' not logged");
    console.log("Warning Logging test:", warningLogged ? "PASSED" : "FAILED");
}

// ============================================================================
// TICKET 5: RGB Values Extraction Tests
// ============================================================================

console.log("\n=== Testing Ticket 5: RGB Values Extraction ===");

function testExtractRGBValues() {
    if (typeof extractRGBValues !== 'function') {
        console.log("RGB Extraction test: SKIPPED (function not implemented)");
        return;
    }
    const dataOffset = 54;
    const width = 2;
    const height = 2;
    const rgbValues = extractRGBValues(mockBMPData, dataOffset, width, height);
    console.assert(Array.isArray(rgbValues), "RGB Extraction test failed: expected array, got " + typeof rgbValues);
    const expectedLength = width * height;
    console.assert(rgbValues.length === expectedLength, `RGB Extraction test failed: expected length ${expectedLength}, got ${rgbValues.length}`);
    const validRGB = rgbValues.every(rgb => Array.isArray(rgb) && rgb.length === 3);
    console.assert(validRGB, "RGB Extraction test failed: each element should be an array with 3 values");
    const expectedValues = [[255, 0, 0], [0, 0, 255], [0, 255, 0], [255, 255, 255]];
    const valuesMatch = rgbValues.every((val, i) => val[0] === expectedValues[i][0] && val[1] === expectedValues[i][1] && val[2] === expectedValues[i][2]);
    console.assert(valuesMatch, "RGB Extraction test failed: values do not match expected [R, G, B]");
    console.log("RGB Extraction test:", (Array.isArray(rgbValues) && rgbValues.length === expectedLength && validRGB && valuesMatch) ? "PASSED" : "FAILED");
}

// ============================================================================
// TICKET 1: Random Colors Rendering Tests
// ============================================================================

console.log("\n=== Testing Ticket 1: Random Colors Rendering ===");

function testRenderRandomColors() {
    if (typeof renderRandomColors !== 'function') {
        console.log("Random Colors test: SKIPPED (function not implemented)");
        return;
    }
    const mockCanvas = {
        width: 300,
        height: 200,
        getContext: () => ({
            createImageData: (w, h) => ({
                width: w,
                height: h,
                data: new Uint8ClampedArray(w * h * 4)
            }),
            putImageData: () => {}
        })
    };
    const originalCanvas = document.getElementById('canvas');
    if (originalCanvas) {
        originalCanvas.getContext = mockCanvas.getContext;
    }
    try {
        renderRandomColors();
        const imageData = mockCanvas.getContext().createImageData(300, 200);
        renderRandomColors(); // Re-run to populate mock
        const data = imageData.data;
        let hasVariation = false;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i] !== data[i + 4] || data[i + 1] !== data[i + 5] || data[i + 2] !== data[i + 6]) {
                hasVariation = true;
                break;
            }
        }
        console.assert(hasVariation, "Random Colors test failed: no variation in colors detected");
        console.log("Random Colors test:", hasVariation ? "PASSED" : "FAILED");
    } catch (error) {
        console.log("Random Colors test: FAILED - " + error.message);
    }
    if (originalCanvas) {
        delete originalCanvas.getContext; // Restore original
    }
}

// ============================================================================
// TICKET 6: RGB Rendering Tests
// ============================================================================

console.log("\n=== Testing Ticket 6: RGB Rendering ===");

function testRenderRGBToCanvas() {
    if (typeof renderRGBToCanvas !== 'function') {
        console.log("RGB Rendering test: SKIPPED (function not implemented)");
        return;
    }
    const testRGBValues = [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 255]];
    const width = 2;
    const height = 2;
    const mockCanvas = {
        width: width,
        height: Math.abs(height),
        getContext: () => ({
            createImageData: (w, h) => {
                const data = new Uint8ClampedArray(w * h * 4);
                return { width: w, height: h, data: data };
            },
            putImageData: () => {}
        })
    };
    const originalCanvas = document.getElementById('canvas');
    if (originalCanvas) {
        originalCanvas.getContext = mockCanvas.getContext;
    }
    try {
        renderRGBToCanvas(testRGBValues, width, height);
        const imageData = mockCanvas.getContext().createImageData(width, height);
        renderRGBToCanvas(testRGBValues, width, height); // Re-run to populate
        const data = imageData.data;
        const expected = [255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 255, 255, 255, 255];
        let matches = true;
        for (let i = 0; i < expected.length; i++) {
            if (data[i] !== expected[i]) {
                matches = false;
                break;
            }
        }
        console.assert(matches, "RGB Rendering test failed: pixel data does not match expected values");
        console.log("RGB Rendering test:", matches ? "PASSED" : "FAILED");
    } catch (error) {
        console.log("RGB Rendering test: FAILED - " + error.message);
    }
    if (originalCanvas) {
        delete originalCanvas.getContext; // Restore original
    }
}

// ============================================================================
// RUN ALL TESTS
// ============================================================================

console.log("\n" + "=".repeat(50));
console.log("RUNNING ALL TESTS");
console.log("=".repeat(50));

// Ticket 2 tests
testReadUInt32LE();
testReadInt32LE();
testReadUInt16LE();

// Ticket 3 tests
testBMPSignature();
testDataOffset();
testErrorLogging();

// Ticket 4 tests
testImageDimensions();
testBitCount();
testWarningLogging();

// Ticket 5 test
testExtractRGBValues();

// Ticket 1 test
testRenderRandomColors();

// Ticket 6 test
testRenderRGBToCanvas();

console.log("\n" + "=".repeat(50));
console.log("ALL TESTS COMPLETE");
console.log("=".repeat(50));
console.log("\n💡 Tip: Check the console for any FAILED tests and implement the missing functions.");
console.log("📖 See the tickets/ directory for detailed implementation requirements.");
