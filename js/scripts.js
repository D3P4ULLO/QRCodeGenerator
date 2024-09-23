// Seleção dos Elementos
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCOdeImg = document.querySelector("#qr-code img");

// Eventos

// Gerar QR Code
function generateQrCode(){
 const qrCodeInputValue = qrCodeInput.value;

 if (!qrCodeInputValue) return;

 qrCodeBtn.innerText = "Gerando de QR Code...";

 qrCOdeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

qrCOdeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "QR Code Criado !";
});
}

qrCodeBtn.addEventListener("click", () => {
generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});

// Limpar Area do QR code
qrCodeInput.addEventListener("keyup", () => {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
});