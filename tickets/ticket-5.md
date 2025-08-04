# Ticket 5: Implement RGB Values Extraction

## Description
This ticket requires you to implement the `extract_rgb_values` function to extract RGB values from BMP pixel data using NumPy arrays. You'll convert the raw binary pixel data into a structured NumPy array, handling BMP's bottom-up row order and BGR color format. This function is crucial for converting binary image data into a format suitable for data science and image processing operations.

## Acceptance Criteria
- The function should calculate bytes per row and padding correctly (4-byte alignment).
- It should handle bottom-up row order (BMP format stores rows from bottom to top).
- It should extract BGR values and convert them to RGB format using NumPy operations.
- The function should return a NumPy array with shape (height, width, 3).
- The array should contain uint8 values (0-255) for each RGB channel.
- The function should handle the 4-byte row padding that BMP files use.

## Implementation Guidance
- Calculate bytes per row: `bytes_per_row = width * 3` (3 bytes per pixel for 24-bit).
- Calculate padding: `padding = (4 - (bytes_per_row % 4)) % 4` (4-byte alignment).
- Handle bottom-up row order by reading rows from the end of the data.
- Extract BGR values (BMP stores as Blue, Green, Red).
- Convert BGR to RGB using NumPy array indexing: `rgb = bgr[:, :, [2, 1, 0]]`.
- Create a NumPy array with the correct shape and data type.
- Return the final RGB array.

## Testing
- **Auto-testing**: Change `CURRENT_TICKET` to `5` at the top of `main.py` to enable automatic testing.
- Check the console output for test results - you should see "✅ RGB Extraction: PASSED" when your implementation is correct.
- The tests verify that your function can extract RGB values from mock BMP data.
- For manual testing: Use `load_bmp_and_log_header('images/image-1.bmp')` to test with real files.

## Example Usage
```python
# Extract RGB values from BMP data
rgb_values = extract_rgb_values(buffer, data_offset, width, height)

# Expected output for a 2x2 image:
# Array shape: (2, 2, 3)
# Data type: uint8
# Values: [[[255, 0, 0], [0, 0, 255]], [[0, 255, 0], [255, 255, 255]]]
print(f"RGB array shape: {rgb_values.shape}")
print(f"RGB values: {rgb_values.tolist()}")
```

## BMP Pixel Data Structure
- Each pixel is 3 bytes (BGR format)
- Rows are padded to 4-byte boundaries
- Rows are stored bottom-to-top
- Example for 2x2 image:
  ```
  Row 2: [B1,G1,R1] [B2,G2,R2] [pad] [pad]
  Row 1: [B3,G3,R3] [B4,G4,R4] [pad] [pad]
  ```

## NumPy Operations Reference
- `np.array()`: Create array from list or other data
- `np.zeros()`: Create array filled with zeros
- `array.reshape()`: Reshape array dimensions
- `array[:, :, [2, 1, 0]]`: Reorder color channels (BGR to RGB)
- `array.astype(np.uint8)`: Convert to 8-bit unsigned integers
