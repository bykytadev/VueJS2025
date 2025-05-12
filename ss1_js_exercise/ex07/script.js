function calculateDays() {
    const month = parseInt(document.getElementById("monthInput").value);
    const resultElement = document.getElementById("result");

    // Kiểm tra dữ liệu
    if (isNaN(month) || month < 1 || month > 12) {
        resultElement.innerText = "Vui lòng nhập tháng hợp lệ từ 1 đến 12.";
        return;
    }

    // Sử dụng mảng để xác định số ngày trong tháng
    const daysInMonth = [31, "28 hoặc 29 (tùy thuộc vào năm nhuận)", 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = daysInMonth[month - 1];

    resultElement.innerText = `Số ngày trong tháng ${month} là: ${days}`;
}
