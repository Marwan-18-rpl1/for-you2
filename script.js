function playAnimation() {
    // Mengaktifkan animasi cahaya
    const lightContainer = document.querySelector('.lights');
    lightContainer.style.display = 'block';
    
    // Membuat cahaya berkedip
    for (let i = 0; i < 30; i++) {
        const light = document.createElement('div');
        light.classList.add('light');
        light.style.top = `${Math.random() * 100}vh`;
        light.style.left = `${Math.random() * 100}vw`;
        light.style.animationDuration = `${Math.random() * 2 + 1}s`;
        lightContainer.appendChild(light);
    }

    // Mengaktifkan animasi hati
    const heartContainer = document.querySelector('.hearts');
    heartContainer.style.display = 'block';

    // Membuat hati bergerak
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartContainer.appendChild(heart);

        // Hapus hati setelah animasi selesai
        setTimeout(() => heart.remove(), 5000);
    }
}
