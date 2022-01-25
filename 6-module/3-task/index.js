import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.elem = createElement(`
  <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/../assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/../assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner"></div>
  </div>
    `);

    let carouselInner = this.elem.querySelector('.carousel__inner');
    let buttonRight = this.elem.querySelector('.carousel__arrow_right');
    let buttonLeft = this.elem.querySelector('.carousel__arrow_left');
    let carouselWidth = 0;
    let i = 0;
    buttonLeft.style.display = 'none';

    let carouselSlides = slides.map(slide => {return `
        <div class="carousel__slide" data-id="${slide.id}">
            <img src="/../assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                    <img src="/../assets/images/icons/plus-icon.svg" alt="icon">
                </button>
            </div>
        </div>
    `}).join('');

    carouselInner.innerHTML += carouselSlides;

    buttonRight.onclick = function () {
      if (i < slides.length - 1) {
        carouselWidth -= carouselInner.offsetWidth;
        carouselInner.style.transform = `translateX(${carouselWidth}px)`;
        i++;
        i === slides.length - 1 ? buttonRight.style.display = 'none' : buttonLeft.style.display = '';
      }
    }

    buttonLeft.onclick = function () {
      console.log(buttonRight);
      if (i > 0) {
        carouselWidth += carouselInner.offsetWidth;
        carouselInner.style.transform = `translateX(${carouselWidth}px)`;
        i--;
        i === 0 ? buttonLeft.style.display = 'none' : buttonRight.style.display = '';
      }
    }

for (let i = 0; i < slides.length; i++){
  let button = this.elem.querySelectorAll('.carousel__button');
  console.log(slides[i].id);

  button[i].addEventListener("product-add", function(event) {
  });
  button[i].addEventListener("click", (event) => {
    let customEvent = new CustomEvent("product-add", {
      detail: slides[i].id,
      bubbles: true
    });
    console.log("SHOW");
    this.elem.dispatchEvent(customEvent);
  });
}

  }
}
