# Reference Documentation for BMP Parser Project

This reference guide provides links to official JavaScript documentation for key functions and classes used in the BMP parser project. Each entry includes a brief explanation to help you understand their purpose and context, along with a link to the full documentation for detailed exploration.

## JavaScript Built-in Functions and Classes

- **Math.random()**
  - **Explanation**: Generates a random number between 0 (inclusive) and 1 (exclusive), useful for creating random RGB values in the `renderRandomColors` function. You can scale and floor it to get integers (e.g., 0-255 for colors).
  - **Documentation**: [MDN Web Docs - Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- **FileReader()**
  - **Explanation**: A constructor for an object that reads the contents of files (like BMP files) asynchronously, typically used with the `readAsArrayBuffer` method to load binary data for parsing.
  - **Documentation**: [MDN Web Docs - FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)

- **Uint8Array()**
  - **Explanation**: Creates a typed array of 8-bit unsigned integers, ideal for working with raw binary data from a BMP file buffer, allowing byte-by-byte access.
  - **Documentation**: [MDN Web Docs - Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

- **String.fromCharCode()**
  - **Explanation**: Converts Unicode values (e.g., byte values from a buffer) into a string, handy for checking the BMP signature ("BM") from the file header.
  - **Documentation**: [MDN Web Docs - String.fromCharCode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

## Canvas API

- **CanvasRenderingContext2D.createImageData()**
  - **Explanation**: Creates a new, blank `ImageData` object with the specified width and height, used to store pixel data (RGBA) for rendering random colors or BMP images.
  - **Documentation**: [MDN Web Docs - CanvasRenderingContext2D.createImageData](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData)

- **CanvasRenderingContext2D.putImageData()**
  - **Explanation**: Paints data from an `ImageData` object onto the canvas at the specified coordinates, essential for displaying both random colors and BMP pixel data.
  - **Documentation**: [MDN Web Docs - CanvasRenderingContext2D.putImageData](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData)

- **HTMLCanvasElement.getContext()**
  - **Explanation**: Returns a rendering context for the canvas (e.g., '2d'), providing methods like `createImageData` and `putImageData` for drawing.
  - **Documentation**: [MDN Web Docs - HTMLCanvasElement.getContext](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)

## DOM and Event Handling

- **document.getElementById()**
  - **Explanation**: Retrieves an element from the DOM by its ID (e.g., 'canvas' or 'bmpInput'), allowing interaction with HTML elements in JavaScript.
  - **Documentation**: [MDN Web Docs - document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

- **addEventListener()**
  - **Explanation**: Attaches an event handler to an element (e.g., 'change' on `bmpInput`), enabling actions like loading a BMP file when selected.
  - **Documentation**: [MDN Web Docs - EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- **window.onload**
  - **Explanation**: An event that triggers when the page and its resources are fully loaded, ideal for initializing the random color rendering.
  - **Documentation**: [MDN Web Docs - GlobalEventHandlers.onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)

## Bitwise Operations
- While not a specific function, bitwise operations (`<<`, `|`, `>>>`, `| 0`) are used in `readLE` functions to manipulate bytes. Refer to:
  - **Explanation**: These operators shift bits (`<<`), combine them (`|`), ensure unsigned results (`>>>`), or interpret as signed (`| 0`), crucial for parsing little-endian integers.
  - **Documentation**: [MDN Web Docs - Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

## Additional Resources
- **BMP File Format**: For understanding the structure (e.g., BITMAPFILEHEADER, BITMAPINFOHEADER), see [Wikipedia - BMP File Format](https://en.wikipedia.org/wiki/BMP_file_format) for a detailed breakdown of offsets and fields.
- **Canvas Tutorial**: A broader guide to the Canvas API, useful for rendering techniques: [MDN Web Docs - Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial).

## Usage Tips
- Explore the linked documentation for method parameters, return values, and examples.
- Use the browser’s developer tools (console) to experiment with these functions.
