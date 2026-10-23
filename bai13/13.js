
/* Hàm hiển thị một số bằng hai ảnh */
function hienThiSo(idHangChuc, idHangDonVi, so) {

    // Đổi số thành chuỗi có hai chữ số
    let chuoi = String(so).padStart(2, "0");

    // Lấy chữ số hàng chục
    let hangChuc = chuoi[0];

    // Lấy chữ số hàng đơn vị
    let hangDonVi = chuoi[1];

    // Hiển thị ảnh hàng chục
    document.getElementById(idHangChuc).src =
        "Anh/Bai13/0" + hangChuc + ".gif";

    // Hiển thị ảnh hàng đơn vị
    document.getElementById(idHangDonVi).src =
        "Anh/Bai13/0" + hangDonVi + ".gif";
}


/* Hàm cập nhật đồng hồ và lời chào */
function capNhatDongHo() {

    // Lấy thời gian hiện tại
    let thoiGian = new Date();

    let gio = thoiGian.getHours();
    let phut = thoiGian.getMinutes();
    let giay = thoiGian.getSeconds();

    // Hiển thị giờ bằng hai ảnh
    hienThiSo("gio1", "gio2", gio);

    // Hiển thị phút bằng hai ảnh
    hienThiSo("phut1", "phut2", phut);

    // Hiển thị giây bằng hai ảnh
    hienThiSo("giay1", "giay2", giay);

    // Lấy phần tử lời chào
    let loiChao = document.getElementById("loiChao");

    // Thay đổi lời chào theo giờ
    if (gio >= 5 && gio < 12) {

        loiChao.innerHTML = "Chào buổi sáng";

    } else if (gio >= 12 && gio < 14) {

        loiChao.innerHTML = "Chào buổi trưa";

    } else if (gio >= 14 && gio < 18) {

        loiChao.innerHTML = "Chào buổi chiều";

    } else {

        loiChao.innerHTML = "Chào buổi tối";

    }
}

// Gọi hàm ngay khi mở trang
capNhatDongHo();

// Cập nhật lại sau mỗi một giây
setInterval(capNhatDongHo, 1000);

