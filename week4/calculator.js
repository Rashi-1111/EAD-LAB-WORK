let display = document.getElementById('display');
let current = '';

function press(val) {
    current += val;
    display.value = current;
}

function calculate() {
    try {
        current = eval(current).toString();
        display.value = current;
    } catch {
        display.value = 'Error';
        current = '';
    }
}

function clearDisplay() {
    current = '';
    display.value = '';
}

function deleteLast() {
    current = current.slice(0, -1);
    display.value = current;
}