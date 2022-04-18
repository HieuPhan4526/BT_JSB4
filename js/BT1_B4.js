/**
 * input
 * + luong1Ngay
 * + soNgayLam
 * 
 * các bước sử lý
 * 
 * B1: tìm các thẻ = id
 * B2: Tạo hàm tính
 *      + lấy giá trị từ form
 *      + Lập công thức tính toán 
 *          tongLuong = luong1Ngay * soNgayLam
 *      + Hiển thị kết quả
 * 
 * B3: gắn sự kiện onclick
 *          
 * output : tongLuong
 */

//! lời giải

var tienLuong = document.getElementById("inputLuong1Ngay");
var ngayLam = document.getElementById("inputSoNgayLam");
var tongLuong = 0;

function tinhTongLuong() {

    var luong1Ngay = tienLuong.value;

    var soNgayLam = ngayLam.value;

    var tongLuong = luong1Ngay * soNgayLam;


    document.getElementById("tXt").innerHTML= "Tổng lương: <br>" + tongLuong.toLocaleString() + "VND";
}

