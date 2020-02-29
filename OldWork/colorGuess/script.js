const button1 = document.getElementById('myButton1');
const button2 = document.getElementById('myButton2');
const button3 = document.getElementById('myButton3');
const button4 = document.getElementById('myButton4');
const button5 = document.getElementById('myButton5');
const button6 = document.getElementById('myButton6');
const button7 = document.getElementById('myButton7');
const button8 = document.getElementById('myButton8');
const button9 = document.getElementById('myButton9');
const playAgain = document.getElementById('playAgain');

var buttonObjects = [];

function setRandColors(Mybutton){
    var randCol1 = (Math.floor(Math.random() * 256));
    var randCol2 = (Math.floor(Math.random() * 256));
    var randCol3 = (Math.floor(Math.random() * 256));

    let buttonObject = {randCol1, randCol2, randCol3};

    Mybutton.style.backgroundColor = `rgb(${randCol1}, ${randCol2}, ${randCol3})`;

    buttonObjects.push(buttonObject);
}

var myButtons = [ button1, button2, button3, button4, button5, button6,button7, button8, button9 ];

function setArray(){
    for(i = 0; i < myButtons.length; i++){
        setRandColors(myButtons[i]);
    }
}
setArray();

var randomInt = (Math.floor(Math.random() * 9));
var guessObj = buttonObjects[randomInt];
var guess1 = guessObj.randCol1;
var guess2 = guessObj.randCol2;
var guess3 = guessObj.randCol3;



const answer = document.getElementById('answer');
answer.innerHTML = guess1 + ", " + guess2 + ", " + guess3;

const correct = document.getElementById('correct');

playAgain.addEventListener('click', () => {
    window.location.reload();
})

myButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (myButtons.indexOf(button) == randomInt) {
            correct.innerHTML = 'Correct!';
        }
        else {
            correct.innerHTML = 'Try Again';
            button.style.visibility = 'hidden';
        }
    })
});



