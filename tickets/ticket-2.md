# Ticket 2: Implement Struct Module Functions

## Description
This ticket requires you to implement the `read_uint32_le`, `read_int32_le`, and `read_uint16_le` functions using Python's `struct` module to parse little-endian integers from a bytes buffer. These functions are vital for reading the BMP file's header data, which uses little-endian byte order. You'll use the struct module's unpack function to efficiently convert binary data to Python integers, handling both unsigned and signed values.

## Acceptance Criteria
- `read_uint32_le` must correctly parse a 32-bit unsigned integer and pass the test case `0x12345678`.
- `read_int32_le` must correctly parse a 32-bit signed integer and pass the test case `0xFF800000`.
- `read_uint16_le` must correctly parse a 16-bit unsigned integer and pass the test case `0xABCD`.
- All functions should work with the test data provided by `create_test_buffer()`.
- The implementation must use `struct.unpack()` with appropriate format strings.
- All functions should return integer values.

## Implementation Guidance
- For `read_uint32_le`:
  - Use `struct.unpack('<I', buffer[offset:offset+4])` to read 4 bytes as little-endian unsigned.
  - Return the first (and only) value from the unpacked tuple.
- For `read_int32_le`:
  - Use `struct.unpack('<i', buffer[offset:offset+4])` to read 4 bytes as little-endian signed.
  - Return the first (and only) value from the unpacked tuple.
- For `read_uint16_le`:
  - Use `struct.unpack('<H', buffer[offset:offset+2])` to read 2 bytes as little-endian unsigned.
  - Return the first (and only) value from the unpacked tuple.
- Test with the provided test buffer from `create_test_buffer()`.

## Testing
- **Auto-testing**: Change `CURRENT_TICKET` to `2` at the top of `main.py` to enable automatic testing.
- Check the console output for test results - you should see "✅ read_uint32_le: PASSED", "✅ read_int32_le: PASSED", and "✅ read_uint16_le: PASSED" when your implementation is correct.
- The tests verify that your functions correctly handle little-endian byte order and return the expected values.

## Example Usage
```python
# Test buffer: b'\x78\x56\x34\x12\x00\x00\x80\xFF\xCD\xAB'
test_buffer = create_test_buffer()

# Test 32-bit unsigned (should return 0x12345678 = 305419896)
value1 = read_uint32_le(test_buffer, 0)
print(f"32-bit unsigned: {value1} (0x{value1:X})")

# Test 32-bit signed (should return -8388608)
value2 = read_int32_le(test_buffer, 4)
print(f"32-bit signed: {value2}")

# Test 16-bit unsigned (should return 0xABCD = 43981)
value3 = read_uint16_le(test_buffer, 8)
print(f"16-bit unsigned: {value3} (0x{value3:X})")
```

## Struct Format Strings Reference
- `<I`: Little-endian 32-bit unsigned integer
- `<i`: Little-endian 32-bit signed integer  
- `<H`: Little-endian 16-bit unsigned integer
- `<h`: Little-endian 16-bit signed integer
