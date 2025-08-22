let firstNum;
let secondNum;
let operator;

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