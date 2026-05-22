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

**Tip:**  
Revisit this documentation whenever you need a refresher on JavaScript basics, DOM manipulation, or event handling. Practice by modifying the counter or adding new features!
