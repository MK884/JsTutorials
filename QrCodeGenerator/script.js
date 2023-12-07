const wrapper = document.querySelector(".wrapper"),
QrBtn = wrapper.querySelector(".action button"),
QrImg = wrapper.querySelector(".qr-code img"),
QrInput = wrapper.querySelector(".action input");

let prevInput;
QrBtn.addEventListener("click", ()=>{
    let input = QrInput.value;
    if(!input || input === prevInput) return;
    prevInput = input;
    QrBtn.innerHTML = "Generating Qr Code...";
    QrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
    QrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        QrBtn.innerHTML = "Generate QR Code";
    })
})

QrInput.addEventListener("keyup", ()=>{
    if(!QrInput.value){
        wrapper.classList.remove("active");
        prevInput = "";
    }
})