export default function Slideshow(images = []) {
  const container = document.createElement('div');
  container.className = 'slideshow-container neon-border';

  if (images.length === 0) {
    container.style.display = 'none';
    return container;
  }

  images.forEach((src, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide fade';
    const img = document.createElement('img');
    img.src = src;
    slide.appendChild(img);
    container.appendChild(slide);
  });

  let slideIndex = 0;
  let autoSlide = setInterval(nextSlide, 3000); // 3 seconds

  function showSlide(index) {
    const slides = container.getElementsByClassName('slide');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
  }

  function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
  }

  // --- SWIPE CONTROLS ---
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) { // Swiped left
      nextSlide();
      resetInterval();
    }
    if (touchEndX > touchStartX + 50) { // Swiped right
      prevSlide();
      resetInterval();
    }
  }
  // --- END SWIPE CONTROLS ---

  showSlide(slideIndex); // Show first slide
  return container;
}
