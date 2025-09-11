window.addEventListener('scroll', () => {
  const parallax = document.querySelector('.parallax-js');
  if (parallax) {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.8 + "px";
  }
});
