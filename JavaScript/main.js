// DOM Selections
const UIdisplay = document.querySelector('#display');
const UIac = document.querySelector('#ac');
const UIopp = document.querySelector('#opp');
const UIperc = document.querySelector('#perc');
const UIdiv = document.querySelector('#div');
const UImult = document.querySelector('#mult');
const UIsub = document.querySelector('#sub');
const UIadd = document.querySelector('#add');
const UIequal = document.querySelector('#equal');
const UIone = document.querySelector('#one');
const UItwo = document.querySelector('#two');
const UIthree = document.querySelector('#three');
const UIfour = document.querySelector('#four');
const UIfive = document.querySelector('#five');
const UIsix = document.querySelector('#six');
const UIseven = document.querySelector('#seven');
const UIeight = document.querySelector('#eight');
const UInine = document.querySelector('#nine');
const UIzero = document.querySelector('#zero');
const UIdec = document.querySelector('#dec');

// Event Listeners
UIac.addEventListener('click', allClear);
UIopp.addEventListener('click', makeOpp);
UIperc.addEventListener('click', makePerc);
UIdiv.addEventListener('click', div);
UImult.addEventListener('click', mult);
UIsub.addEventListener('click', sub);
UIadd.addEventListener('click', add);
UIequal.addEventListener('click', equal);
UIone.addEventListener('click', addOne);
UItwo.addEventListener('click', addTwo);
UIthree.addEventListener('click', addThree);
UIfour.addEventListener('click', addFour);
UIfive.addEventListener('click', addFive);
UIsix.addEventListener('click', addSix);
UIseven.addEventListener('click', addSeven);
UIeight.addEventListener('click', addEight);
UInine.addEventListener('click', addNine);
UIzero.addEventListener('click', addZero);
UIDec.addEventListener('click', addDec);

let display;

// Clears the display
function allClear(){
    display = 0;
}

// Makes the value opposite of what it is now; positive to negative or vice versa
function makeOpp(){
    if(Math.sign(display) == 1){
        
    }
}