// Khởi tạo biến đếm số lần click
let clickCount = 0;

// Lấy element thẻ <p> từ HTML
const clickCountElement = document.getElementById("clickCount");

// Khi nhấn button "Click me!" thì sẽ gọi hàm changeClickCount()
function changeClickCount() {
    // Tăng biến đếm lên 1
    clickCount++;

    // Cấp nhật giá trị trong thẻ <p>
    if (clickCountElement) {
        clickCountElement.innerText = `Số lần click: ${clickCount}`;
    }
}