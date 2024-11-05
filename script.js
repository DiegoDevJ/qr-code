function generateQRCode() {
    const qrCodeContainer = document.getElementById("qrCode");
    const qrInput = document.getElementById("qrInput").value;
  
    // Limpa o QR Code anterior
    qrCodeContainer.innerHTML = "";
  
    if (qrInput.trim() === "") {
      alert("Por favor, insira um texto ou URL.");
      return;
    }
  
    // Gera o QR Code
    new QRCode(qrCodeContainer, {
      text: qrInput,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  
    // Mostra o overlay
    document.getElementById("qrOverlay").style.display = "flex";
  }
  
  function closeQRCode() {
    // Esconde o overlay
    document.getElementById("qrOverlay").style.display = "none";
  }
  