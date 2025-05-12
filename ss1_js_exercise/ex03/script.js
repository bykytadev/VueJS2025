let countdownInterval;

function startCountdown() {
    // Xóa đếm ngược trước đó (nếu có)
    clearInterval(countdownInterval);

    // Lấy số giây từ ô input
    let seconds = parseInt(document.getElementById("secondsInput").value);

    // Lấy thẻ <p> để hiển thị kết quả
    const resultElement = document.getElementById("countdownResult");

    // Kiểm tra dữ liệu nhập
    if (isNaN(seconds) || seconds <= 0) {
        resultElement.innerText = "Vui lòng nhập một số nguyên dương.";
        return;
    }

    countdownInterval = setInterval(function () {
        // Hiển thị số giây
        resultElement.innerText = seconds;

        // Giảm số giây
        seconds--;

        // Nếu đếm ngược kết thúc
        if (seconds < 0) {
            clearInterval(countdownInterval);
            resultElement.innerText = "Hết giờ";
        }
    }, 1000); // 1000ms = 1 giây;
}
