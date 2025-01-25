const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to update slider position
function updateSlider() {
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Next button click
nextBtn.addEventListener('click', () => {
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;  // Loop back to the first slide
    }
    updateSlider();
});

// Previous button click
prevBtn.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = totalSlides - 1;  // Loop to the last slide
    }
    updateSlider();
});

// Auto-slide feature
let autoSlide = setInterval(() => {
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    updateSlider();
}, 4000);

// Pause auto-slide on hover
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        if (slideIndex < totalSlides - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        updateSlider();
    }, 4000);
});
