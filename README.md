# 🎲 Random Number Generator

A simple and responsive **Random Number Generator** web application built using **HTML, Tailwind CSS, and JavaScript**. Users can enter a minimum and maximum value, and the application generates a random number within the given range.

## 📌 Features

* Enter minimum and maximum numbers
* Generate a random number with one click
* Displays the generated number instantly
* Validates empty input fields
* Checks whether the minimum number is greater than the maximum number
* Responsive and clean user interface
* Built with beginner-friendly JavaScript

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **Tailwind CSS** – Styling and responsive design
* **JavaScript** – Random number generation, validation, and DOM manipulation

## 📂 Project Structure

```text
random-number-generator/
│
├── index.html
├── script.js
└── README.md
```

## ⚙️ How It Works

1. Enter a minimum number.
2. Enter a maximum number.
3. Click the **Generate Random Number** button.
4. JavaScript generates a random integer within the specified range.
5. The generated number is displayed on the screen.

## 🧠 JavaScript Logic

* `Math.random()` generates a random decimal number between `0` and `1`.
* `Math.floor()` converts the result into a whole number.
* The formula ensures that the generated number falls between the minimum and maximum values.

## 🔮 Future Improvements

* Add a **Reset** button
* Add random number generation history
* Add dark mode
* Add an option to generate multiple random numbers
* Add copy-to-clipboard functionality

