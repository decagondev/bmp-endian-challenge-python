# Ticket 3: Implement BMP Loading and BITMAPFILEHEADER Logging

## Description
This ticket involves implementing the `loadBMPAndLogHeader` function to load a BMP file and parse the **BITMAPFILEHEADER** (bytes 0–13) to log its data to the console. This 14-byte header includes the file signature and data offset, serving as the initial validation and navigation point for BMP processing.

## Acceptance Criteria
- The function should use a file reader to access the BMP file data.
- It should convert the data to a byte array format.
- It should log the file signature to confirm it is a BMP.
- It should log the data offset indicating where pixel data begins.
- The function should be triggered by a file selection event.
- Invalid files should log an error message.

## Implementation Guidance
- Use a file reading utility to process the selected file.
- Handle the data load event to access the file content.
- Convert the file data into a byte-accessible format.
- Extract the signature from the initial bytes.
- Use a reading function to get the data offset from a specific position.
- Log the extracted values to the console.
- Include a check for valid file format and log an error if invalid.

## Testing
- Serve `index.html` locally and select a valid 24-bit BMP file.
- Check the console for the signature and a data offset value.
- Try a non-BMP file to verify the error message.
