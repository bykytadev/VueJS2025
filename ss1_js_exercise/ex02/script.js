function gradeStudent() {
    // Lấy giá trị từ ô input
    const score = document.getElementById("scoreInput").value;

    // Lấy thẻ <p> để hiển thị kết quả
    const result = document.getElementById("gradeResult");

    // Kiểm tra dữ liệu nhập vào
    if (isNaN(score) || score < 0 || score > 10) {
        result.innerHTML = "Điểm không hợp lệ. Vui lòng nhập điểm từ 0 đến 10.";
        return;
    }

    // Xác định xếp loại dựa trên điểm
    if (score >= 10) {
        result.innerHTML = "Xếp loại: Xuất sắc";
    } else if (score >= 8) {
        result.innerHTML = "Xếp loại: Giỏi";
    } else if (score >= 6.5) {
        result.innerHTML = "Xếp loại: Khá";
    } else if (score >= 5) {
        result.innerHTML = "Xếp loại: Trung bình";
    } else {
        result.innerHTML = "Xếp loại: Yếu";
    }
}
