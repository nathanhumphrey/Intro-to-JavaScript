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
        if (evt.target.className == 'product__thumbnail') {
            updateProductImage(evt.target.src);
        }
    });

    let thumbnails = document.querySelectorAll('.product__thumbnail');
    let currentThumbnail = 0; // first image is shown on page load

    document.addEventListener('keydown', (evt) => {
        switch (evt.key) {
            case 'ArrowLeft':
                currentThumbnail -= 1;
                // currentThumbnail = currentThumbnail - 1;
                updateProductImage(thumbnails[currentThumbnail].src);
                break;
            case 'ArrowRight':
                currentThumbnail += 1;
                // currentThumbnail = currentThumbnail + 1;
                updateProductImage(thumbnails[currentThumbnail].src);
                break;
            default:
                console.log(`Key down: ${evt.key}`);
                break;
        }
        // if (evt.key == 'ArrowLeft') {
        //     currentThumbnail -= 1;
        //     // currentThumbnail = currentThumbnail - 1;
        //     updateProductImage(thumbnails[currentThumbnail].src);
        // } else if (evt.key == 'ArrowRight') {
        //     currentThumbnail += 1;
        //     // currentThumbnail = currentThumbnail + 1;
        //     updateProductImage(thumbnails[currentThumbnail].src);
        // }
    });
})();