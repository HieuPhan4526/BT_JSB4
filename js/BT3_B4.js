/**
 * input
 * + USD
 * + giaUsdHienNay
 * + giaQuyDoiUsdSangVnd
 * + nguoiDungNhapSoTienUSD
 * 
 * Các bước xử lý
 * B1: tìm các thẻ = id
 * B2: Tạo Hàm
 *      + lấy giá trị từ form
 *      + Lập công thức tính toán:
 *          giaQuyDoiUsdSangVnd = 23500 * USD
 *          tienSauQuyDoi = giaQuyDoiUsdSangVnd * nguoiDungNhapSoTienUSD
 *      + Hiển thị giá trị
 * B3: gán sự kiện onclick
 * 
 * 
 * output : tienSauQuyDoi
 */ 

//! Bài làm

var inputUSD = document.getElementById("usd");
var inputNguoiDung = document.getElementById("nguoiDung");
var giaUsdHienNay = 23500;
var giaQuyDoiUsdSangVnd = 0;
var tienSauQuyDoi = 0;

function quyDoiTien() {
    var USD = inputUSD.value;
    var nguoiDungNhapSoTienUSD = inputNguoiDung.value;

    giaQuyDoiUsdSangVnd = giaUsdHienNay * USD;

    tienSauQuyDoi = giaQuyDoiUsdSangVnd * nguoiDungNhapSoTienUSD;

    document.getElementById("quyDoi").innerHTML = "Giá quy đổi USD sang VND: " +giaQuyDoiUsdSangVnd + "<br> Tiền sau quy dổi: " +tienSauQuyDoi;

}