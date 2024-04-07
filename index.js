

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
 
    //Array is set to contain nothing.
    let selected_numbers = [];


//Selected the ID=display elements and adds a "p" element. Adds the selected numbers to the display.
const display = document.querySelector('#display');
const display_element = document.createElement('H2');



//Adds a number to the number variable when the number is selected.
//Numbers
const btn_one = document.querySelector('#one');
    btn_one.addEventListener('click', () => {
        selected_numbers.push(1)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_two = document.querySelector('#two');
    btn_two.addEventListener('click', () => {
        selected_numbers.push(2)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_three = document.querySelector('#three');
    btn_three.addEventListener('click', () => {
        selected_numbers.push(3)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_four = document.querySelector('#four');
    btn_four.addEventListener('click', () => {
        selected_numbers.push(4)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_five = document.querySelector('#five');
    btn_five.addEventListener('click', () => {
        selected_numbers.push(5)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_six = document.querySelector('#six');
    btn_six.addEventListener('click', () => {
        selected_numbers.push(6)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_seven = document.querySelector('#seven');
    btn_seven.addEventListener('click', () => {
        selected_numbers.push(7)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_eight = document.querySelector('#eight');
    btn_eight.addEventListener('click', () => {
        selected_numbers.push(8)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_nine = document.querySelector('#nine');
    btn_nine.addEventListener('click', () => {
        selected_numbers.push(9)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);

    } 
)

const btn_zero = document.querySelector('#zero');
    btn_zero.addEventListener('click', () => {
        selected_numbers.push(0)
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

//Operators

const btn_add = document.querySelector('#add');
    btn_add.addEventListener('click', () => {
        selected_numbers.push('+')
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_subtract = document.querySelector('#subtract');
    btn_subtract.addEventListener('click', () => {
        selected_numbers.push('-')
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_multiply = document.querySelector('#multiply');
    btn_multiply.addEventListener('click', () => {
        selected_numbers.push('*')
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)

const btn_devide = document.querySelector('#devide');
    btn_devide.addEventListener('click', () => {
        selected_numbers.push('/')
        console.log (selected_numbers);
        display_element.textContent = selected_numbers.join("");
        display.appendChild(display_element);
    } 
)


 }

//Tests the operate function and logs them in the console. Shows a multiply function and a error in the console.

console.log (populate());