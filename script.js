let firstNum;
let secondNum;
let operator;
let currentNum;

const calculator__display = document.querySelector(".calculator__display");
const button__digit = document.querySelectorAll(".button__digit");
const button__clear = document.querySelector(".button__clear");

button__digit.forEach(button => {
      button.addEventListener("click", () => addToDisplay(button.textContent, calculator__display, currentNum));
});

button__clear.addEventListener("click", () => clearAll(firstNum, secondNum, operator, currentNum, calculator__display));

function addToDisplay(digit, display, currentNum){
    display.textContent += digit;
    currentNum = Number(calculator__display.textContent);
}



function clearAll(firstNum, secondNum, operator, currentNum, calculator__display){
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    currentNum = undefined
    calculator__display.textContent = "";
}

function operate(operator, firstNum, secondNum){
    if (operator == "add"){
       return add(firstNum,secondNum);
    }
    else if (operator == "sub") {
        return subtract(firstNum,secondNum);
    }
    else if (operator == "mult") {
        return multiply(firstNum,secondNum);
    }
    else if (operator == "div"){
        return divide(firstNum, secondNum);
    }
    else {
        return null;
    }
}


function add(num1,num2) {
    return (num1+num2);
}

function subtract(num1,num2) {
    return (num1-num2);
}

function multiply(num1,num2) {
    return (num1*num2);
}

function divide(num1,num2) {
    if (num2 === 0){
        return "Can't divide by Zero"}
    else {
       
    return (num1/num2);}
}