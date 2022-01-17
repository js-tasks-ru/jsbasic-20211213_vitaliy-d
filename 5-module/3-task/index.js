function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let carouselWidth, i = 0;

  buttonLeft.style.display = 'none';

  buttonRight.onclick = function () {
      if (i < 3) {
        carouselWidth -= carousel.offsetWidth;
        carousel.style.transform = `translateX(${carouselWidth}px)`;
        i++;
        i === 3 ? buttonRight.style.display = 'none' : buttonLeft.style.display = '';
      }
  }

  buttonLeft.onclick = function () {
      if (i > 0) {
        carouselWidth += carousel.offsetWidth;
        carousel.style.transform = `translateX(${carouselWidth}px)`;
        i--;
        i === 0 ? buttonLeft.style.display = 'none' : buttonRight.style.display = '';
      }
  }
}
