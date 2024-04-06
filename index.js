

// Math functions (add, subtract, multiply, divide)

function add (num1 ,num2) {
    let result = num1 + num2;
    return result;
}

function subtract (num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiply (num1, num2) {
    let result = num1 * num2;
    return result;
}

function divide (num1, num2) {
    let result = num1/num2;
    return result;
}



// creates three variables, num1, operator, and num2.
let num1 = 1;
let operator = 'opeartor_input'; //Will be further defined later.
let num2 = 2;

//Function that calls the function of the desired opeartor (Ex. add()) and returns the result. Will error is selected operator is not allowed/created.
function operate(num1, operator, num2) {
if(operator === '+') {
    let result = add(num1, num2);
    return result;
} else if (operator === "-") {
    let result = subtract(num1, num2);
    return result;
} else if (operator === "*") {
    let result = multiply(num1, num2);
    return result;
} else if (operator === "/") {
    let result = divide(num1, num2);
    return result;
} else {
    console.error("Unknown operator.");
}
}

 //Populates the display based upon the number selected.

 function populate() {
    const display = document.querySelector('#display');
    const display_element = document.createElement('H2');
        display_element.textContent = 'One Two Three Four'; //Creates an element for the display.
    display.appendChild(display_element);
 }

//Tests the operate function and logs them in the console. Shows a multiply function and a error in the console.

console.log (operate(13, '*', 18));
console.log (operate(6, "a", 10));
populate();