let firstNum;
let secondNum;
let operator;
let currentNum;
let currentInput = "";

let replaceCurrentDisplay = false;


const calculator__display = document.querySelector(".calculator__display");
const button__digit = document.querySelectorAll(".button__digit");
const button__clear = document.querySelector(".button__clear");
const button_operator =document.querySelectorAll(".button_operator");
const button__equal = document.querySelector(".button__equal");
const button__posneg = document.querySelector(".button__posneg");
const button__delete = document.querySelector(".button__delete");

button__digit.forEach(button => {
    button.addEventListener("click", () => 
        addToDisplay(button.textContent, calculator__display));});

button_operator.forEach(button => {
    button.addEventListener("click", () => 
        operatorPressed());});

button__clear.addEventListener("click", () => 
    clearAll());
button_operator.forEach(button => {
    button.addEventListener("click", () => 
        operator = button.textContent)});

button__equal.addEventListener("click", () => equalPressed());

button__posneg.addEventListener("click", () => {
if (calculator__display.textContent == "Can't divide by Zero"){ return;} 
    if (currentNum !== undefined) {
    currentNum = (currentNum*-1);
    calculator__display.textContent = currentNum;}}
);

button__delete.addEventListener("click", () => {
if (calculator__display.textContent == "Can't divide by Zero"){ return;}

    if (currentNum !== undefined) {
    if (currentInput.charAt(currentInput.length-1) == "."){
    }
       currentInput = currentInput.slice(0,-1);
       currentNum = Number(currentInput);
       calculator__display.textContent = currentInput;
if (currentInput.length == 0){
    currentNum == undefined;
}       

 
    }}
);

function equalPressed(){
if (calculator__display.textContent == "Can't divide by Zero"){ return;}

    if (firstNum == undefined && currentNum == undefined){
        return;
    }
    else if (firstNum !== undefined && currentNum !== undefined){
        secondNum = currentNum;
        let holdingNum = operate(operator,firstNum,secondNum);
        
        if (holdingNum.toString().length > 11) {
            calculator__display.textContent = holdingNum.toExponential(7);
        }
        else {
        calculator__display.textContent = holdingNum;}
        firstNum = undefined;
        replaceCurrentDisplay = true;
        secondNum = undefined;
        currentNum = undefined;

    }

}


function addToDisplay(digit, display){
if (calculator__display.textContent == "Can't divide by Zero"){ return;}

if (replaceCurrentDisplay == false){ 
     if(digit == "." && currentInput.includes(".") == true){
       return;
    }
    currentInput += digit;
    currentNum = Number(currentInput);
    display.textContent = currentInput;
}
 else if (replaceCurrentDisplay == true) {
    if(digit == "." && currentInput.includes(".") == true){
       return;
    }
    currentInput = digit.toString();
    display.textContent = currentInput;
    
    currentNum = Number(currentInput);
    replaceCurrentDisplay = false
    }

}
    


function operatorPressed() {
    if (calculator__display.textContent == "Can't divide by Zero"){ return;}

    if (firstNum == undefined && secondNum == undefined ){
        firstNum = currentNum;
        replaceCurrentDisplay = true;
        currentNum = undefined;
    }
    else if (firstNum !== undefined && currentNum == undefined){
        return;
    }

    else if (firstNum !== undefined && secondNum == undefined) {
        secondNum = currentNum;
        let holdingNum = operate(operator,firstNum,secondNum);
        firstNum = holdingNum;

        if (firstNum.toString().length > 11) {
            calculator__display.textContent = firstNum.toExponential(7);
        }
        else {
        calculator__display.textContent = firstNum;}
        replaceCurrentDisplay = true;
        secondNum = undefined;
        currentNum = undefined;

        
      
    }
    
}


function clearAll(){
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    currentNum = undefined
    calculator__display.textContent = "";
    currentInput = "";

}

function operate(operator, firstNum, secondNum){
    if (operator == "+"){
       return add(firstNum,secondNum);
    }
    else if (operator == "-") {
        return subtract(firstNum,secondNum);
    }
    else if (operator == "x") {
        return multiply(firstNum,secondNum);
    }
    else if (operator == "÷"){
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
        calculator__display.textContent = "Can't divide by Zero";
        return }
    else {
       
    return (num1/num2);}
}