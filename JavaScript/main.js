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

// Button Event Listeners
UIac.addEventListener('click', allClear);
UIopp.addEventListener('click', makeOpp);
UIperc.addEventListener('click', makePerc);
UIdiv.addEventListener('click', clickDiv);
UImult.addEventListener('click', clickMult);
UIsub.addEventListener('click', clickSub);
UIadd.addEventListener('click', clickAdd);
UIequal.addEventListener('click', clickEqual);
UIone.addEventListener('click', () => addNum(1));
UItwo.addEventListener('click', () => addNum(2));
UIthree.addEventListener('click', () => addNum(3));
UIfour.addEventListener('click', () => addNum(4));
UIfive.addEventListener('click', () => addNum(5));
UIsix.addEventListener('click', () => addNum(6));
UIseven.addEventListener('click', () => addNum(7));
UIeight.addEventListener('click', () => addNum(8));
UInine.addEventListener('click', () => addNum(9));
UIzero.addEventListener('click', () => addNum(0));
// UIDec.addEventListener('click', () => addNum('.'));

// Keyboard Event Listeners
document.onkeydown = e => {
    // Percentage
    if(e.key === '%'){
        makePerc();
    }
    // All Clear
    if(e.key === 'Escape'){
        allClear();
    }
    
    // Divide
    if(e.key === '/'){
        clickDiv();
    }
    // Multiply
    if(e.key === '*'){
        clickMult();
    }
    // Subtract
    if(e.key === '-'){
        clickSub();
    }
    // Add
    if(e.key === '+'){
        clickAdd();
    }
    // Subtract
    if(e.key === '-'){
        clickSub();
    }
    // Equal
    if(e.key === '=' || e.key === 'Enter'){
        clickEqual();
    }

    // One
    if(e.key === '1'){
        addNum(1);
    }
    // Two
    if(e.key === '2'){
        addNum(2);
    }
    // Three
    if(e.key === '3'){
        addNum(3);
    }
    // Four
    if(e.key === '4'){
        addNum(4);
    }
    // Five
    if(e.key === '5'){
        addNum(5);
    }
    // Six
    if(e.key === '6'){
        addNum(6);
    }
    // Seven
    if(e.key === '7'){
        addNum(7);
    }
    // Eight
    if(e.key === '8'){
        addNum(8);
    }
    // Nine
    if(e.key === '9'){
        addNum(9);
    }
    // Zero
    if(e.key === '0'){
        addNum(0);
    }
    // Decimal
    // if(e.key === '.'){
    //     addNum('.');
    // }
};

// Math Variables
let display = 0;
let displayTwo = 0;
let operand = '';

// Updates display
function updateDisplay(disp = display){
    // Avoids the number going outside of the display, just resets everything
    if(disp.toString().length > 7){
        UIdisplay.textContent = 'TOO BIG';
        setTimeout(() => { 
            display = 0;
            displayTwo = 0;
            operand = '';
            UIdisplay.textContent = display;
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


// Adds a number to a display variable
function addNum(num){
   // First display variable
    if(operand == ''){
        if(display == 0){
            display = num;
        } else {
            display = display.toString() + num.toString();
            display = Number(display);
        }
        updateDisplay(display);
    }
    // Second display variable
    else if(operand != ''){
        if(displayTwo == 0){
            displayTwo = num;
        } else {
            displayTwo = displayTwo.toString() + num.toString();
            displayTwo = Number(displayTwo);
        }
        updateDisplay(displayTwo);
    }
}

updateDisplay();