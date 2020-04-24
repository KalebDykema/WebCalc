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
UIdiv.addEventListener('click', clickDiv);
UImult.addEventListener('click', clickMult);
UIsub.addEventListener('click', clickSub);
UIadd.addEventListener('click', clickAdd);
UIequal.addEventListener('click', clickEqual);
UIone.addEventListener('click', clickOne);
// UItwo.addEventListener('click', clickTwo);
// UIthree.addEventListener('click', clickThree);
// UIfour.addEventListener('click', clickFour);
// UIfive.addEventListener('click', clickFive);
// UIsix.addEventListener('click', clickSix);
// UIseven.addEventListener('click', clickSeven);
// UIeight.addEventListener('click', clickEight);
// UInine.addEventListener('click', clickNine);
// UIzero.addEventListener('click', clickZero);
// UIDec.addEventListener('click', clickDec);

let display = 0;
let displayTwo = 0;
let operand = '';

// Updates display
function updateDisplay(disp = display){
    if(disp.toString().length > 7){
        UIdisplay.textContent = 'TOO BIG';
        setTimeout(() => { 
            disp = 0;
            UIdisplay.textContent = disp; 
        }, 2000);
    } else UIdisplay.textContent = disp;
}



// Clears the display
function allClear(){
    display = 0;
    displayTwo = 0;
    operand = '';
    updateDisplay(display);
}

// Makes the value opposite of what it is now; positive to negative or vice versa
function makeOpp(){
    if(Math.sign(display) == 1){
        display = display * -1;
    }
    else if(Math.sign(display) == -1){
        display = Math.abs(display);
    }
    updateDisplay(display);
}

// Turns it into a percentage/decimal
function makePerc(){
    display = display / 100;
    updateDisplay(display);
}


// Selects the division operand 
function clickDiv(){
    operand = '/';
    updateDisplay(operand);
}

// Selects the muliplicaiton operand 
function clickMult(){
    operand = '*';
    updateDisplay(operand);
}

// Selects the subtraction operand 
function clickSub(){
    operand = '-';
    updateDisplay(operand);
}

// Selects the addition operand 
function clickAdd(){
    operand = '+';
    updateDisplay(operand);
}

// Adds the results together
function clickEqual(){
    if(display + displayTwo == 0) display = 0;
    
    if(operand == '/') display = display / displayTwo;
    
    if(operand == '*') display = display * displayTwo;

    if(operand == '-') display = display - displayTwo;
    
    if(operand == '+') display = display + displayTwo;

    operand = '';
    displayTwo = 0;
    updateDisplay(display);
}


// Adds a number to a chosen argument
function addNum(disp, )

// Adds 1 to display var
function clickOne(){
    if(operand == '')
    display = display.toString() + '1';
    display = Number(display);
    console.log(display);

    updateDisplay(display);
}

updateDisplay();