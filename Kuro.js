const hamburger = document.querySelector('.hamburger-btn'); 
const navBar = document.querySelector('.Nav-bar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('mobile-open');
});