const display = document.querySelector(".display");

const btn = {
    zero: document.getElementById("zero"),
    one: document.getElementById("one"),
    two: document.getElementById("two"),
    three: document.getElementById("three"),
    four: document.getElementById("four"),
    five: document.getElementById("five"),
    six: document.getElementById("six"),
    seven: document.getElementById("seven"),
    eight: document.getElementById("eight"),
    nine: document.getElementById("nine"),
    dot: document.getElementById("dot"),
    plusMinus: document.getElementById("plus-minus"),
    plus: document.getElementById("plus"),
    minus: document.getElementById("minus"),
    multiply: document.getElementById("multiply"),
    divide: document.getElementById("divide"),
    delete: document.getElementById("delete"),
    clear: document.getElementById("clear"),
    equal: document.getElementById("equal")
}

let changeDisplay = () => {
    btn.zero.addEventListener("click", () => {
        display.textContent += "0";
    });
    btn.one.addEventListener("click", () => {
        display.textContent += "1";
    });
    btn.two.addEventListener("click", () => {
        display.textContent += "2";
    });
    btn.three.addEventListener("click", () => {
        display.textContent += "3";
    });
    btn.four.addEventListener("click", () => {
        display.textContent += "4";
    });
    btn.five.addEventListener("click", () => {
        display.textContent += "5";
    });
    btn.six.addEventListener("click", () => {
        display.textContent += "6";
    });
    btn.seven.addEventListener("click", () => {
        display.textContent += "7";
    });
    btn.eight.addEventListener("click", () => {
        display.textContent += "8";
    });
    btn.nine.addEventListener("click", () => {
        display.textContent += "9";
    });
    btn.dot.addEventListener("click", () => {
        display.textContent += ".";
    });
    // btn.plusMinus.addEventListener("click", () => {
    //     display.textContent += "test";
    // }); Need elaboration
    btn.plus.addEventListener("click", () => {
        display.textContent += " + ";
    });
    btn.minus.addEventListener("click", () => {
        display.textContent += " - ";
    });
    btn.multiply.addEventListener("click", () => {
        display.textContent += " x ";
    });
    btn.divide.addEventListener("click", () => {
        display.textContent += " ÷ ";
    });
    // btn.delete.addEventListener("click", () => {
    //     display.textContent += "test";
    // }); Need elaboration
    btn.clear.addEventListener("click", () => {
        display.textContent = "";
    });
    // btn.equal.addEventListener("click", () => {
    //     display.textContent += "test";
    // }); Need elaboration
};

changeDisplay();
