document.addEventListener('DOMContentLoaded', () => {
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
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
    });

    // Previous button click
    prevBtn.addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Auto-slide feature
    let autoSlide = setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
    }, 4000);

    // Pause auto-slide on hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(() => {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlider();
        }, 4000);
    });

    // Add button delay to avoid spamming
    let isSliding = false;
    function throttleSlideChange(callback) {
        if (!isSliding) {
            isSliding = true;
            setTimeout(() => {
                callback();
                isSliding = false;
            }, 500); // 0.5-second delay
        }
    }

    // Throttled next button click
    nextBtn.addEventListener('click', () => throttleSlideChange(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlider();
    }));

    // Throttled previous button click
    prevBtn.addEventListener('click', () => throttleSlideChange(() => {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }));
});
