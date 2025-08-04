# Ticket 1: Implement NumPy Array Creation

## Description
This ticket tasks you with implementing the `create_random_array` function to generate a NumPy array with random RGB values. The goal is to create a foundation for working with image data using NumPy, which is essential for data science and image processing tasks. You'll use NumPy's random number generation to create a 2D array representing image data, helping you explore basic array operations and data structures commonly used in scientific computing.

## Acceptance Criteria
- The function should return a NumPy array with shape (height, width, 3) for RGB channels.
- Each element in the array should contain random integer values between 0 and 255 (inclusive).
- The function should accept width and height parameters with sensible defaults.
- The returned array should be of dtype uint8 (8-bit unsigned integers).
- The function should use numpy.random for generating random values.

## Implementation Guidance
- Import numpy as np at the top of your file.
- Use `np.random.randint()` to generate random values in the range [0, 256).
- Create the array with the correct shape: (height, width, 3).
- Ensure the array is of dtype uint8 for proper image data representation.
- Return the created array.

## Testing
- Run `python main.py` after setting `CURRENT_TICKET = 1`.
- Verify that the function returns a NumPy array with the expected shape.
- **Auto-testing**: Change `CURRENT_TICKET` to `1` at the top of `main.py` to enable automatic testing.
- Check the console output for test results - you should see "✅ Ticket 1: PASSED" when your implementation is correct.

## Example Usage
```python
# Create a 100x100 random RGB array
random_array = create_random_array(100, 100)
print(f"Array shape: {random_array.shape}")  # Should print: (100, 100, 3)
print(f"Data type: {random_array.dtype}")    # Should print: uint8
print(f"Value range: {random_array.min()}-{random_array.max()}")  # Should be 0-255
```
