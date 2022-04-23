//burger

const burgerBtn = document.querySelector(".burger");
const nav = document.querySelector(".header-nav");
const menuItems = document.querySelectorAll('.header-link');
const bodyEl = document.body;

function closeMenu(event) {
    if (event.target.classList.contains('header-link')) {
        burgerBtn.classList.remove('--open')
        bodyEl.classList.remove('--close')
        nav.classList.remove('--open')
    }
    if (event.target.classList.contains('--open')) {
        burgerBtn.classList.remove('--open')
        bodyEl.classList.remove('--close')
        nav.classList.remove('--open')
    }
};
//Open/close
burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("--open");
    bodyEl.classList.toggle("--close");
    nav.classList.toggle("--open")
});

//Close at links
menuItems.forEach((el) => el.addEventListener('click', closeMenu))
nav.addEventListener('click', closeMenu);
