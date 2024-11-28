// Pilih elemen
const showPhotoButton = document.getElementById("showPhotoButton");
const photoContainer = document.getElementById("photoContainer");

// Array foto orang tercinta
const photos = [
    "bocah1.jpg", // Ganti dengan nama file foto Anda
    "bocah2.jpg", 
    "bocah3.jpg",

];

// Fungsi untuk menampilkan satu foto
function createPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const photoSrc = photos[randomIndex];

    // Membuat elemen foto
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");

    const img = document.createElement("img");
    img.src = photoSrc;
    img.alt = "Foto Orang Tercinta";

    // Atur posisi awal secara acak
    photoDiv.style.left = `${Math.random() * 80 + 10}%`;
    photoDiv.style.bottom = `-150px`; // Posisi awal di bawah layar

    // Tambahkan foto ke dalam container
    photoDiv.appendChild(img);
    photoContainer.appendChild(photoDiv);

    // Hapus foto setelah animasi selesai
    setTimeout(() => {
        photoDiv.remove();
    }, 5000);
}

// Fungsi untuk menampilkan tiga foto sekaligus
function showPhotos() {
    for (let i = 0; i < 3; i++) { // Tampilkan tiga foto
        createPhoto();
    }
}

// Event listener untuk tombol
showPhotoButton.addEventListener("click", showPhotos);
