(function () {
    function addToCart(numItems) {
        let cartCount = document.querySelector('.js-cart-count');
        let cartCountValue = cartCount.innerText.replace('(', '').replace(')', '');
        let cartCountNumber = parseInt(cartCountValue);

        cartCount.innerText = `(${numItems + cartCountNumber})`;
    }

    document.querySelector('.js-quantity-form').addEventListener('submit', (evt) => {
        let quantityInput = evt.target.elements.quantity;
        let errorP = document.querySelector('.error');

        evt.preventDefault();

        let quantity = Number(quantityInput.value);

        if (isValidQuantity(quantity)) {
            addToCart(quantity);
            // set the quantity back to zero
            quantityInput.value = 0;
            // or could just reset the whole form
            // evt.target.reset();
            quantityInput.classList.remove('form__input--error');
            errorP.innerText = '';
        } else {
            quantityInput.classList.add('form__input--error');
            errorP.innerText = 'Quantity must be a positive whole number';
            quantityInput.focus();
            quantityInput.select();
        }


    });

    // determine if the quantity value is "good"
    // must be a positive integer
    function isValidQuantity(value) {
        let isValid = true;

        if (isNaN(value) || value <= 0 || parseInt(value) != value) {
            isValid = false;
        }

        return isValid;
    }

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
                if (currentThumbnail < 0) {
                    currentThumbnail = thumbnails.length - 1;
                }
                updateProductImage(thumbnails[currentThumbnail].src);
                break;
            case 'ArrowRight':
                currentThumbnail += 1;
                if (currentThumbnail == thumbnails.length) {
                    currentThumbnail = 0;
                }
                updateProductImage(thumbnails[currentThumbnail].src);
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