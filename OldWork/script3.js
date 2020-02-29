
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


//Show Modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

//Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide modal on window click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false );

//Direct to play guess color game
const playGuess = document.getElementById('playGame1');
playGuess.addEventListener('click', () => {
    location.href = './colorGuess/index2.html';
})

//Show Code for J Game
const showCode1 = document.getElementById('showCode1');
showCode1.addEventListener('click', () => {
    window.open('https://github.com/skotraba/GuessColor');
})

// document.querySelector('.projects').scrollIntoView({
//     behavior: 'smooth'
// });