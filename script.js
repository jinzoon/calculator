let firstNum;
let secondNum;
let operator;

console.log ("1+1=" + operate("add",1,1) );
console.log ("2+1=" + operate("add",2,1) );
console.log ("100+115=" + operate("add",100,115) );
console.log ("8+0=" + operate("add",8,0) );
console.log ("1*1=" + operate("mult",1,1) );
console.log ("2*1=" + operate("mult",2,1) );
console.log ("23*34=" + operate("mult",23,34) );
console.log ("8/0=" + operate("div",8,0) );
console.log ("1/1=" + operate("div",1,1) );
console.log ("2-1=" + operate("sub",2,1) );
console.log ("100-115=" + operate("sub",100,115) );
console.log ("8-S0=" + operate("sub",8,0) );


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