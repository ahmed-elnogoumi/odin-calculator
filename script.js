let numberA = 0;
let numberB = 0;
let operator = "";

let numberField = document.getElementById("numberField");
let decimalKey = document.getElementById("decimal");
const numberKeys = document.querySelectorAll(".number");


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
    } else if (operator === "\u00D7") {
        return multiply(a, b);
    } else if (operator === "\u00F7") {
        return divide(a, b);
    }
}

function updateNumberA() {
    let decimalKeyFlag = false;

    decimalKey.addEventListener("click", (e) => {
        if (decimalKeyFlag === false) {
            if (numberField.textContent.length < 10) {
                numberField.textContent = numberField.textContent.concat(".");
                numberA = parseFloat(numberField.textContent);
                decimalKeyFlag = true;
            }
        }

        else if (decimalKeyFlag === true) {
            if (numberField.textContent.at(-1) === ".") {
                numberField.textContent = numberField.textContent.slice(0, -1);
                numberA = parseFloat(numberField.textContent);
                decimalKeyFlag = false;
            }
        }

        console.log(`Number A is ${numberA}`);
    })

    const clearKey = document.getElementById("clear");
    clearKey.addEventListener("click", (e) => {
        numberField.textContent = "0";
        numberA = parseFloat(numberField.textContent);
        decimalKeyFlag = false;
        console.log(`Number A is ${numberA}`);
    })

    numberKeys.forEach((element) => element.addEventListener("click", (e) => {
        if (numberField.textContent === "0") {
            numberField.textContent = element.textContent;
            numberA = parseFloat(numberField.textContent);
        } else {
            numberField.textContent = numberField.textContent.concat(element.textContent);
            numberA = parseFloat(numberField.textContent);
        }

        console.log(`Number A is ${numberA}`);
    }))
}

updateNumberA();