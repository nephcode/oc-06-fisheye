// ecrire un nouveau code 

const slider = document.querySelector('#media .lightbox-slider');
const slides = Array.from(slider.children);
const prevButton = document.querySelector('#media .lightbox-prev');
const nextButton = document.querySelector('#media .lightbox-next');
let currentSlide = 0;

// Set up the slider
function setupSlider() {
   slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
   });
}

// Slide to the next image
function slideNext() {
   const nextSlide = slides[currentSlide + 1];
   if (nextSlide) {
      const amountToMove = nextSlide.style.left;
      slider.style.transform = `translateX(-${amountToMove})`;
      currentSlide++;
   }
}

// Slide to the previous image
function slidePrev() {
   const prevSlide = slides[currentSlide - 1];
   if (prevSlide) {
      const amountToMove = prevSlide.style.left;
      slider.style.transform = `translateX(-${amountToMove})`;
      currentSlide--;
   }
}

// Event listeners for previous and next buttons
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

// Set up the slider on page load
window.addEventListener('load', setupSlider);