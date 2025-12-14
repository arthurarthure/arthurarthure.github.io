document.addEventListener("DOMContentLoaded", () => { 
    // Mobile nav
    const nav = document.querySelector('.Nav-bar');
    const burger = document.querySelector('.hamburger-btn');
    const dropdown = document.querySelector('.dropdown');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
        });
    }

    if (dropdown) {
        dropdown.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle("open");
            }
        });
    }

    // Horizontal scroll buttons
    const container = document.querySelector('.window-3-inner');
    const btnLeft = document.querySelector('.scroll-btn.left');
    const btnRight = document.querySelector('.scroll-btn.right');

    if (container && btnLeft && btnRight) {
        btnLeft.addEventListener('click', () => {
            container.scrollBy({ left: -200, behavior: 'smooth' });
        });

        btnRight.addEventListener('click', () => {
            container.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }
});