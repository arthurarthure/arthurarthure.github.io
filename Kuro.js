document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('.Nav-bar');
    const burger = document.querySelector('.hamburger-btn');
    const dropdown = document.querySelector('.dropdown');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });
    }

    // MOBILE submenu click toggle
    dropdown.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle("open");
        }
    });
});
