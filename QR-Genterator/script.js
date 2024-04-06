let textbox = document.getElementById("textbox")

let url ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let btn = document.getElementById("btn")
let img = document.getElementById("img1")
function generate(){
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textbox.value;
}
