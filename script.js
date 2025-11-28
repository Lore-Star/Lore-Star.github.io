(() => {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const dots = Array.from(carousel.querySelectorAll('.carousel-dots button'));
  let index = 0;
  let width = carousel.clientWidth;
  function update() {
    width = carousel.clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }
  function goTo(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    update();
  }
  next.addEventListener('click', () => goTo(index + 1));
  prev.addEventListener('click', () => goTo(index - 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  window.addEventListener('resize', update);
  let timer = setInterval(() => goTo(index + 1), 4000);
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', () => {
    timer = setInterval(() => goTo(index + 1), 4000);
  });
  update();
})();
