# Ticket 3: Implement BMP Loading and BITMAPFILEHEADER Logging

## Description
This ticket involves implementing the `load_bmp_and_log_header` function to load a BMP file and parse the **BITMAPFILEHEADER** (bytes 0–13) to log its data to the console. This 14-byte header includes the file signature and data offset, serving as the initial validation and navigation point for BMP processing. You'll use Python's file I/O operations to read binary data and extract header information.

## Acceptance Criteria
- The function should use Python's `open()` with binary mode to read the BMP file data.
- It should read the entire file into a bytes buffer.
- It should log the file signature to confirm it is a BMP (should be "BM").
- It should log the data offset indicating where pixel data begins.
- The function should validate that the signature is correct (0x4D42).
- Invalid files should log an error message.
- The function should set global variables for testing purposes.

## Implementation Guidance
- Use `open(file_path, 'rb')` to open the file in binary read mode.
- Read the entire file using `.read()` method.
- Extract the signature from the initial bytes using `read_uint16_le()`.
- Use `read_uint32_le()` to get the data offset from bytes 10-13.
- Log the extracted values using `print()` statements.
- Include a check for valid file format (signature should be 0x4D42).
- Set `file_loaded = True` and `loaded_file_data = buffer` for testing.
- Call `log_bmp_info_header()` if the signature is valid.

## Testing
- **Auto-testing**: Change `CURRENT_TICKET` to `3` at the top of `main.py` to enable automatic testing.
- Check the console output for test results - you should see "✅ BMP Signature: PASSED" and "✅ Data Offset: PASSED" when your implementation is correct.
- The tests verify that your functions can correctly parse BMP header data using mock data.
- For manual testing: Use `load_bmp_and_log_header('images/image-1.bmp')` to see the signature and data offset logged to the console.

## Example Usage
```python
# Load and parse a BMP file header
load_bmp_and_log_header('images/image-1.bmp')

# Expected output:
# BMP Signature: BM (0x4D42)
# Data Offset: 54 bytes
# File loaded successfully
```

## File Structure Reference
The BITMAPFILEHEADER is 14 bytes long:
- Bytes 0-1: Signature (should be "BM" = 0x4D42)
- Bytes 2-5: File size
- Bytes 6-9: Reserved (always 0)
- Bytes 10-13: Data offset (where pixel data starts)
