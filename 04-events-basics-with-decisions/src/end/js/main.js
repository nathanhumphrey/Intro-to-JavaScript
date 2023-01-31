let counter = document.querySelector('.counter');

document.querySelector('.btn').addEventListener('click', function () {
    let sum = parseInt(counter.innerText) + 1;
    counter.innerText = sum;
});

document.querySelector('.link').addEventListener('click', function (evt) {
    if (confirm('Do you want to leave?')) {
        alert('Sorry to see you go.');
    } else {
        // stay on the page
        evt.preventDefault();
    }
});

document.querySelector('.form').addEventListener('submit', (evt) => {
    evt.preventDefault(); // never submit the form
});

document.querySelector('.colours').addEventListener('click', (evt) => {
    if (evt.target.parentElement.className == 'colours') {
        document.body.style = `background: ${evt.target.className}`;
    }
});