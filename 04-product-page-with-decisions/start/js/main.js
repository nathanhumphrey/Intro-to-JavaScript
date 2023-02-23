(function () {
    function addToCart(numItems) {
        let cartCount = document.querySelector('.js-cart-count');
        let cartCountValue = cartCount.innerText.replace('(', '').replace(')', '');
        let cartCountNumber = parseInt(cartCountValue);

        cartCount.innerText = `(${numItems + cartCountNumber})`;
    }

    document.querySelector('.js-quantity-form').addEventListener('submit', (evt) => {
        evt.preventDefault();
        let quantity = parseInt(evt.target.elements.quantity.value);
        addToCart(quantity);
    });

    function updateProductImage(newSrc) {
        document.querySelector('.product__image').src = newSrc;
    }

    document.querySelector('.product__thumbnails').addEventListener('click', (evt) => {
        evt.preventDefault();
        updateProductImage(evt.target.src);
    });
})();