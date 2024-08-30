const inputEl = document.getElementById("input-value");
const sizeEl = document.getElementById("size");
const qrOutEl = document.getElementById("qrCodeScreen");

const btnQrCode = document.querySelector(".btn-generator");
const saveQrBtn = document.querySelector(".btn-save");

// Function to generate QR code
const qrCodeGenerator = function (e) {
    e.preventDefault();

    const url = inputEl.value;
    const size = sizeEl.value;

    if (url === "") {
        alert("Please Enter URL or Text!");
    } else {
        qrCodeDisplay(url, size);
        qrOutEl.style.display = "block";
    }
};

// Function to display QR code
const qrCodeDisplay = function (url, size) {
    qrOutEl.innerHTML = ""; // Clear the existing QR code
    new QRCode(qrOutEl, {
        text: url,
        width: parseInt(size),
        height: parseInt(size),
    });
};

// Function to save the QR code
saveQrBtn.addEventListener('click', () => {
    const img = document.querySelector("#qrCodeScreen img");

    if (img !== null) {
        const imgAttr = img.getAttribute('src');
        saveQrBtn.setAttribute("href", imgAttr);
        saveQrBtn.setAttribute("download", "qr_code.png");  // Ensure download attribute is set
    } else {
        const canvas = document.querySelector('canvas');
        if (canvas !== null) {
            saveQrBtn.setAttribute("href", canvas.toDataURL());
            saveQrBtn.setAttribute("download", "qr_code.png");  // Ensure download attribute is set
        }
    }
});


// Generate event on button to create QR code
btnQrCode.addEventListener("click", qrCodeGenerator);
