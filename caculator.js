let view = document.getElementById("view")

function inputValue (value) {
    // hiển thị chuỗi phép tính trên ô input
    view.value += value;
}

function result() {
// thực hiện phép tính
    let result = eval(view.value);
// hiển thị kết quả ra màn hình
    view.value = result;
}

function reset () {
    view.value =""
}