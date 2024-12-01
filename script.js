// Data foto dan nama
const photoData = [
    { name: "Aul", src: "bocah1.jpg" },
    { name: "Pia", src: "marwin.jpg" },
    { name: "Tante", src: "bocah3.jpg" },
    { name: "Marwin", src: "bocah2.jpg" }
  ];
  
  // Elemen HTML
  const question = document.getElementById("question");
  const photoContainer = document.getElementById("photoContainer");
  const scoreDisplay = document.getElementById("score");
  const messageDisplay = document.getElementById("message");
  
  let score = 0;
  let correctAnswer = "";
  
  // Fungsi untuk menampilkan foto
  function displayPhotos() {
    // Kosongkan kontainer
    photoContainer.innerHTML = "";
  
    // Acak urutan foto
    const shuffledPhotos = [...photoData].sort(() => Math.random() - 0.5);
  
    // Pilih salah satu sebagai jawaban benar
    correctAnswer = shuffledPhotos[Math.floor(Math.random() * shuffledPhotos.length)].name;
    question.textContent = `Siapa di antara mereka adalah ${correctAnswer}?`;
  
    // Tambahkan foto ke kontainer
    shuffledPhotos.forEach((photo) => {
      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.name;
      img.className = "photo";
      img.addEventListener("click", () => handlePhotoClick(photo.name));
      photoContainer.appendChild(img);
    });
  }
  
  // Fungsi untuk menangani klik foto
  function handlePhotoClick(selectedName) {
    if (selectedName === correctAnswer) {
      score++;
      messageDisplay.textContent = "Benar! 🎉";
    } else {
      score--;
      messageDisplay.textContent = "Salah! 😢";
    }
    scoreDisplay.textContent = `Score: ${score}`;
    
    // Lanjutkan ke soal berikutnya setelah 1 detik
    setTimeout(() => {
      messageDisplay.textContent = "";
      displayPhotos();
    }, 1000);
  }
  
  // Inisialisasi game
  displayPhotos();
  