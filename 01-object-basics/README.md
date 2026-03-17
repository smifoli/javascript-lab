# JavaScript Object Practice: Desk Environment

This project is a practical exercise focused on mastering **JavaScript Objects**, **Nested Properties**, and **Object Interactivity**. It simulates a real-world scenario where a table and a computer interact through methods and state changes.

## Project Goals

Based on a learning exercise, the main objectives were:

- Create objects based on the current environment.
- Use identifiable names and descriptive properties.
- Implement **nested objects** (objects within objects).
- Create methods to manipulate object states.
- Provide a clean, interactive testing experience via the browser console.

## Features Demonstrated

- **Object Composition:** The `table` object can dynamically hold a `computer` object.
- **Encapsulation:** Using methods like `placeComputer()` and `removeComputer()` to manage the table's state.
- **Nested Data:** Detailed properties organized within `measurements` and `specs` objects.
- **Helper Methods:** A centralized `getComputer()` method to avoid code repetition (DRY principle).
- **Interactive Console UI:** Custom-styled console logs to guide the user during testing.

## How to Use

1. Clone this repository or download the files.
2. Open the `index.html` file in any modern web browser.
3. Open the **Developer Tools** (F12 or `Ctrl+Shift+I`).
4. Look at the **Console** tab to see the automated demo and follow the instructions to interact with the objects manually.

## Code Example

```javascript
table.placeComputer(computer);
// Output: "The 'MacBook Air' is on the table 'LAGKAPTEN / ALEX'."

computer.togglePower();
// Output: "The MacBook Air is now turned on."
```
