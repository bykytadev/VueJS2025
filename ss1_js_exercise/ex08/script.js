// Tạo bảng cửu chương
const createMultiplicationTable = () => {
    const rows = [];

    // Vòng lặp từ 1 đến 10 để tạo các dòng
    for (let i = 1; i <= 10; i++) {
        const cells = [];

        // Vòng lặp từ 1 đến 10 để tạo các cột trong mỗi dòng
        for (let j = 1; j <= 10; j++) {
            cells.push(`<td>${i} x ${j} = ${i * j}</td>`);
        }

        // Thêm dòng vào mảng
        rows.push(`<tr>${cells.join('')}</tr>`);
    }

    // Trả về bảng hoàn chỉnh
    return `<table>${rows.join('')}</table>`;
};

// Đưa bảng vào thẻ div có id="table" trong HTML
document.getElementById("table").innerHTML = createMultiplicationTable();
