function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = this.getAttribute("data-operator");
    const resultElement = document.getElementById("result");

    // Kiểm tra dữ liệu đầu vào
    if (isNaN(number1) || isNaN(number2)) {
        resultElement.innerText = "Vui lòng nhập số hợp lệ.";
        return;
    }

    if (operator === "/" && number2 === 0) {
        resultElement.innerText = "Không thể chia cho số 0.";
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
    }

    resultElement.innerText = `Kết quả: ${result}`;
}

document.querySelectorAll("button[data-operator]").forEach(btn =>
    btn.addEventListener("click", calculate)
);
