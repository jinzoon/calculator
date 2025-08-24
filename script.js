let firstNum;
let secondNum;
let operator;
let currentNum;
let currentInput = "";

let replaceCurrentDisplay = false;

const display__number = document.querySelector(".display__number");
const display__operator = document.querySelector(".display__operator")
const button__digit = document.querySelectorAll(".button__digit");
const button__clear = document.querySelector(".button__clear");
const button_operator =document.querySelectorAll(".button_operator");
const button__equal = document.querySelector(".button__equal");
const button__posneg = document.querySelector(".button__posneg");
const button__delete = document.querySelector(".button__delete");

button__digit.forEach(button => {
    button.addEventListener("click", () => 
        addToDisplay(button.textContent, display__number));});

button_operator.forEach(button => {
    button.addEventListener("click", () => 
        operatorPressed());});

button__clear.addEventListener("click", () => 
    clearAll());
button_operator.forEach(button => {
    button.addEventListener("click", () => 
        operator = button.textContent)});

button_operator.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNum !== undefined) {
        display__operator.textContent = button.textContent}})});

button__equal.addEventListener("click", () => equalPressed());

button__posneg.addEventListener("click", () => {
if (display__number.textContent == "Can't divide by Zero"){ return;} 
    if (currentNum !== undefined) {
    currentNum = (currentNum*-1);
    display__number.textContent = formatForDisplay(currentNum);}}
);

button__delete.addEventListener("click", () => {
if (display__number.textContent == "Can't divide by Zero"){ return;}

    if (currentNum !== undefined) {
    if (currentInput.charAt(currentInput.length-1) == "."){
    }
       currentInput = currentInput.slice(0,-1);
       currentNum = Number(currentInput);
       display__number.textContent = formatForDisplay(currentInput);
if (currentInput.length == 0){
    currentNum == undefined;
    }       
    }}
);

function equalPressed(){
if (display__number.textContent == "Can't divide by Zero"){ return;}

    if (firstNum == undefined && currentNum == undefined){
        return;
    }
    else if (firstNum !== undefined && currentNum !== undefined){
        secondNum = currentNum;
        let holdingNum = operate(operator,firstNum,secondNum);
        
        display__number.textContent = formatForDisplay(holdingNum);}
        display__operator.textContent = "";
        firstNum = undefined;
        replaceCurrentDisplay = true;
        secondNum = undefined;
        currentNum = undefined;
    }



function formatForDisplay(num) {
    if (num.toString().length > 15) {
        return num.toExponential(8)
    }
    else {
        return num.toString();
    }

}

function addToDisplay(digit, display){
if (display__number.textContent == "Can't divide by Zero"){ return;}

if (replaceCurrentDisplay == false){ 
     if(digit == "." && currentInput.includes(".") == true){
       return;
    }
    currentInput += digit;
    currentNum = Number(currentInput);
    display.textContent = formatForDisplay(currentInput);
}
 else if (replaceCurrentDisplay == true) {
    if(digit == "." && currentInput.includes(".") == true){
       return;
    }
    currentInput = digit.toString();
    display.textContent = formatForDisplay(currentInput);
    
    currentNum = Number(currentInput);
    replaceCurrentDisplay = false
    }

}
    


function operatorPressed() {
    if (display__number.textContent == "Can't divide by Zero"){ return;}
    
    
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
        display__number.textContent = formatForDisplay(firstNum);
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
    display__number.textContent = "";
    currentInput = "";
    display__operator.textContent = "";
    replaceCurrentDisplay = false;

}

function operate(operator, firstNum, secondNum){
    if (operator == "+"){
       return add(firstNum,secondNum);
    }
    else if (operator == "-") {
        return subtract(firstNum,secondNum);
    }
    else if (operator == "X") {
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
        display__number.textContent = "Can't divide by Zero";
        return }
    else {
       
    return (num1/num2);}
}