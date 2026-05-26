# JavaScript Learning Progress & Recap

This project serves as a documentation and recap of essential JavaScript concepts, especially for beginners or anyone revisiting the fundamentals. The following topics are covered, with practical examples and explanations:

---

### 1. Variables and Data Types

- Learn to declare variables using `let` and `const`.
- Understand the difference between mutable (`let`) and immutable (`const`) variables.
- Practice storing numbers and strings, and logging them to the console.

---

### 2. Mathematical Operations

- Perform arithmetic operations (addition, subtraction, multiplication, division) with variables.
- Use variables to store results of calculations.
- Example: Calculating a value based on a ratio (e.g., converting human years to dog years).

---

### 3. Reassigning and Incrementing Variables

- Change the value of a variable after its initial assignment.
- Increment and decrement variables to track changes over time.
- Useful for counters, scores, and dynamic values.

---

### 4. Functions

- Define reusable blocks of code with the `function` keyword.
- Call functions multiple times to avoid repetition.
- Pass arguments to functions and return values for flexible logic.
- Practice writing functions for calculations, logging, and UI updates.

---

### 5. The Document Object Model (DOM)

- Access and manipulate HTML elements using JavaScript (e.g., `document.getElementById`).
- Update the content of elements dynamically to reflect changes in data or user actions.
- Understand the connection between JavaScript and the web page structure.

---

### 6. Event Handling

- Respond to user interactions (like button clicks) using event listeners or HTML attributes (e.g., `onclick`).
- Trigger JavaScript functions when users interact with the page.
- Use events to make web pages interactive and responsive.

---

### 7. Connecting JavaScript to the UI

- Keep the user interface in sync with JavaScript variables.
- Update displayed values (like counters) in real time as users interact with the page.
- Practice the flow: user action → event handler → variable update → DOM update.

---

### 8. Practice and Application

- Reinforce concepts by building small features (like a counter).
- Experiment with variable manipulation, function calls, and DOM updates.
- Use the console for debugging and understanding code flow.

---

### 9. Arrays

- Learn to create arrays to store ordered lists of values.
- Understand zero-based indexing and how to access elements by their index.
- Use array methods like `.push()` to add and `.pop()` to remove elements.
- Iterate over arrays using `for` loops to process or render each item.

---

### 10. Objects

- Understand how to group related data and behavior using objects.
- Store properties (key-value pairs) and methods (functions) inside objects.
- Access and update object properties using dot notation.
- Use objects to represent more complex entities, such as a player in a game.

---

### 11. Conditional Statements and Comparison Operators

- Use `if`, `else if`, and `else` to control program flow based on conditions.
- Apply comparison operators (`<`, `>`, `===`, etc.) to compare values.
- Combine multiple conditions using logical operators (`&&` for AND, `||` for OR).

---

### 12. Booleans and State Management

- Use boolean values (`true` or `false`) to track state (e.g., isAlive, hasBlackjack).
- Update boolean variables to reflect changes in game or application state.
- Use booleans in conditional statements to control logic flow.

---

### 13. Loops

- Use `for` loops to repeat actions, such as rendering all items in an array.
- Understand loop structure: initialization, condition, increment.
- Practice iterating over arrays and performing actions on each element.

---

### 14. The Math Object

- Use `Math.random()` to generate random numbers for unpredictability (e.g., drawing cards).
- Use `Math.floor()` to round numbers down to the nearest integer.
- Combine these methods to simulate dice rolls or random card draws.

---

### 15. Functions with Return Values

- Write functions that return values using the `return` statement.
- Store returned values in variables for further use.
- Understand the difference between functions that perform actions and those that compute and return results.

---

### 16. Game Logic and UI Rendering

- Combine arrays, objects, booleans, and functions to manage game state.
- Use functions to start the game, draw new cards, and update the UI.
- Render dynamic content (like cards and sums) based on the current state.

---

### Example: A Function with Key Features

```js
// Function that adds two numbers and returns the result
function add(a, b) {
  // a, b: parameters (inputs)
  const sum = a + b; // local variable
  return sum; // return value
}

// Usage:
const result = add(2, 3); // result is 5

// Key points:
// - Functions can take parameters (inputs)
// - Functions can declare local variables
// - Functions can return a value
// - Functions can be called multiple times with different arguments
// - Functions help organize and reuse code
```

---

### Example: if, else if, and else Statements with Logical and Conditional Operators

```js
const age = 22;
const hasTicket = true;

// Using comparison and logical operators in if...else if...else
if (age >= 21 && hasTicket) {
  console.log("You may enter the club.");
} else if (age >= 21 && !hasTicket) {
  console.log("You need a ticket to enter.");
} else {
  console.log("You are not old enough to enter.");
}

// Key points:
// - Use comparison operators (>=, <, ===, etc.) to compare values
// - Use logical operators (&& for AND, || for OR, ! for NOT) to combine conditions
// - if...else if...else allows for multiple branches of logic
```

---

### Example: Array and Its Methods

```js
const fruits = ["apple", "banana", "cherry"];

// Accessing elements by index
console.log(fruits[0]); // "apple"

// Adding an element to the end
fruits.push("date");

// Removing the last element
fruits.pop();

// Getting the length of the array
console.log(fruits.length); // 3

// Key points:
// - Arrays store ordered lists of values
// - Use .push() to add, .pop() to remove
// - Access elements with [index], starting at 0
// - .length gives the number of elements
```

---

### Example: Object

```js
const player = {
  name: "Meherab",
  chips: 145,
  isActive: true,
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

// Accessing and updating properties
console.log(player.name); // "Meherab"
player.chips += 10;

// Calling a method
player.greet();

// Key points:
// - Objects group related data and behavior (properties and methods)
// - Access properties with dot notation (object.property)
// - Methods are functions stored as object properties
```

---

### Example: for Loop

```js
const numbers = [10, 20, 30, 40];

// Looping through an array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Key points:
// - for loops repeat actions a set number of times
// - Commonly used to iterate over arrays
// - Structure: initialize; condition; increment
```

---
