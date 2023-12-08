
let currentSlide = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Display the desired slide
  slides[n].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + 3) % 3;
  showSlide(currentSlide);
}

// Display the first slide on page load
showSlide(currentSlide);

console.log('1. Checking validation of pages: +16\n2. The layout matches the design: +42\n3. CSS Requirements: +10\n4. Interactivity: 30  ')
