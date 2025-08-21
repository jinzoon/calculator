console.log ("1+1=" + add(1,1) );
console.log ("2+1=" + add(2,1) );
console.log ("100+115=" + add(100,115) );
console.log ("8+0=" + add(8,0) );

console.log ("1*1=" + multiply(1,1) );
console.log ("2*1=" + multiply(2,1) );
console.log ("100*115=" + multiply(100,115) );
console.log ("8*0=" + multiply(8,0) );


console.log ("1-1=" + subtract(1,1) );
console.log ("2-1=" + subtract(2,1) );
console.log ("100-115=" + subtract(100,115) );
console.log ("8-0=" + subtract(8,0) );


console.log ("1/1=" + divide(1,1) );
console.log ("2/1=" + divide(2,1) );
console.log ("100/115=" + divide(100,115) );
console.log ("8/0=" + divide(8,0) );


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