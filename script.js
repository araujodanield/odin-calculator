const currentOperation = document.querySelector(".operation");
const input = document.querySelector(".user-input");

const buttons = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "comma": ",",
    "plus-minus": "+/-",
    "add": "+",
    "subtract": "-",
    "multiply": "x",
    "divide": "÷",
    "delete": "⌫",
    "clear": "C",
    "equal": "=",
};

let currentNumber = "";
let currentResult = 0;
let operator = "";
let isNegative = false;



for (let id in buttons) {
    const btn = document.getElementById(id);
    const value = buttons[id];
    btn.addEventListener("click", () => changeDisplay(value));
};

function changeDisplay(value) {
    if (typeof value === "number" || value === ",") {
        addNumber(value);
    } else if (value === "+" || value === "-" || value === "x" || value === "÷") {
        addOperator(value);
    } else if (value === "+/-") {
        switchNegative();
    } else if (value === "⌫") {
        deleteNumber();
    } else if (value === "C") {
        clearAll();
    } else if (value === "=") {
        operate();
    };

    //Check if the input has more than 16 digits
    // if (input.textContent.length >= 16) {
    //     input.textContent = input.textContent.substring(0, 16);
    // };
};

function addNumber(number) {
    if (number === "," && currentNumber.includes(",")) {return};
    if (number === "," && currentNumber === "") {currentNumber = 0};
    currentNumber += number;
    input.textContent = currentNumber;
};

function addOperator(newOperator) {

    operator = newOperator;
    currentResult = Number(currentNumber.replace(",","."));
    currentNumber = "";
    currentOperation.textContent = `${input.textContent} ${operator} `;
};

function switchNegative() {
    isNegative = !isNegative;
    if (isNegative) {
        currentNumber = "-" + currentNumber;
    } else {
        currentNumber = currentNumber.slice(1);
    };
    input.textContent = currentNumber;
};

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
    input.textContent = currentNumber;
};

function clearAll() {
    currentNumber = "";
    operator = "";
    currentResult = 0;
    input.textContent = "";
    currentOperation.textContent = "";
};

function operate() {
    const number = Number(currentNumber.replace(",","."));
    if (currentOperation.textContent.includes("=")) {return};
    switch (operator) {
        case "+":
            currentResult += number;
            break;
        case "-":
            currentResult -= number;
            break;
        case "x":
            currentResult *= number;
            break;
        case "÷":
            currentResult /= number;
            break;
        default:
            currentResult = "";
    }
    currentNumber = currentResult.toString().replace(".",",");
    operator = "";
    currentOperation.textContent += `${input.textContent} = `;
    input.textContent = currentResult.toString().replace(".",",");
};

changeDisplay();