console.log("Running tests for readLE functions...");

// Test data: Sample little-endian byte sequences
const testBuffer = new Uint8Array([
    0x78, 0x56, 0x34, 0x12, // 0x12345678 (unsigned)
    0x00, 0x00, 0x80, 0xFF, // 0xFF800000 (signed, -8388608)
    0xCD, 0xAB             // 0xABCD (unsigned)
]);

// Test readUInt32LE
function testReadUInt32LE() {
    const result = readUInt32LE(testBuffer, 0);
    const expected = 0x12345678; // 305419896 in decimal
    console.assert(result === expected, `readUInt32LE failed: expected ${expected}, got ${result}`);
    console.log("readUInt32LE test:", result === expected ? "PASSED" : "FAILED");
}

// Test readInt32LE
function testReadInt32LE() {
    const result = readInt32LE(testBuffer, 4);
    const expected = -8388608; // 0xFF800000 interpreted as signed
    console.assert(result === expected, `readInt32LE failed: expected ${expected}, got ${result}`);
    console.log("readInt32LE test:", result === expected ? "PASSED" : "FAILED");
}

// Test readUInt16LE
function testReadUInt16LE() {
    const result = readUInt16LE(testBuffer, 8);
    const expected = 0xABCD; // 43981 in decimal
    console.assert(result === expected, `readUInt16LE failed: expected ${expected}, got ${result}`);
    console.log("readUInt16LE test:", result === expected ? "PASSED" : "FAILED");
}

// Run tests
testReadUInt32LE();
testReadInt32LE();
testReadUInt16LE();

console.log("Tests complete.");
