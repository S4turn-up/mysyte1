function createStars() {
    const starrySky = document.getElementById('starry-sky');

    for (let i = 0; i < 50; i++) { // Укажите количество звёзд
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw'; // Случайное положение по горизонтали
        star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Разное время падения
        star.style.animationDelay = Math.random() * 5 + 's'; // Разное время задержки
        starrySky.appendChild(star);
    }
}

createStars();
