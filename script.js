document.getElementById("submitMessage").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput");
    const messageDisplay = document.getElementById("messageDisplay");
    
    if (messageInput.value.trim() === "") {
        alert("Pesan tidak boleh kosong!");
        return;
    }

    messageDisplay.innerHTML = <p><strong>Pesanmu:</strong> ${messageInput.value}</p>;
    messageInput.value = ""; // Kosongkan input setelah dikirim
});