
document.addEventListener("DOMContentLoaded", function () {
    var burgerBtn = document.getElementById("burger-btn");
    var navbarMenu = document.getElementById("navbarNavAltMarkup");

    burgerBtn.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });

    // Добавляем обработчик события для закрытия меню при клике на ссылку в меню
    var navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbarMenu.classList.remove('show');
        });
    });

    // Добавляем обработчик события для закрытия меню при клике вне меню
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar-collapse')) {
            navbarMenu.classList.remove('show');
        }
    });
});
