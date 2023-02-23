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
        resetOperation();
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
};

function addNumber(number) {
    if (number === "," && currentNumber.includes(",")) {return};
    if (number === "," && currentNumber === "") {
        currentNumber = "0,";
        input.textContent = "0,";
        return;
    };
    
    currentNumber += number;
    
    if (currentNumber.replace(".", "").length > 16) {
        currentNumber = currentNumber.slice(0, -1);
        return;
    };

    if (number !== ",") {
        input.textContent = formatNumber(Number(currentNumber.replace(",", ".")));
    } else {
        input.textContent += ",";
    };
};

function formatNumber(number) {
    return number.toLocaleString("pt-BR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 16
    });
};

function addOperator(newOperator) {
    operator = newOperator;
    currentResult = Number(currentNumber.replace(",","."));
    currentNumber = "";
    currentOperation.textContent = `${input.textContent} ${operator} `;
};

function switchNegative() {
    isNegative = !isNegative;
    const number = currentNumber.replace(",", ".");
    if (currentNumber === "") {return};

    if (isNegative) {
        if (number.startsWith("-")) {
            currentNumber = number.substring(1);
        } else {
            currentNumber = "-" + number;
        };
    } else {
        if (number.startsWith("-")) {
        currentNumber = number.substring(1);
        };
    };
    
    input.textContent = formatNumber(Number(currentNumber.replace(",", ".")));
};

function deleteNumber() {
    if (currentOperation.textContent.includes("=")) {
        currentOperation.textContent = "";
    } else {
        currentNumber = currentNumber.slice(0, -1);
        input.textContent = currentNumber;
    };
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
    currentNumber = formatNumber(currentResult).replace(".", ",");
    operator = "";
    currentOperation.textContent += `${input.textContent} = `;
    input.textContent = formatNumber(currentResult);
};

function resetOperation() {
    if (currentOperation.textContent.includes("=")) {clearAll()};
};
