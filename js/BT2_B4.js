/**
 * input:
 * + num1...num5
 * 
 * các bước xử lý
 * 
 * B1: tìm các thẻ = id
 * B2: tạo hàm
 *      + lấy giá trị từ form
 *      + Lặp công thức tính toán 
 *          tb = (num1 + num2 + num3 + num4 + num5)/5
 *      + Hiển thị kết quả
 * B3: gắn sự kiện onclick.
 *          
 * 
 * output: tb
 */

//! Lời giải

var num1ELE = document.getElementById("inputNum1");
var num2ELE = document.getElementById("inputNum2");
var num3ELE = document.getElementById("inputNum3");
var num4ELE = document.getElementById("inputNum4");
var num5ELE = document.getElementById("inputNum5");
var tb = 0;


function tinhTrungBinh() {

    var num1 = num1ELE.value;
    var num2 = num2ELE.value;
    var num3 = num3ELE.value;
    var num4 = num4ELE.value;
    var num5 = num5ELE.value;

    tb = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5))/5;

    // console.log("số thực trung bình" +tb);

    document.getElementById("trungBinh").innerHTML = "Trung bình: " + tb;

    
}