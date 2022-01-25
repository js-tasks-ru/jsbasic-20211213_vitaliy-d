import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.elem = createElement(`
<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
        <span class="card__price">€<!--значение product.price--></span>
    </div>
    <div class="card__body">
        <div class="card__title"><!--значение product.name--></div>
        <button type="button" class="card__button">
            <img src="/../assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>
`);

    this.elem.querySelector('.card__price').innerHTML = `€${product.price.toFixed(2)}`;
    this.elem.querySelector('.card__title').innerHTML = `${product.name}`;

    let imageCard = this.elem.querySelector('.card__image');
    imageCard.src = `/../assets/images/products/${product.image}`;

    let button = this.elem.querySelector('.card__button');

   button.addEventListener("product-add", function(event) {
     console.log("SHOW");
   });

   button.addEventListener("click", (event) => {

     let customEvent = new CustomEvent("product-add", {
       detail: product.id,
       bubbles: true
     });
     this.elem.dispatchEvent(customEvent);
   });
  }
}
