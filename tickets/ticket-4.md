# Ticket 4: Implement BITMAPINFOHEADER Logging

## Description
This ticket requires you to implement the `log_bmp_info_header` function to parse the BITMAPINFOHEADER section (bytes 14-53) and log key fields to the console. This 40-byte section contains crucial information about the image dimensions, color depth, and other properties. You'll extract width, height, and bit count information using the struct module functions you implemented in Ticket 2.

## Acceptance Criteria
- The function should extract width from bytes 18-21 using `read_int32_le()`.
- The function should extract height from bytes 22-25 using `read_int32_le()`.
- The function should extract bit count from bytes 28-29 using `read_uint16_le()`.
- All extracted values should be logged to the console with descriptive labels.
- The function should validate that bit count is 24 (for 24-bit BMP files).
- If the bit count is valid, the function should call `extract_rgb_values()`.
- Invalid bit counts should log an error message.

## Implementation Guidance
- Use `read_int32_le(buffer, 18)` to extract the image width.
- Use `read_int32_le(buffer, 22)` to extract the image height.
- Use `read_uint16_le(buffer, 28)` to extract the bit count.
- Log all extracted values using `print()` statements with clear labels.
- Check if bit count equals 24 (standard for 24-bit BMP files).
- If valid, call `extract_rgb_values()` with appropriate parameters.
- If invalid, log an error message about unsupported bit depth.

## Testing
- **Auto-testing**: Change `CURRENT_TICKET` to `4` at the top of `main.py` to enable automatic testing.
- Check the console output for test results - you should see "✅ Image Dimensions & Bit Count: PASSED" when your implementation is correct.
- The tests verify that your functions can correctly parse BMP info header data using mock data.
- For manual testing: Use `load_bmp_and_log_header('images/image-1.bmp')` to see the width, height, and bit count logged to the console.

## Example Usage
```python
# This function is called automatically by load_bmp_and_log_header()
# when a valid BMP file is loaded

# Expected output for a 2x2 24-bit BMP:
# Image Width: 2 pixels
# Image Height: 2 pixels
# Bit Count: 24 bits per pixel
# Valid 24-bit BMP file detected
```

## File Structure Reference
The BITMAPINFOHEADER is 40 bytes long (bytes 14-53):
- Bytes 14-17: Header size (always 40)
- Bytes 18-21: Image width (signed integer)
- Bytes 22-25: Image height (signed integer)
- Bytes 26-27: Color planes (always 1)
- Bytes 28-29: Bits per pixel (1, 4, 8, 16, or 24)
- Bytes 30-33: Compression method (0 = no compression)
- Bytes 34-37: Image size in bytes
- Bytes 38-41: Horizontal resolution (pixels per meter)
- Bytes 42-45: Vertical resolution (pixels per meter)
- Bytes 46-49: Colors in color table
- Bytes 50-53: Important color count
