const display = document.querySelector(".display");

const btnOne = document.getElementById("one");

const btnClear = document.getElementById("clear");

let changeDisplay = () => {
    btnOne.addEventListener("click", () => {
        display.textContent = "1";
    });
}

let clearDisplay = () => {
    btnClear.addEventListener("click", () => {
        display.textContent = "";
    })
}

changeDisplay()
clearDisplay()