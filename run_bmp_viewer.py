#!/usr/bin/env python3
"""
BMP Viewer Runner - Simple interface to load and display BMP files

This script provides a simple way to test the BMP parsing functionality
by loading files from the images directory and displaying them.

Usage:
    python run_bmp_viewer.py [filename]
    
Examples:
    python run_bmp_viewer.py                    # List available files
    python run_bmp_viewer.py image-1.bmp        # Load specific file
    python run_bmp_viewer.py --list             # List available files
    python run_bmp_viewer.py --test             # Run test with mock data
"""

import os
import sys
import glob
from pathlib import Path

# Import the main functions from main.py
try:
    from main import (
        load_bmp_file, 
        create_random_array, 
        read_uint32_le, 
        read_int32_le, 
        read_uint16_le,
        extract_rgb_values,
        render_rgb_to_image,
        create_test_buffer
    )
    print("✅ Successfully imported functions from main.py")
except ImportError as e:
    print(f"❌ Error importing functions: {e}")
    print("Make sure you have implemented the required functions in main.py")
    sys.exit(1)

def list_available_files():
    """List all BMP files in the images directory."""
    images_dir = Path("images")
    if not images_dir.exists():
        print("❌ Images directory not found!")
        return []
    
    bmp_files = list(images_dir.glob("*.bmp"))
    if not bmp_files:
        print("❌ No BMP files found in images directory!")
        return []
    
    print("📁 Available BMP files in images directory:")
    for i, file_path in enumerate(bmp_files, 1):
        file_size = file_path.stat().st_size
        print(f"  {i}. {file_path.name} ({file_size:,} bytes)")
    
    return bmp_files

def load_and_display_file(filename):
    """Load and display a specific BMP file."""
    file_path = Path("images") / filename
    
    if not file_path.exists():
        print(f"❌ File not found: {file_path}")
        return False
    
    print(f"🖼️  Loading BMP file: {filename}")
    print("=" * 50)
    
    try:
        # Load and display the BMP file
        image = load_bmp_file(str(file_path))
        
        if image:
            print(f"✅ Successfully loaded and displayed {filename}")
            print(f"   Image size: {image.size[0]} x {image.size[1]} pixels")
            print(f"   Image mode: {image.mode}")
            return True
        else:
            print(f"❌ Failed to load {filename}")
            return False
            
    except Exception as e:
        print(f"❌ Error loading {filename}: {e}")
        return False

def run_interactive_mode():
    """Run in interactive mode, letting user choose files."""
    print("🎮 BMP Viewer - Interactive Mode")
    print("=" * 50)
    
    while True:
        print("\nOptions:")
        print("  1. List available files")
        print("  2. Load a specific file")
        print("  3. Run test with mock data")
        print("  4. Exit")
        
        choice = input("\nEnter your choice (1-4): ").strip()
        
        if choice == "1":
            list_available_files()
            
        elif choice == "2":
            files = list_available_files()
            if files:
                try:
                    file_num = int(input("Enter file number: ")) - 1
                    if 0 <= file_num < len(files):
                        load_and_display_file(files[file_num].name)
                    else:
                        print("❌ Invalid file number!")
                except ValueError:
                    print("❌ Please enter a valid number!")
                    
        elif choice == "3":
            run_test_mode()
            
        elif choice == "4":
            print("👋 Goodbye!")
            break
            
        else:
            print("❌ Invalid choice! Please enter 1-4.")

def run_test_mode():
    """Run a test with mock data to verify functions work."""
    print("🧪 Running test mode with mock data...")
    print("=" * 50)
    
    try:
        # Test 1: Create random array
        print("1. Testing random array creation...")
        random_array = create_random_array(50, 50)
        print(f"   ✅ Created array with shape: {random_array.shape}")
        
        # Test 2: Test struct functions
        print("2. Testing struct functions...")
        test_buffer = create_test_buffer()
        value1 = read_uint32_le(test_buffer, 0)
        value2 = read_int32_le(test_buffer, 4)
        value3 = read_uint16_le(test_buffer, 8)
        print(f"   ✅ read_uint32_le: {value1} (0x{value1:X})")
        print(f"   ✅ read_int32_le: {value2}")
        print(f"   ✅ read_uint16_le: {value3} (0x{value3:X})")
        
        # Test 3: Display random image
        print("3. Testing image display...")
        image = render_rgb_to_image(random_array, 50, 50)
        print(f"   ✅ Displayed random image: {image.size[0]} x {image.size[1]} pixels")
        
        print("\n🎉 All tests passed! Your functions are working correctly.")
        
    except Exception as e:
        print(f"❌ Test failed: {e}")
        print("Make sure you have implemented all required functions in main.py")

def main():
    """Main function to handle command line arguments."""
    if len(sys.argv) == 1:
        # No arguments - run interactive mode
        run_interactive_mode()
        
    elif len(sys.argv) == 2:
        arg = sys.argv[1]
        
        if arg in ["--help", "-h"]:
            print(__doc__)
            
        elif arg in ["--list", "-l"]:
            list_available_files()
            
        elif arg in ["--test", "-t"]:
            run_test_mode()
            
        else:
            # Assume it's a filename
            load_and_display_file(arg)
            
    else:
        print("❌ Too many arguments!")
        print("Usage: python run_bmp_viewer.py [filename|--list|--test]")
        print("Run 'python run_bmp_viewer.py --help' for more information.")

if __name__ == "__main__":
    main() 