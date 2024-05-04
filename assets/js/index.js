// recuperation du boutton menu
let menuButton = document.getElementById('menuButton');
// recuoeration du boutton close
let closeButton = document.getElementById('closeButton');
// recuperation du menu deroulant
let menu = document.querySelector('.navLinks');


menuButton.addEventListener('click', () => {
    menu.classList.toggle('mobile-menu')
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('mobile-menu')
});