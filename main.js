const btnAside = document.querySelector(".btn-aside");
const menuLateral = document.querySelector(".menu-lateral");

btnAside.addEventListener('click', () => {
    menuLateral.style = "left: 0;";
    btnAside.classList.add('change-position');
});
