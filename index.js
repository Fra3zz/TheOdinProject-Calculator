// Define basic arithmetic operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Can't divide by 0";
    }
    return num1 / num2;
}

// Function to handle the operation based on the operator
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operation";
    }
}

// Handle clicking of buttons and updating the display
let currentInput = '';
let previousInput = '';
let operation = null;
const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentInput;
}

document.querySelectorAll('div > button').forEach(button => {
    button.addEventListener('click', () => {
        const btnValue = button.textContent;
        if ('0123456789'.includes(btnValue)) {
            currentInput += btnValue;
            updateDisplay();
        } else if ('+-*/'.includes(btnValue)) {
            previousInput = currentInput;
            operation = btnValue;
            currentInput = '';
        } else if (btnValue === '=') {
            currentInput = operate(operation, parseFloat(previousInput), parseFloat(currentInput)).toString();
            operation = null;
            updateDisplay();
        } else if (btnValue === 'clear') {
            currentInput = '';
            previousInput = '';
            operation = null;
            updateDisplay();
        }
    });
});
