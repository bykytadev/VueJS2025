function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Kiểm tra dữ liệu nhập
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Vui lòng nhập số tiền hợp lệ.";
        return;
    }

    // Tỷ giá hối đoái
    const exchangeRates = {
        VND: { USD: 1 / 26000, VND: 1 },
        USD: { VND: 26000, USD: 1 }
    };

    // Tính toán kết quả
    const result = amount * (exchangeRates[fromCurrency][toCurrency] || 1);

    // Hiển thị kết quả
    document.getElementById("result").innerText = `Kết quả: ${result.toFixed(2)} ${toCurrency}`;
}
