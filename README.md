# JavaScript Calculator

A fully functional calculator built with **HTML, CSS, and JavaScript** as part of [The Odin Project](https://www.theodinproject.com/).  
It supports basic arithmetic, sign toggling, deletion, and chaining operations — styled to look like a classic digital LCD calculator.

---

## Features

- Basic arithmetic: add, subtract, multiply, divide
- Delete button (remove last digit)
- Clear button (reset calculator state)
- Sign toggle (+/-)
- Decimal point support with duplicate prevention
- Error handling for division by zero ("Can't divide by Zero")
- Chained operations without pressing equals each time
- Automatic formatting for long numbers (switches to exponential after 15 digits)
- Styled LCD-like display with custom font

---

## How to Run

Visit: https://jinzoon.github.io/calculator/ in your browser

---

## What I Practiced

- DOM manipulation with `querySelector`, `querySelectorAll`, and event listeners
- Handling multiple states (`firstNum`, `secondNum`, `currentNum`, etc.)
- Operator chaining logic
- String/number conversions and edge-case handling
- Formatting long outputs with `toExponential()`
- Flexbox for responsive layout
- Using a custom font with `@font-face`

---


## Known Quirks

- Calculator does not currently implement operator precedence (PEMDAS). Operations are performed sequentially (as per project requirements). 
- Input is limited to one operator at a time (as per project requirements).

---

## Technologies Used

- HTML5  
- CSS3 (Flexbox, custom fonts)  
- JavaScript (Vanilla)  

---

## License

This project is for educational purposes only. No license is applied.