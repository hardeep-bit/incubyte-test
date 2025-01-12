# Incubyte String Calculator TDD

This project implements a String Calculator in JavaScript using Test-Driven Development (TDD) practices.

---

## Features

1. **Empty String**: Returns `0` when the input is an empty string.
2. **Single Number**: Returns the number itself when there is only one number.
3. **Two Numbers**: Returns the sum of the two numbers.
4. **Multiple Numbers**: Returns the sum of any number of comma-separated numbers.
5. **Newline Delimiters**: Supports newline (`\n`) as a valid delimiter.
6. **Custom Delimiters**: Allows specifying custom delimiters in the format `//[delimiter]\n[numbers...]`.
7. **Negative Numbers**: Throws an exception for negative numbers, listing all negatives in the exception message.
8. **Character Validation**: Filters out non-numeric characters before processing.

---

## Requirements

- Node.js (v18.17.0)
- Jest for unit testing
- A code editor or IDE (e.g., Visual Studio Code)

---

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/hardeep-bit/incubyte-test.git
   cd incubyte-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Run the String Calculator

1. Ensure Node.js is installed and in your PATH.
2. Use Visual Studio Code to launch the calculator using the provided `launch.json` configuration.

#### Run from the terminal:

```bash
node src/stringCalculator.js
```

---

## Run Tests

### Using Jest:

Run the test suite with:

```bash
npm test
```

The tests will validate the implementation of the String Calculator, ensuring adherence to the TDD approach.

---

## Debugging

### Debugging in VSCode:

1. Open the project in Visual Studio Code.
2. Ensure the Node.js path is correctly set if you are using `nvm` or a custom setup.
3. Launch the debugger with the provided configuration:
   - Name: **Launch String Calculator**
   - Configuration file: `.vscode/launch.json`

---

## Development Notes

1. The project uses TDD practices:

   - Write a failing test first.
   - Write the minimum code to pass the test.
   - Refactor the code while ensuring all tests pass.

2. Frequent commits show the evolution of the code during the TDD process.

3. The implementation filters out invalid characters by checking their character codes and allows only numeric characters (0-9).

---

## Example Inputs and Outputs

| Input         | Output | Notes                                                    |
| ------------- | ------ | -------------------------------------------------------- |
| `""`          | `0`    | Empty string returns 0                                   |
| `"1"`         | `1`    | Single number returns the number                         |
| `"1,2"`       | `3`    | Sum of two numbers                                       |
| `"1,2,3,4"`   | `10`   | Sum of multiple numbers                                  |
| `"1\n2,3"`    | `6`    | Handles newline delimiters                               |
| `"//;\n1;2"`  | `3`    | Supports custom delimiters                               |
| `"1,-2,3,-4"` | Error  | Throws exception: `negative numbers not allowed: -2, -4` |

---

## Contribution Guidelines

1. Follow TDD practices.
2. Ensure code is clean and readable.
3. Write meaningful commit messages.
4. Submit a pull request with your changes.

---
