//-------------------бургер------------------------//
const humb = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');
const hamRotate = document.querySelector('.hamRotate');

function openHumb() {
    nav.classList.add('active-nav');
    hamRotate.classList.add('active');
}

function closeHumb() {
    function closeNav() {
        nav.classList.remove('active-nav');
        nav.classList.remove("close-nav");
        humb.classList.remove('no-pointer');
    }
    humb.classList.add('no-pointer');
    nav.classList.add("close-nav");
    hamRotate.classList.remove('active');
    setTimeout(closeNav, 1000);
}


hamRotate.addEventListener('click', () => {
    if (hamRotate.classList.contains('active')) {
        closeHumb();

    } else {
        openHumb();
    }
})
window.addEventListener('resize', () => {
    if (hamRotate.classList.contains('active')) {
        closeHumb();

    }
});
//-------------------бургер------------------------//
//-------------------селект------------------------//

const selectSingle = document.querySelector('.form-body-select');
const selectSingle_title = selectSingle.querySelector('.form-body-select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.form-body-select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}


//-------------------селект------------------------//
//-------------------range------------------------//
const range = document.querySelector('input[name="rangeValue"]')
const rangeValue = document.querySelector('#rangeValue')
range.addEventListener("input", () => {
    rangeValue.innerHTML = range.value + ' %'
});
//-------------------range------------------------//