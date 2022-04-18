/**
 * input :
 * chieuDai
 * chieuRong
 * 
 * các bước sử lý
 * B1: tìm các thẻ = id
 * B2: Tạo hàm:
 *      + lấy giá trị từ form
 *      + lập công thức tính toán:
 *          dienTichHcn = chieuDai * chieuRong
 *          chuViHcn = (chieuDai + chieuRong) * 2
 *      + Hiển thị giá trị
 * B3: gắn sự kiện onclick
 * 
 * output: dienTichHcn,chuViHcn
 */

//! Bài Làm

var chieuDaiELE = document.getElementById("inputChieuDai");
var chieuRongELE = document.getElementById("inputChieuRong");
var dienTichHcn = 0;
var chuViHcn = 0;

function tinhKichThuoc() {

    var chieuDai = chieuDaiELE.value;
    var chieuRong = chieuRongELE.value;

    dienTichHcn = chieuDai * chieuRong;

    chuViHcn = (Number(chieuDai) + Number(chieuRong)) * 2;
    
    document.getElementById("kichThuoc").innerHTML = "Diện Tích HCN: " + dienTichHcn + "<br> Chu Vi HCN: " + chuViHcn;
}