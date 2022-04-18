/**
 * input
 * numBer (số có 2 chữ số)
 * 
 * Các bước xử lý 
 * B1: Tìm thẻ = id
 * B2: Tạo Hàm
 *      + lấy giá trị từ form
 *      + lập công thức tính toán:
 *          ten(hàng chục) = numBer/10 => lấy phần nguyên floor(num/10)
 *          unit(hàng đơn vị) = numBer % 10 => lấy phần dư num % 10
 *          sum = ten + unit
 *      + Hiển thị kết quả
 * B3: gắn sự kiện onclick
 * 
 * output: sum
 */

//! Bài làm

var numBerELE = document.getElementById("inputNumBer");
var ten = 0;
var unit = 0;
var sum = 0;

function tinhTong2KySo() {

    var numBer = numBerELE.value;

    ten = Math.floor(numBer/10);
    unit = numBer % 10;
    sum = Number(ten) + Number(unit);

    document.getElementById("tong2KySo").innerHTML= "Số hàng chục: " + ten + "<br> Số hàng đơn vị: " + unit + "<br> Tổng 2 ký số: " + sum;
    
}

// btnClick.onclick = tinhTong2KySo;
