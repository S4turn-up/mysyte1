let currentIndex = 0;
const slides = document.querySelectorAll('.slider-images .slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;
    document.querySelector('.slider-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;
    showSlide(currentIndex);
}

// Инициализация слайдера
showSlide(currentIndex);
