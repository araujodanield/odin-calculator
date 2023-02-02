const operation = document.querySelector(".operation");
const input = document.querySelector(".user-input");
const buttons = document.querySelectorAll("button");


changeDisplay = () => {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let value = e.target.textContent;

            if (+value >= 0 || value === ",") {
                if (value === "," && input.textContent.includes(",")) {return};
                input.textContent += value;
            } else if (value === "+ / -") {
                if (value === "+ / -" && input.textContent.includes("-")) {return};
                input.textContent = "-" + input.textContent;
            } else if (value === "⌫") {
                input.textContent = input.textContent.slice(0, -1);
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

checkRules = () => {};

operate = () => {};

changeDisplay();
