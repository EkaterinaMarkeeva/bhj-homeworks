const cartProducts = document.querySelector('.cart__products');
const products = Array.from(document.querySelectorAll('.product'));
const btnMinuses = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const btnPluses = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const productImages = Array.from(document.querySelectorAll('.product__image'));
const productQuantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));

for (let elem of btnMinuses) {
  elem.addEventListener('click', function() {
    elem.nextElementSibling.textContent = Number(elem.nextElementSibling.textContent) - 1;
    
    if (elem.nextElementSibling.textContent < 0) {
      elem.nextElementSibling.textContent = 0;
    }
  })
}

for (let elem of btnPluses) {
  elem.addEventListener('click', function() {
    elem.previousElementSibling.textContent = Number(elem.previousElementSibling.textContent) + 1;
  })
}

for (let i = 0; i < productAdd.length; i += 1) {
    productAdd[i].addEventListener('click', function() {
      if (Number(productQuantityValue[i].textContent) === 0) return;
      cartProducts.insertAdjacentHTML('beforeEnd', '<div class="cart__product"><img class="cart__product-image"><div class="cart__product-count"></div></div>');
      
      const cartsProduct = Array.from(document.querySelectorAll('.cart__product'));
      const cartProductImages = Array.from(document.querySelectorAll('.cart__product-image'));
      const cartProductCounts = Array.from(document.querySelectorAll('.cart__product-count'));
      const productInCard = cartsProduct.find((product) => product.getAttribute('data-id') === products[i].getAttribute('data-id'));

        if (productInCard) {
          productInCard.querySelector('.cart__product-count').textContent = Number(productInCard.textContent) + Number(productQuantityValue[i].textContent);
          cartsProduct[cartsProduct.length - 1].remove();
        } else {
        cartsProduct[cartsProduct.length - 1].dataset.id = products[i].getAttribute('data-id');
        cartProductImages[cartProductImages.length - 1].src = productImages[i].src;
        cartProductCounts[cartProductCounts.length - 1].textContent = productQuantityValue[i].textContent;
        }
    })
  }
 