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
UIac.addEventListener('click', clickAllClear);
UIopp.addEventListener('click', clickOpp);
UIperc.addEventListener('click', clickPerc);
UIdiv.addEventListener('click', () => clickOp('/', UIdiv));
UImult.addEventListener('click', () => clickOp('*', UImult));
UIsub.addEventListener('click',  () => clickOp('-', UIsub));
UIadd.addEventListener('click',  () => clickOp('+', UIadd));
UIequal.addEventListener('click', clickEqual);
UIone.addEventListener('click', () => clickNum(1, UIone));
UItwo.addEventListener('click', () => clickNum(2, UItwo));
UIthree.addEventListener('click', () => clickNum(3, UIthree));
UIfour.addEventListener('click', () => clickNum(4, UIfour));
UIfive.addEventListener('click', () => clickNum(5, UIfive));
UIsix.addEventListener('click', () => clickNum(6, UIsix));
UIseven.addEventListener('click', () => clickNum(7, UIseven));
UIeight.addEventListener('click', () => clickNum(8, UIeight));
UInine.addEventListener('click', () => clickNum(9, UInine));
UIzero.addEventListener('click', () => clickNum(0, UIzero));
UIdec.addEventListener('click', () => clickNum('.', UIdec));

// Keydown Event Listeners
document.onkeydown = e => {
    // All Clear
    if(e.key === 'Escape') clickAllClear();
    // Percentage
    if(e.key === '%') clickPerc();
    // Divide
    if(e.key === '/') clickOp('/', UIdiv);
    // Multiply
    if(e.key === '*' || e.key === 'x' || e.key === 'X') clickOp('*', UImult);
    // Subtract
    if(e.key === '-') clickOp('-', UIsub);
    // Add
    if(e.key === '+')  clickOp('+', UIadd);
    // Equal
    if(e.key === '=' || e.key === 'Enter')clickEqual();
    // One
    if(e.key === '1') clickNum(1, UIone);
    // Two
    if(e.key === '2') clickNum(2, UItwo);
    // Three
    if(e.key === '3') clickNum(3, UIthree);
    // Four
    if(e.key === '4') clickNum(4, UIfour);
    // Five
    if(e.key === '5') clickNum(5, UIfive);
    // Six
    if(e.key === '6') clickNum(6, UIsix);
    // Seven
    if(e.key === '7') clickNum(7, UIseven);
    // Eight
    if(e.key === '8') clickNum(8, UIeight);
    // Nine
    if(e.key === '9') clickNum(9, UInine);
    // Zero
    if(e.key === '0') clickNum(0, UIzero);
    // Decimal
    if(e.key === '.') clickNum('.', UIdec);
};

// Math Variables
let numOne = 0;
let numTwo = 0;
let operand = '';
let recentOp = false;

// Updates display
function updateDisplay(display = numOne){
    // If the number is too big to display, it displays 'TOO BIG' then clears all variables after 2 seconds
    if(display.toString().length > 7){
        UIdisplay.textContent = 'TOO BIG';
        setTimeout(clickAllClear, 2000);
    } else {
        UIdisplay.textContent = display;
    }
}

// Adds and removes a highlight class for 0.15 second to a button selected by a key or the mouse
function highlightButton(ui, className){
    ui.classList.add(className);
    setTimeout(() => ui.classList.remove(className), 150);
}

// Clears all variables and updates the display
function clickAllClear(){
    highlightButton(UIac, 'light-top-op');
    numOne = 0;
    numTwo = 0;
    operand = '';
    recentOp = false;
    updateDisplay(numOne);
}

// Gives whatever is in the display the complete opposite value
function clickOpp(){
    highlightButton(UIopp, 'light-top-op');
    if(operand == ''){
        numOne = numOne * -1;
        updateDisplay(numOne);
    }
    else if(operand != ''){
        numTwo = numTwo * -1;
        updateDisplay(numTwo);
    }
}

// Turns the display number into a percentage/decimal by diving by 100
function clickPerc(){
    highlightButton(UIperc, 'light-top-op');
    if(operand == ''){
        numOne = numOne / 100;
        updateDisplay(numOne);
    }
    else if(operand != ''){
        numTwo = numTwo / 100;
        updateDisplay(numTwo);
    }
}

// Changes the operand to /, *, -, or + and updates the display with it; if the operand variables already has a value, then it calls solveMath() first, then updates the operand
function clickOp(op, ui){
    highlightButton(ui, 'light-side-op');
    checkIfOperandIsUsed();
    operand = op;
    recentOp = false;
    updateDisplay(operand);
}

// Highlights the equal button and calls the solveMath() function
function clickEqual(){
    highlightButton(UIequal, 'light-side-op');
    solveMath();
}

// When a number is clicked, this changes the color of the number's UI element and takes care of checking how to enter it
function clickNum(num, ui){
    highlightButton(ui, 'light-num');
    if(recentOp === true){
        if(operand == '') numOne = 0;
        else if(operand == '') numTwo = 0;
        recentOp = false;
        operand = '';
    }
    if(operand == '') setNum(num, numOne);
    else if(operand != '') setNum(num, numTwo);
}

// Returns the number after processing it
function setNum(num, numSelection){
    num = num.toString();
    numSelection = numSelection.toString();
    if(num == '.' && numSelection.includes('.') == true) num = numSelection;
    else if(numSelection == '0' && num != '.') num = num;
    else num = numSelection + num;
    if(operand == '') numOne = num;
    else if(operand != '') numTwo = num; 
    updateDisplay(num);
}

// Allows to keep adding, just adding results onto the first display variable
function checkIfOperandIsUsed(){
    if(operand != ''){
        solveMath();
    }
}

// Solves a problem using the two nums and the operand
function solveMath(){
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    if(operand == '/') numOne = numOne / numTwo;
    else if(operand == '*') numOne = numOne * numTwo;
    else if(operand == '-') numOne = numOne - numTwo;
    else if(operand == '+') numOne = numOne + numTwo;
    else return;
    if(numOne.toString().length > 7){
        let int = Math.trunc(numOne).toString();
        numOne = numOne.toFixed(6-int.length);
        numOne = Number(numOne);
    }
    recentOp = true;
    operand = '';
    numTwo = 0;

    updateDisplay(numOne);
}

// Logs variables for testing purposes
function logVariables(){
    console.log("NumOne: ", numOne);
    console.log("NumTwo: ", numTwo);
    console.log("Operand: ", operand);
    console.log("Recent Operation: ", recentOp);
    console.log("\n");
}