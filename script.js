/* General equation functionality */

let a = 0;
let b = 0;
let operator = "";

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    switch (operator) {
        case "+":
            return add(x, y);
        case "-":
            return subtract(x, y);
        case "\u00D7":
            return multiply(x, y);
        case "\u00F7":
            return divide(x, y);
        default:
            break;
    }
}

const numberField = document.getElementById("numberField");
const numberKeys = document.querySelectorAll(".number");

let isBeingOperatedOn = false;

console.log(numberField.innerText);

// numberKeys.forEach((element) => {
//     console.log(element.innerText);
//     element.addEventListener("click", (e) => {
//         if (numberField.innerText === "0") {
//             numberField.innerText = element.innerText;
//         } else if (numberField.innerText.length < 11) {
//             numberField.innerText += element.innerText;
//         }
//     })
// })

function updateNumber() {
    numberKeys.forEach((element) => {
        console.log(element.innerText);
        element.addEventListener("click", (e) => {
            if (numberField.innerText === "0") {
                numberField.innerText = element.innerText;
                return parseFloat(numberField.innerText)
            } else if (numberField.innerText.length < 11) {
                numberField.innerText += element.innerText;
                return parseFloat(numberField.innerText)
            }
        })
    })
}


a = updateNumber();