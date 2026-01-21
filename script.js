let display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearAll() {
    display.innerText = "0";
}

function deleteOne() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        let exp = display.innerText.replace('%', '/100');
        display.innerText = eval(exp);
    } catch {
        display.innerText = "Error";
    }
}
