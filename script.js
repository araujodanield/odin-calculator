const operation = document.querySelector(".operation");
const input = document.querySelector(".user-input");
const buttons = document.querySelectorAll("button");

let value;

changeDisplay = () => {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            value = e.target.textContent;

            if (+value >= 0) {
                input.textContent += value;

            } else if (value === ",") {
                if (input.textContent.includes(",")) {
                    return;
                } else {
                    input.textContent += value;
                }

            } else if (value === "+/-") {
                if (value === "+/-" && input.textContent.includes("-")) {return};
                input.textContent = "-" + input.textContent;

            } else if (value === "⌫") {
                input.textContent = input.textContent.slice(0, -1);

            } else if (value === "C") {
                operation.textContent = "";
                input.textContent = "";

            } else {
                if (input.textContent === "") {return};
                operation.textContent += `${input.textContent} ${value} `;
                input.textContent = "";
            }
        })
    })
};

checkRules = () => {
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {

            // Check if the input has more than 16 digits
            if (input.textContent.length >= 16) {
                input.textContent = input.textContent.substring(0, 16);
            }
        })
    })
};

operate = () => {};

changeDisplay();
checkRules();