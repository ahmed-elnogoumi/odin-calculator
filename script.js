let numberA = undefined;
let numberB = undefined;
let operator = undefined;

let numberField = document.getElementById("numberField");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

function updateDisplay() {
    x = undefined;

    // Logic for decimal numbers
    decimalKey = document.getElementById("decimal");
    decimalKeyFlag = false;
    decimalKey.addEventListener("click", (e) => {
        if (x === undefined || x === "0") {
            x = "0.";
            numberField.textContent = x;
            decimalFlag = true;
        } else {
            if (x.at(-1) === ".") {
                x = x.slice(0, -1);
                numberField.textContent = x;
                decimalFlag = false;
            }
        }
    })

    const numberKeys = document.querySelectorAll(".number");
    numberKeys.forEach((element) => element.addEventListener("click", (e) => {
        if (x === undefined || x === "0") {
            x = element.textContent;
            numberField.textContent = x;
        } else {
            x += element.textContent;
            numberField.textContent = x;
        }
        console.log(x);
    }));
}

updateDisplay();