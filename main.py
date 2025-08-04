#!/usr/bin/env python3
"""
BMP Endian Challenge - Python Edition

This project teaches you how to parse and render BMP image files using Python,
focusing on binary data manipulation, endianness concepts, and image processing.
Perfect for Python programmers with web development experience and data science backgrounds.

Author: Your Name
Date: 2024
"""

import struct
import numpy as np
from PIL import Image
import os

# ============================================================================
# STUDENT CONFIGURATION - CHANGE THIS TO ENABLE TESTING
# ============================================================================
# Change this number to run tests for completed tickets
# 0 = no tests, 1 = test ticket 1, 2 = test tickets 1-2, etc.
CURRENT_TICKET = 0

# Flag to track if a file has been loaded (for Ticket 6 testing)
file_loaded = False
loaded_file_data = None

# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

def create_test_buffer():
    """
    Creates test data for development and testing.
    Returns a bytes object with known values for testing.
    """
    return b'\x78\x56\x34\x12\x00\x00\x80\xFF\xCD\xAB'

def validate_bmp_file(file_path):
    """
    Validates that a file is a valid BMP file.
    
    Args:
        file_path (str): Path to the BMP file
        
    Returns:
        bool: True if valid BMP, False otherwise
    """
    try:
        with open(file_path, 'rb') as f:
            signature = f.read(2)
            return signature == b'BM'
    except Exception:
        return False

# ============================================================================
# MAIN FUNCTIONS TO IMPLEMENT
# ============================================================================

def create_random_array(width=100, height=100):
    """
    Creates a NumPy array with random RGB values.
    
    TODO: Implement this function for Ticket 1
    - Generate a 2D NumPy array with random RGB values (0-255)
    - The array should have shape (height, width, 3) for RGB channels
    - Use numpy.random for generating random values
    
    Args:
        width (int): Width of the array (default: 100)
        height (int): Height of the array (default: 100)
        
    Returns:
        numpy.ndarray: Array with shape (height, width, 3) containing random RGB values
    """
    # TODO: Implement random array creation
    # 1. Use numpy.random.randint to generate random values (0-255)
    # 2. Create array with shape (height, width, 3)
    # 3. Return the array
    pass

def read_uint32_le(buffer, offset):
    """
    Reads a 32-bit unsigned integer from a buffer in little-endian format.
    
    TODO: Implement this function for Ticket 2
    - Use struct.unpack to read 4 bytes as little-endian unsigned integer
    - Return the integer value
    
    Args:
        buffer (bytes): The buffer to read from
        offset (int): The offset in the buffer to start reading from
        
    Returns:
        int: The 32-bit unsigned integer value
    """
    # TODO: Implement 32-bit unsigned little-endian reading
    # Use struct.unpack('<I', buffer[offset:offset+4]) to read 4 bytes as little-endian unsigned
    # Return the first (and only) value from the unpacked tuple
    return 0

def read_int32_le(buffer, offset):
    """
    Reads a 32-bit signed integer from a buffer in little-endian format.
    
    TODO: Implement this function for Ticket 2
    - Use struct.unpack to read 4 bytes as little-endian signed integer
    - Return the integer value
    
    Args:
        buffer (bytes): The buffer to read from
        offset (int): The offset in the buffer to start reading from
        
    Returns:
        int: The 32-bit signed integer value
    """
    # TODO: Implement 32-bit signed little-endian reading
    # Use struct.unpack('<i', buffer[offset:offset+4]) to read 4 bytes as little-endian signed
    # Return the first (and only) value from the unpacked tuple
    return 0

def read_uint16_le(buffer, offset):
    """
    Reads a 16-bit unsigned integer from a buffer in little-endian format.
    
    TODO: Implement this function for Ticket 2
    - Use struct.unpack to read 2 bytes as little-endian unsigned integer
    - Return the integer value
    
    Args:
        buffer (bytes): The buffer to read from
        offset (int): The offset in the buffer to start reading from
        
    Returns:
        int: The 16-bit unsigned integer value
    """
    # TODO: Implement 16-bit unsigned little-endian reading
    # Use struct.unpack('<H', buffer[offset:offset+2]) to read 2 bytes as little-endian unsigned
    # Return the first (and only) value from the unpacked tuple
    return 0

def load_bmp_and_log_header(file_path):
    """
    Parses a BMP file and logs the BITMAPFILEHEADER data.
    
    TODO: Implement this function for Ticket 3
    - Read the BMP file into a bytes buffer
    - Extract and log the file signature (bytes 0-1)
    - Extract and log the data offset (bytes 10-13)
    - Validate that the signature is "BM"
    - Call log_bmp_info_header if valid
    - Set file_loaded = True and store loaded_file_data for testing
    
    Args:
        file_path (str): Path to the BMP file to parse
        
    Returns:
        None
    """
    global file_loaded, loaded_file_data
    
    # TODO: Implement BMP file loading and header parsing
    # 1. Open and read the file into a bytes buffer
    # 2. Extract signature from bytes 0-1 using read_uint16_le
    # 3. Extract data offset from bytes 10-13 using read_uint32_le
    # 4. Log the extracted values
    # 5. Validate signature is 0x4D42 ("BM" in little-endian)
    # 6. Call log_bmp_info_header if valid
    # 7. Set file_loaded = True and store loaded_file_data
    pass

def log_bmp_info_header(buffer):
    """
    Logs the BITMAPINFOHEADER data from the BMP buffer.
    
    TODO: Implement this function for Ticket 4
    - Extract width from bytes 18-21
    - Extract height from bytes 22-25
    - Extract bit count from bytes 28-29
    - Log all extracted values
    - Validate that bit count is 24
    - Call extract_rgb_values if valid
    
    Args:
        buffer (bytes): The buffer containing BMP data
        
    Returns:
        None
    """
    # TODO: Implement BITMAPINFOHEADER parsing
    # 1. Extract width from bytes 18-21 using read_int32_le
    # 2. Extract height from bytes 22-25 using read_int32_le
    # 3. Extract bit count from bytes 28-29 using read_uint16_le
    # 4. Log all extracted values
    # 5. Validate that bit count is 24
    # 6. Call extract_rgb_values if valid
    pass

def extract_rgb_values(buffer, data_offset, width, height):
    """
    Extracts RGB values from the BMP pixel data as a NumPy array.
    
    TODO: Implement this function for Ticket 5
    - Calculate bytes per row and padding
    - Handle bottom-up row order (BMP format)
    - Extract BGR values (BMP stores as BGR, not RGB)
    - Convert to RGB format using NumPy
    - Return NumPy array of RGB values
    
    Args:
        buffer (bytes): The buffer containing BMP data
        data_offset (int): The offset to the pixel data
        width (int): The image width
        height (int): The image height
        
    Returns:
        numpy.ndarray: Array with shape (height, width, 3) containing RGB values
    """
    # TODO: Implement RGB value extraction
    # 1. Calculate bytes per row and padding (4-byte alignment)
    # 2. Handle bottom-up row order (BMP format)
    # 3. Extract BGR values (BMP stores as BGR, not RGB)
    # 4. Convert to RGB format using NumPy array operations
    # 5. Return NumPy array with shape (height, width, 3)
    return np.array([])

def render_rgb_to_image(rgb_values, width, height):
    """
    Renders RGB data as a PIL Image.
    
    TODO: Implement this function for Ticket 6
    - Convert NumPy array to PIL Image
    - Set image dimensions to match the data
    - Display the image
    - Return the PIL Image object
    
    Args:
        rgb_values (numpy.ndarray): Array with shape (height, width, 3) containing RGB values
        width (int): The image width
        height (int): The image height
        
    Returns:
        PIL.Image.Image: The rendered image
    """
    # TODO: Implement RGB to PIL Image rendering
    # 1. Convert NumPy array to PIL Image using PIL.Image.fromarray
    # 2. Ensure the array is uint8 type
    # 3. Display the image using .show() method
    # 4. Return the PIL Image object
    pass

def load_bmp_file(file_path):
    """
    Complete BMP file loading and processing pipeline.
    This function demonstrates the complete workflow.
    
    Args:
        file_path (str): Path to the BMP file to load
        
    Returns:
        PIL.Image.Image: The rendered image, or None if failed
    """
    try:
        print(f"Loading BMP file: {file_path}")
        
        # Load and parse the BMP file
        load_bmp_and_log_header(file_path)
        
        if file_loaded and loaded_file_data:
            # Extract image dimensions from the loaded data
            width = read_int32_le(loaded_file_data, 18)
            height = read_int32_le(loaded_file_data, 22)
            data_offset = read_uint32_le(loaded_file_data, 10)
            
            # Extract RGB values
            rgb_values = extract_rgb_values(loaded_file_data, data_offset, width, height)
            
            # Render to image
            image = render_rgb_to_image(rgb_values, width, height)
            
            print(f"Successfully loaded and rendered {width}x{height} image")
            return image
        else:
            print("Failed to load BMP file")
            return None
            
    except Exception as e:
        print(f"Error loading BMP file: {e}")
        return None

# ============================================================================
# ⚠️  DO NOT EDIT ANYTHING BELOW THIS LINE  ⚠️
# ============================================================================
# This section contains the automated test system.
# Modifying this code may break the testing functionality.
# ============================================================================

def run_tests_for_ticket(ticket_number):
    """
    Runs tests based on the current ticket number.
    Tests are cumulative - setting ticket 3 will test tickets 1, 2, and 3.
    """
    if ticket_number < 1:
        print("🎯 No tests to run. Set CURRENT_TICKET to 1 or higher to start testing.")
        return

    print(f"🧪 Running tests for tickets 1-{ticket_number}...")
    print("=" * 50)

    # Test data for Ticket 2
    test_buffer = create_test_buffer()

    # Mock BMP data for Tickets 3-6
    mock_bmp_data = bytes([
        # BITMAPFILEHEADER (14 bytes)
        0x42, 0x4D,             # Signature: "BM"
        0x4A, 0x00, 0x00, 0x00, # FileSize: 74 bytes
        0x00, 0x00, 0x00, 0x00, # Reserved: 0
        0x36, 0x00, 0x00, 0x00, # DataOffset: 54 bytes
        
        # BITMAPINFOHEADER (40 bytes)
        0x28, 0x00, 0x00, 0x00, # Size: 40
        0x02, 0x00, 0x00, 0x00, # Width: 2 pixels
        0x02, 0x00, 0x00, 0x00, # Height: 2 pixels
        0x01, 0x00,             # Planes: 1
        0x18, 0x00,             # BitCount: 24 bits
        0x00, 0x00, 0x00, 0x00, # Compression: 0 (none)
        0x14, 0x00, 0x00, 0x00, # ImageSize: 20 bytes (2x2 with padding)
        0x00, 0x00, 0x00, 0x00, # XpixelsPerM: 0
        0x00, 0x00, 0x00, 0x00, # YpixelsPerM: 0
        0x00, 0x00, 0x00, 0x00, # ColorsUsed: 0
        0x00, 0x00, 0x00, 0x00, # ColorsImportant: 0
        
        # Pixel data (2x2 with 4-byte row padding)
        # Row 1: Red pixel, Blue pixel + 2 bytes padding
        0xFF, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x00,
        # Row 2: Green pixel, White pixel + 2 bytes padding
        0x00, 0xFF, 0x00, 0xFF, 0xFF, 0xFF, 0x00, 0x00
    ])

    # Ticket 1: NumPy Array Creation
    if ticket_number >= 1:
        print("=== Testing Ticket 1: NumPy Array Creation ===")
        if callable(create_random_array):
            try:
                result = create_random_array(10, 10)
                if isinstance(result, np.ndarray) and result.shape == (10, 10, 3):
                    print("✅ Ticket 1: PASSED (random array created successfully)")
                else:
                    print("❌ Ticket 1: FAILED - expected shape (10, 10, 3), got", result.shape if hasattr(result, 'shape') else type(result))
            except Exception as error:
                print(f"❌ Ticket 1: FAILED - {error}")
        else:
            print("⏭️ Ticket 1: SKIPPED (function not implemented)")
        print()

    # Ticket 2: Struct Module Functions
    if ticket_number >= 2:
        print("=== Testing Ticket 2: Struct Module Functions ===")
        
        if callable(read_uint32_le):
            result1 = read_uint32_le(test_buffer, 0)
            expected1 = 0x12345678
            if result1 == expected1:
                print("✅ read_uint32_le: PASSED")
            else:
                print(f"❌ read_uint32_le: FAILED - expected {expected1}, got {result1}")
        else:
            print("⏭️ read_uint32_le: SKIPPED (function not implemented)")

        if callable(read_int32_le):
            result2 = read_int32_le(test_buffer, 4)
            expected2 = -8388608
            if result2 == expected2:
                print("✅ read_int32_le: PASSED")
            else:
                print(f"❌ read_int32_le: FAILED - expected {expected2}, got {result2}")
        else:
            print("⏭️ read_int32_le: SKIPPED (function not implemented)")

        if callable(read_uint16_le):
            result3 = read_uint16_le(test_buffer, 8)
            expected3 = 0xABCD
            if result3 == expected3:
                print("✅ read_uint16_le: PASSED")
            else:
                print(f"❌ read_uint16_le: FAILED - expected {expected3}, got {result3}")
        else:
            print("⏭️ read_uint16_le: SKIPPED (function not implemented)")
        print()

    # Ticket 3: BMP Loading and Header Logging
    if ticket_number >= 3:
        print("=== Testing Ticket 3: BMP Header Parsing ===")
        
        if callable(read_uint16_le) and callable(read_uint32_le):
            signature = read_uint16_le(mock_bmp_data, 0)
            expected_signature = 0x4D42  # "BM" in little-endian
            if signature == expected_signature:
                print("✅ BMP Signature: PASSED")
            else:
                print(f"❌ BMP Signature: FAILED - expected {expected_signature}, got {signature}")

            data_offset = read_uint32_le(mock_bmp_data, 10)
            expected_offset = 54
            if data_offset == expected_offset:
                print("✅ Data Offset: PASSED")
            else:
                print(f"❌ Data Offset: FAILED - expected {expected_offset}, got {data_offset}")
        else:
            print("⏭️ Ticket 3: SKIPPED (read functions not implemented)")
        print()

    # Ticket 4: Info Header Logging
    if ticket_number >= 4:
        print("=== Testing Ticket 4: BMP Info Header ===")
        
        if callable(read_int32_le) and callable(read_uint16_le):
            width = read_int32_le(mock_bmp_data, 18)
            height = read_int32_le(mock_bmp_data, 22)
            bit_count = read_uint16_le(mock_bmp_data, 28)
            
            if width == 2 and height == 2 and bit_count == 24:
                print("✅ Image Dimensions & Bit Count: PASSED")
            else:
                print(f"❌ Image Dimensions & Bit Count: FAILED - width: {width}, height: {height}, bitCount: {bit_count}")
        else:
            print("⏭️ Ticket 4: SKIPPED (read functions not implemented)")
        print()

    # Ticket 5: RGB Values Extraction
    if ticket_number >= 5:
        print("=== Testing Ticket 5: RGB Values Extraction ===")
        
        if callable(extract_rgb_values):
            data_offset = 54
            width = 2
            height = 2
            
            try:
                rgb_values = extract_rgb_values(mock_bmp_data, data_offset, width, height)
                
                if isinstance(rgb_values, np.ndarray) and rgb_values.shape == (2, 2, 3):
                    print("✅ RGB Extraction: PASSED")
                    print("   Extracted RGB values:", rgb_values.tolist())
                else:
                    print("❌ RGB Extraction: FAILED - expected NumPy array with shape (2, 2, 3)")
            except Exception as error:
                print(f"❌ RGB Extraction: FAILED - {error}")
        else:
            print("⏭️ Ticket 5: SKIPPED (function not implemented)")
        print()

    print("=" * 50)
    print(f"🎯 Tests complete for tickets 1-{ticket_number}")
    if ticket_number >= 6:
        print("💡 Use load_bmp_file() to test Ticket 6 (complete workflow)")
    else:
        print("💡 Change CURRENT_TICKET to test more tickets as you complete them!")
    print()

def run_ticket6_test(file_path):
    """
    Runs Ticket 6 test when a file is actually loaded by the user.
    This tests the complete end-to-end workflow with real file data.
    """
    print("=" * 50)
    print("=== Testing Ticket 6: Complete Workflow with Real File ===")
    
    if (callable(render_rgb_to_image) and 
        callable(log_bmp_info_header) and 
        callable(extract_rgb_values) and 
        file_loaded and loaded_file_data):
        
        try:
            # Get image dimensions from the loaded data
            width = read_int32_le(loaded_file_data, 18)
            height = read_int32_le(loaded_file_data, 22)
            data_offset = read_uint32_le(loaded_file_data, 10)
            
            # Extract RGB values
            rgb_values = extract_rgb_values(loaded_file_data, data_offset, width, height)
            
            # Render to image
            image = render_rgb_to_image(rgb_values, width, height)
            
            if image is not None:
                print("✅ Ticket 6: PASSED (file successfully loaded and rendered)")
                print(f"   File: {file_path}")
                print(f"   Image dimensions: {width} x {height}")
                print("   🎉 Complete workflow working!")
            else:
                print("❌ Ticket 6: FAILED - image rendering failed")
                
        except Exception as error:
            print(f"❌ Ticket 6: FAILED - {error}")
    else:
        print("⏭️ Ticket 6: SKIPPED (required functions not implemented or no file loaded)")
        print("   Need: log_bmp_info_header, extract_rgb_values, render_rgb_to_image")
    
    print("=" * 50)
    print()

if __name__ == "__main__":
    # Run tests based on current ticket
    run_tests_for_ticket(CURRENT_TICKET)
    
    # Example usage for Ticket 6 testing
    if CURRENT_TICKET >= 6:
        print("Example: To test the complete workflow with a real BMP file:")
        print("load_bmp_file('images/image-1.bmp')")
        print() 