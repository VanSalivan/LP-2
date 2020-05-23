let userIcon = document.querySelector('.user-header__icon');
userIcon.addEventListener('click', function (e) {
    let userMenu = document.querySelector('.user-header__menu');
    userMenu.classList.toggle("_active");
})