let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('calc-display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('calc-display').value = '';
}

function calculateResult() {
    try {
        let expression = displayValue.toString()
        let result = Function("return " + expression)();
        displayValue = result.toString();
        document.getElementById('calc-display').value = result;
    } catch (error) {
        document.getElementById('calc-display').value = 'Error';
        displayValue = '';
    }
}
