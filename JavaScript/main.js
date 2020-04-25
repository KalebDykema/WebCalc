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
UIac.addEventListener('tap', allClear);
UIopp.addEventListener('tap', makeOpp);
UIperc.addEventListener('tap', makePerc);
UIdiv.addEventListener('tap', clickDiv);
UImult.addEventListener('tap', clickMult);
UIsub.addEventListener('tap', clickSub);
UIadd.addEventListener('tap', clickAdd);
UIequal.addEventListener('tap', clickEqual);
UIone.addEventListener('tap', () => addNum(1));
UItwo.addEventListener('tap', () => addNum(2));
UIthree.addEventListener('tap', () => addNum(3));
UIfour.addEventListener('tap', () => addNum(4));
UIfive.addEventListener('tap', () => addNum(5));
UIsix.addEventListener('tap', () => addNum(6));
UIseven.addEventListener('tap', () => addNum(7));
UIeight.addEventListener('tap', () => addNum(8));
UInine.addEventListener('tap', () => addNum(9));
UIzero.addEventListener('tap', () => addNum(0));
UIdec.addEventListener('tap', () => addNum('.'));

// Keydown Event Listeners
document.onkeydown = e => {
    // All Clear
    if(e.key === 'Escape'){
        allClear();
        UIac.classList += ' light-top-op';
    }
    // Percentage
    if(e.key === '%'){
        makePerc();
        UIperc.classList += ' light-top-op';
    }
    // Divide
    if(e.key === '/'){
        clickDiv();
        UIdiv.classList += ' light-side-op';
    }
    // Multiply
    if(e.key === '*' || e.key === 'x' || e.key === 'X'){
        clickMult();
        UImult.classList += ' light-side-op';
    }
    // Subtract
    if(e.key === '-'){
        clickSub();
        UIsub.classList += ' light-side-op';
    }
    // Add
    if(e.key === '+'){
        clickAdd();
        UIadd.classList += ' light-side-op';
    }
    // Subtract
    if(e.key === '-'){
        clickSub();
        UIsub.classList += ' light-side-op';
    }
    // Equal
    if(e.key === '=' || e.key === 'Enter'){
        clickEqual();
        UIequal.classList += ' light-side-op';
    }

    // One
    if(e.key === '1'){
        addNum(1);
        UIone.classList += ' light-num';
    }
    // Two
    if(e.key === '2'){
        addNum(2);
        UItwo.classList += ' light-num';
    }
    // Three
    if(e.key === '3'){
        addNum(3);
        UIthree.classList += ' light-num';
    }
    // Four
    if(e.key === '4'){
        addNum(4);
        UIfour.classList += ' light-num';
    }
    // Five
    if(e.key === '5'){
        addNum(5);
        UIfive.classList += ' light-num';
    }
    // Six
    if(e.key === '6'){
        addNum(6);
        UIsix.classList += ' light-num';
    }
    // Seven
    if(e.key === '7'){
        addNum(7);
        UIseven.classList += ' light-num';
    }
    // Eight
    if(e.key === '8'){
        addNum(8);
        UIeight.classList += ' light-num';
    }
    // Nine
    if(e.key === '9'){
        addNum(9);
        UInine.classList += ' light-num';
    }
    // Zero
    if(e.key === '0'){
        addNum(0);
        UIzero.classList += ' light-num';
    }
    // Decimal
    if(e.key === '.'){
        // addNum('.');
        UIdec.classList += ' light-num';
    }
};

// Keyup Event Listeners; just to remove the light color classes
document.onkeyup = e => {
    // All Clear
    if(e.key === 'Escape'){
        UIac.classList.remove('light-top-op');
    }
    // Percentage
    if(e.key === '%'){
        UIperc.classList.remove('light-top-op');
    }
    // Divide
    if(e.key === '/'){
        UIdiv.classList.remove('light-side-op');
    }
    // Multiply
    if(e.key === '*' || e.key === 'x' || e.key === 'X'){
        UImult.classList.remove('light-side-op');
    }
    // Subtract
    if(e.key === '-'){
        UIsub.classList.remove('light-side-op');
    }
    // Add
    if(e.key === '+'){
        UIadd.classList.remove('light-side-op');
    }
    // Subtract
    if(e.key === '-'){
        UIsub.classList.remove('light-side-op');
    }
    // Equal
    if(e.key === '=' || e.key === 'Enter'){
        UIequal.classList.remove('light-side-op');
    }

    // One
    if(e.key === '1'){
        UIone.classList.remove('light-num');
    }
    // Two
    if(e.key === '2'){
        UItwo.classList.remove('light-num');
    }
    // Three
    if(e.key === '3'){
        UIthree.classList.remove('light-num');
    }
    // Four
    if(e.key === '4'){
        UIfour.classList.remove('light-num');
    }
    // Five
    if(e.key === '5'){
        UIfive.classList.remove('light-num');
    }
    // Six
    if(e.key === '6'){
        UIsix.classList.remove('light-num');
    }
    // Seven
    if(e.key === '7'){
        UIseven.classList.remove('light-num');
    }
    // Eight
    if(e.key === '8'){
        UIeight.classList.remove('light-num');
    }
    // Nine
    if(e.key === '9'){
        UInine.classList.remove('light-num');
    }
    // Zero
    if(e.key === '0'){
        UIzero.classList.remove('light-num');
    }
    // Decimal
    if(e.key === '.'){
        addNum('.');
        UIdec.classList.remove('light-num');
    }
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
    if(UIdisplay.textContent == display){
        display = display / 100;
        updateDisplay(display);
    }
    else if(UIdisplay.textContent == displayTwo){
        displayTwo = displayTwo / 100;
        updateDisplay(displayTwo);
    }
}


// Allows to keep adding, just adding results onto the first display variable
function checkIfOperandIsUsed(){
    if(operand != ''){
        solve();
    }
}

// Selects the division operand 
function clickDiv(){
    checkIfOperandIsUsed()
    operand = '/';
    updateDisplay(operand);
}

// Selects the muliplicaiton operand 
function clickMult(){
    checkIfOperandIsUsed()
    operand = '*';
    updateDisplay(operand);
}

// Selects the subtraction operand 
function clickSub(){
    checkIfOperandIsUsed()
    operand = '-';
    updateDisplay(operand);
}

// Selects the addition operand 
function clickAdd(){
    checkIfOperandIsUsed()
    operand = '+';
    updateDisplay(operand);
}

// Solves the problem and figures out how to based on the operand
function solve(){
    if(operand == '/') display = display / displayTwo;
    if(operand == '*') display = display * displayTwo;
    if(operand == '-') display = display - displayTwo;
    if(operand == '+') display = display + displayTwo;
    displayTwo = 0;
    updateDisplay(display);
}

// Adds the results together
function clickEqual(){
    if(display + displayTwo == 0) display = 0;
    solve();
    operand = '';
    display = 0;
}


// Adds a number to a display variable
function addNum(num){
   // First display variable
    if(operand == ''){ 
        // Checks for deciaml
        if(num == '.'){
            display = display.toString() + num.toString();
        }
        // Just keeps it as is if it's already 0 and the num is 0
        else if(display === 0){
            display = num;
        }
        // Changes the number properly
        else {
            display = display.toString() + num.toString();
            display = Number(display);
        }
        updateDisplay(display);
    }
    // Second display variable
    else if(operand != ''){
        // Checks for deciaml
        if(num == '.'){
            if(displayTwo == 0) return;
            else displayTwo = displayTwo.toString() + num.toString();
        }
        // Just keeps it as is if it's already 0 and the num is 0
        else if(displayTwo === 0){
            displayTwo = num;
        // Changes the number properly
        } else {
            displayTwo = displayTwo.toString() + num.toString();
            displayTwo = Number(displayTwo);
        }
        updateDisplay(displayTwo);
    }
}

updateDisplay();