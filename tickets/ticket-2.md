# Ticket 2: Implement readLE Functions

## Description
This ticket requires you to implement the `readUInt32LE`, `readInt32LE`, and `readUInt16LE` functions to parse little-endian integers from a `Uint8Array` buffer using bitwise operations. These functions are vital for reading the BMP file’s header data, which uses little-endian byte order. You’ll combine bytes to form integers, handling both unsigned and signed values.

## Acceptance Criteria
- `readUInt32LE` must correctly parse a 32-bit unsigned integer and pass the test case `0x12345678`.
- `readInt32LE` must correctly parse a 32-bit signed integer and pass the test case `0xFF800000`.
- `readUInt16LE` must correctly parse a 16-bit unsigned integer and pass the test case `0xABCD`.
- All functions should work with the test data in `test.js`, logging "PASSED" for each test.
- The implementation must avoid built-in methods and rely on bitwise operations.

## Implementation Guidance
- For `readUInt32LE`:
  - Combine four bytes from the buffer using bitwise operations.
  - Ensure the result is treated as an unsigned value.
- For `readInt32LE`:
  - Combine four bytes similarly.
  - Adjust to interpret the result as a signed value.
- For `readUInt16LE`:
  - Combine two bytes using bitwise operations.
  - Keep the result as an unsigned value.
- Test with the provided test buffer in `test.js`.

## Testing
- Run `test.js` in the browser console or a Node.js environment.
- Verify that all three tests log "PASSED" with the expected values.
