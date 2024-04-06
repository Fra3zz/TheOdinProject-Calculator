

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
 
    let selected_number = [];

//Adds a number to the number variable when the number is selected.
const btn_one = document.querySelector('#one');
    btn_one.addEventListener('click', () => {
        selected_number.push(1)
        console.log (selected_number);
    } 
)


const btn_two = document.querySelector('#two');
    btn_two.addEventListener('click', () => {
        selected_number.push(2)
        console.log (selected_number);
    } 
)

const btn_three = document.querySelector('#three');
    btn_three.addEventListener('click', () => {
        selected_number.push(3)
        console.log (selected_number);
} 
)

const btn_four = document.querySelector('#four');
    btn_four.addEventListener('click', () => {
        selected_number.push(4)
        console.log (selected_number);
} 
)

const btn_five = document.querySelector('#five');
    btn_five.addEventListener('click', () => {
        selected_number.push(5)
        console.log (selected_number);
} 
)

const btn_six = document.querySelector('#six');
    btn_six.addEventListener('click', () => {
        selected_number.push(6)
        console.log (selected_number);
} 
)

const btn_seven = document.querySelector('#seven');
    btn_seven.addEventListener('click', () => {
        selected_number.push(7)
        console.log (selected_number);
} 
)

const btn_eight = document.querySelector('#eight');
    btn_eight.addEventListener('click', () => {
        selected_number.push(8)
        console.log (selected_number);
} 
)

const btn_nine = document.querySelector('#nine');
    btn_nine.addEventListener('click', () => {
        selected_number.push(9)
        console.log (selected_number);
} 
)

const btn_zero = document.querySelector('#zero');
    btn_zero.addEventListener('click', () => {
        selected_number.push(0)
        console.log (selected_number);
} 
)


//Selected the ID=display elements and adds a "p" element. Adds the selected numbers to the display.
    const display = document.querySelector('#display');
    const display_element = document.createElement('H2');
        display_element.textContent = selected_number; //Creates an element for the display.
    display.appendChild(display_element);
 }

//Tests the operate function and logs them in the console. Shows a multiply function and a error in the console.

console.log (populate());