
function getDay(ngay, thang, nam) {
    var ngayThang = new Date(nam, thang - 1, ngay);

    var danhSachThu = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy"
    ];

    return danhSachThu[ngayThang.getDay()];
}

function getMonth(thang) {
    return "Tháng " + thang;
}

function getHours() {
    var gio = new Date().getHours();

    if (gio >= 5 && gio < 12) {
        return "Chào buổi sáng!";
    } else if (gio >= 12 && gio < 18) {
        return "Chào buổi chiều!";
    } else {
        return "Chào buổi tối!";
    }
}

function inLich() {
    var ngay = Number(document.getElementById("ngay-nhap").value);
    var thang = Number(document.getElementById("thang-nhap").value);
    var nam = Number(document.getElementById("nam-nhap").value);

    if (ngay < 1 || ngay > 31 ||
        thang < 1 || thang > 12 ||
        nam < 1 ||
        !Number.isInteger(ngay) ||
        !Number.isInteger(thang) ||
        !Number.isInteger(nam)) {

        alert("Vui lòng nhập ngày, tháng, năm hợp lệ!");
        return;
    }

    var ngayThang = new Date(nam, thang - 1, ngay);

    if (ngayThang.getDate() != ngay ||
        ngayThang.getMonth() != thang - 1 ||
        ngayThang.getFullYear() != nam) {

        alert("Ngày tháng năm không hợp lệ!");
        return;
    }

    document.getElementById("ngay").innerHTML = ngay;
    document.getElementById("thang").innerHTML = getMonth(thang);
    document.getElementById("nam").innerHTML = nam;
    document.getElementById("thu").innerHTML = getDay(ngay, thang, nam);
    document.getElementById("loi-chao").innerHTML = getHours();
}

document.getElementById("ngay-nhap").value = 24;
document.getElementById("thang-nhap").value = 12;
document.getElementById("nam-nhap").value = 2026;

inLich();

document.getElementById("nut-in").addEventListener("click", inLich);
