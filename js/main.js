const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const GAP = 30;

let currentIndex = 2; // сразу показываем третий слайд (по центру)

function updateSliderPosition() {
  const slideWidth = slides[0].offsetWidth;
  const sliderWidth = document.querySelector('.slider').offsetWidth;
  
  const elementWidht = slideWidth + GAP;

  const startOfCurrentSlideOffset = currentIndex * elementWidht;
  const centerShift = (sliderWidth / 2) - (slideWidth / 2);

  const finalTransform = centerShift - startOfCurrentSlideOffset;

    
  slidesContainer.style.transform = `translateX(${finalTransform}px)`;
}

function updateDots() {
    const dotIndex = Math.min(Math.floor(currentIndex / 2), dots.length - 1);
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === dotIndex);
  });
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSliderPosition();
    updateDots();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
    updateDots();
  }
});

window.addEventListener('load', () => {
  updateSliderPosition();
  updateDots();
});
window.addEventListener('resize', updateSliderPosition);

