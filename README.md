clear
# BMP Endian Challenge - Python Edition

Welcome to the BMP Endian Challenge - Python Edition! This project teaches you how to parse and render BMP image files using Python, focusing on binary data manipulation, endianness concepts, and image processing. Perfect for Python programmers with web development experience and data science backgrounds who want to understand low-level file formats and binary data handling.

## 🎯 Learning Objectives

By completing this challenge, you will learn:
- **Binary data parsing** and endianness concepts using Python's `struct` module
- **NumPy arrays** for efficient image data manipulation
- **PIL/Pillow** for image processing and visualization
- **File I/O** and binary data handling in Python
- **BMP file format** structure and parsing techniques
- **Data science concepts** applied to image processing
- **Step-by-step debugging** and testing strategies
- **Web development concepts** through image processing pipelines

## 📚 Documentation & Resources

- **[BMP File Structure Guide](BMP-STRUCTURE.md)** - Complete breakdown of BMP file format, headers, and data organization
- **[Endianness Guide](ENDIANNESS.md)** - Understanding big vs little endian for binary data parsing
- **[Python References](REFERENCES.md)** - Official documentation links for struct, NumPy, PIL, and other key modules
- **[Development Tickets](tickets/)** - Detailed implementation requirements for each feature

## 🚀 Getting Started

### Prerequisites
- Python 3.8+ installed on your system
- Basic understanding of Python (variables, functions, loops, lists)
- Familiarity with data science concepts (arrays, data manipulation)
- Experience with web development (understanding of image formats and processing)

### Setup Instructions

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd bmp-endian-challenge-python
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Application**
   ```bash
   python main.py
   ```

4. **Test BMP File Loading (Optional)**
   ```bash
   # List available BMP files
   python run_bmp_viewer.py --list
   
   # Load and display a specific BMP file
   python run_bmp_viewer.py image-1.bmp
   
   # Run interactive mode
   python run_bmp_viewer.py
   
   # Test with mock data
   python run_bmp_viewer.py --test
   ```

5. **Enable Testing**
   - Open `main.py` in your code editor
   - Change `CURRENT_TICKET = 0` to `CURRENT_TICKET = 1` to start testing
   - Run the script to see test results

## 📁 Project Structure

```
bmp-endian-challenge-python/
├── main.py              # Main Python script with placeholders for implementations
├── requirements.txt     # Python dependencies
├── README.md           # This file - project overview and setup
├── BMP-STRUCTURE.md    # Detailed BMP file format documentation
├── ENDIANNESS.md       # Endianness explanation and examples
├── REFERENCES.md       # Python API documentation links
├── images/             # Sample BMP files for testing
│   ├── image-1.bmp
│   └── image-2.bmp
└── tickets/            # Individual implementation tickets
    ├── ticket-1.md     # NumPy Array Creation
    ├── ticket-2.md     # Struct Module Functions
    ├── ticket-3.md     # BMP Loading and Header Logging
    ├── ticket-4.md     # Info Header Logging
    ├── ticket-5.md     # RGB Values Extraction
    └── ticket-6.md     # PIL Image Rendering
```

## 🧪 Testing Your Code

### Auto-Running Test System

The project includes an integrated test system that automatically runs tests based on your progress. Here's how to use it:

1. **Enable Testing**: At the top of `main.py`, change the `CURRENT_TICKET` constant:
   ```python
   CURRENT_TICKET = 0  # No tests
   CURRENT_TICKET = 1  # Test Ticket 1
   CURRENT_TICKET = 2  # Test Tickets 1-2
   CURRENT_TICKET = 3  # Test Tickets 1-3
   # ... and so on
   ```

2. **Tests Run Automatically**: When you run `python main.py`, tests for all tickets up to your current number will run automatically.

3. **Cumulative Testing**: Setting `CURRENT_TICKET = 4` will test tickets 1, 2, 3, and 4 together.

4. **Check Results**: The console will display test results with clear pass/fail indicators.

### Expected Test Output

When you set `CURRENT_TICKET = 6`, you should see:

```
🧪 Running tests for tickets 1-6...
==================================================

=== Testing Ticket 1: NumPy Array Creation ===
✅ Ticket 1: PASSED (random array created successfully)

=== Testing Ticket 2: Struct Module Functions ===
✅ read_uint32_le: PASSED
✅ read_int32_le: PASSED
✅ read_uint16_le: PASSED

=== Testing Ticket 3: BMP Header Parsing ===
✅ BMP Signature: PASSED
✅ Data Offset: PASSED

=== Testing Ticket 4: BMP Info Header ===
✅ Image Dimensions & Bit Count: PASSED

=== Testing Ticket 5: RGB Values Extraction ===
✅ RGB Extraction: PASSED
   Extracted RGB values: [[255, 0, 0], [0, 0, 255], [0, 255, 0], [255, 255, 255]]

==================================================
🎯 Tests complete for tickets 1-6
💡 Use load_bmp_file() to test Ticket 6 (complete workflow)
```

### Special Ticket 6 Testing

Ticket 6 is special - it only runs when you actually load a BMP file:

1. **Complete tickets 1-5 first**
2. **Set `CURRENT_TICKET = 6`**
3. **Call `load_bmp_file('images/image-1.bmp')`**
4. **Check the console** for Ticket 6 test results

This tests the complete end-to-end workflow with real file data!

## 🎯 Tickets to Complete

### [Ticket 1: Implement NumPy Array Creation](tickets/ticket-1.md)
- **Description**: Create a `create_random_array` function to generate a NumPy array with random RGB values.
- **Acceptance Criteria**: Returns a 2D NumPy array with random RGB values (0-255).
- **File**: `main.py` - Look for the `create_random_array` function.

### [Ticket 2: Implement Struct Module Functions](tickets/ticket-2.md)
- **Description**: Implement `read_uint32_le`, `read_int32_le`, and `read_uint16_le` functions using Python's `struct` module.
- **Acceptance Criteria**: Pass all tests in the auto-running test system.
- **File**: `main.py` - Look for the `read_uint32_le`, `read_int32_le`, and `read_uint16_le` functions.

### [Ticket 3: Implement BMP Loading and BITMAPFILEHEADER Logging](tickets/ticket-3.md)
- **Description**: Create `load_bmp_and_log_header` function to read BMP files and parse the BITMAPFILEHEADER.
- **Acceptance Criteria**: Console logs DataOffset and verifies "BM" signature.
- **File**: `main.py` - Look for the `load_bmp_and_log_header` function.

### [Ticket 4: Implement BITMAPINFOHEADER Logging](tickets/ticket-4.md)
- **Description**: Create `log_bmp_info_header` function to parse BITMAPINFOHEADER and log key fields.
- **Acceptance Criteria**: Console logs Width, Height, and BitCount for valid 24-bit BMPs.
- **File**: `main.py` - Look for the `log_bmp_info_header` function.

### [Ticket 5: Implement RGB Values Extraction](tickets/ticket-5.md)
- **Description**: Create `extract_rgb_values` function to extract RGB values from BMP pixel data using NumPy.
- **Acceptance Criteria**: Returns NumPy array of RGB values, handles BMP bottom-up row order correctly.
- **File**: `main.py` - Look for the `extract_rgb_values` function.

### [Ticket 6: Implement PIL Image Rendering](tickets/ticket-6.md)
- **Description**: Create `render_rgb_to_image` function to render RGB array as a PIL Image.
- **Acceptance Criteria**: Creates and displays PIL Image matching the BMP file's pixel data.
- **File**: `main.py` - Look for the `render_rgb_to_image` function.

## 🔧 Development Guidelines

### Implementation Order
1. **Start with Ticket 1** - Get familiar with NumPy arrays
2. **Complete Ticket 2** - Master struct module for endianness
3. **Work through Tickets 3-6** - Build the BMP parsing pipeline

### Key Concepts for Python Developers
- **Struct Module**: Use `struct.unpack()` for binary data parsing
- **NumPy Arrays**: Efficient array operations for image data
- **PIL/Pillow**: Image processing and visualization
- **BMP Format**: Handle bottom-up row order and 4-byte row padding
- **Endianness**: BMP files use little-endian byte order (see [ENDIANNESS.md](ENDIANNESS.md))
- **File I/O**: Binary file reading with proper encoding

### Testing Strategy
- Set `CURRENT_TICKET` to your current progress
- Run `python main.py` to execute tests
- Use the provided sample BMP files in the `images/` directory
- Check console output for error messages and validation logs
- Ensure all tests pass before moving to the next ticket

### Helper Functions Available
The starter includes helper functions to optimize operations:
```python
create_test_buffer()  # Creates test data for development
validate_bmp_file(file_path)  # Validates BMP file format
```

## 📝 Submission

Submit your completed `main.py` with all functions implemented and passing the auto-running tests. Ensure all tickets are completed and the BMP viewer works end-to-end.

## 👨‍🏫 Instructor Resources

A complete solution file (`solution.py`) is provided for instructors containing:
- Full implementations of all required functions
- Comprehensive testing suite
- Example usage and demonstrations
- Detailed comments explaining each step

This file can be used for:
- Grading student submissions
- Understanding expected solutions
- Providing hints or guidance
- Demonstrating complete workflows

## 🆘 Troubleshooting

- **Import Errors**: Make sure all dependencies are installed with `pip install -r requirements.txt`
- **File Not Loading**: Ensure you're using a valid 24-bit BMP file
- **Tests Failing**: Check that your functions match the expected signatures and return values
- **NumPy Errors**: Verify array shapes and data types match expectations
- **Struct Operations**: Double-check your endianness handling in the read functions
- **Console Errors**: Check the console output for detailed error messages

## 📖 Additional Resources

- [Python Struct Module Documentation](https://docs.python.org/3/library/struct.html)
- [NumPy Documentation](https://numpy.org/doc/)
- [PIL/Pillow Documentation](https://pillow.readthedocs.io/)
- [BMP File Format Specification](https://en.wikipedia.org/wiki/BMP_file_format)
- [BMP File Structure In Detail](BMP-STRUCTURE.md)

## 🎓 Learning Objectives

By completing this challenge, you will learn:
- Binary data parsing and endianness concepts using Python
- NumPy arrays for efficient image data manipulation
- PIL/Pillow for image processing and visualization
- File I/O and binary data handling in Python
- BMP file format structure and parsing
- Step-by-step debugging and testing strategies
- Working with binary data in Python
- Data science concepts applied to image processing
