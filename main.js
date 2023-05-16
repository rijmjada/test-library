const btnAside = document.querySelector(".btn-aside");
const menuLateral = document.querySelector(".menu-lateral");

btnAside.addEventListener('click', () => {
    btnAside.classList.toggle("change-position-btn");
    btnAside.classList.toggle("animation-btn");

    menuLateral.classList.toggle("change-position-menu");
});
