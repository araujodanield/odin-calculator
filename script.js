const operation = document.querySelector(".operation");
const input = document.querySelector(".user-input");
const buttons = document.querySelectorAll("button");


let changeDisplay = () => {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let value = e.target.textContent;

            if (+value >= 0 || value === ",") {
                input.textContent += value
            } else if (value === "+ / -") {
                input.textContent = "-" + input.textContent
            } else if (value === "⌫") {
                input.textContent = input.textContent.toString().slice(0, -1)
            } else if (value === "C") {
                operation.textContent = ""
                input.textContent = ""
            } else {
                operation.textContent += input.textContent + " " + value + " "
                input.textContent = ""
            }
        })
    })
};

changeDisplay();
