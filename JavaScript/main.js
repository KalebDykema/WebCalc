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
UIdiv.addEventListener('click', clickDiv);
UImult.addEventListener('click', clickMult);
UIsub.addEventListener('click', clickSub);
UIadd.addEventListener('click', clickAdd);
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
    if(e.key === '/') clickDiv();
    // Multiply
    if(e.key === '*' || e.key === 'x' || e.key === 'X') clickMult();
    // Subtract
    if(e.key === '-') clickSub();
    // Add
    if(e.key === '+')  clickAdd();
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
let dispNum = 0;
let operand = '/';
let recentOp = false;

// Updates display
function updateDisplay(disp = numOne){
    // Avoids the number going outside of the display, just resets everything
    if(disp.toString().length > 7){
        UIdisplay.textContent = 'TOO BIG';
        setTimeout(clickAllClear, 2000);
    } else UIdisplay.textContent = disp;

    logVariables();
}

updateDisplay();

// Adds and removes a temporary highlight class
function highlightButton(ui, className){
    ui.classList.add(className);
    setTimeout(() => ui.classList.remove(className), 150);
}

// Clears the display
function clickAllClear(){
    highlightButton(UIac, 'light-top-op');
    numOne = 0;
    numTwo = 0;
    operand = '';
    updateDisplay(numOne);
}
// Makes the value opposite of what it is now; positive to negative or vice versa
function clickOpp(){
    highlightButton(UIopp, 'light-top-op');
    if(Math.sign(display) == 1){
        display = display * -1;
    }
    else if(Math.sign(display) == -1){
        display = Math.abs(display);
    }
    updateDisplay(display);
}
// Turns it into a percentage/decimal
function clickPerc(){
    highlightButton(UIperc, 'light-top-op');
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
    highlightButton(UIdiv, 'light-side-op');
    checkIfOperandIsUsed();
    operand = '/';
    recentOp = false;
    updateDisplay(operand);
}

// Selects the muliplicaiton operand 
function clickMult(){
    highlightButton(UImult, 'light-side-op');
    checkIfOperandIsUsed()
    operand = '*';
    recentOp = false;
    updateDisplay(operand);
}

// Selects the subtraction operand 
function clickSub(){
    highlightButton(UIsub, 'light-side-op');
    checkIfOperandIsUsed()
    operand = '-';
    recentOp = false;
    updateDisplay(operand);
}

// Selects the addition operand 
function clickAdd(){
    highlightButton(UIadd, 'light-side-op');
    checkIfOperandIsUsed()
    operand = '+';
    recentOp = false;
    updateDisplay(operand);
}

// Solves the problem and figures out how to based on the operand
function solve(){
    if(operand == '/') display = display / displayTwo;
    if(operand == '*') display = display * displayTwo;
    if(operand == '-') display = display - displayTwo;
    if(operand == '+') display = display + displayTwo;
    // displayTwo = 0;

    recentOp = true;
    // operand = '';
    console.log("EQUAL()");

    updateDisplay(display);
}

// Adds the results together
function clickEqual(){
    highlightButton(UIequal, 'light-side-op');
    if(display + displayTwo == 0) display = 0;
    solve();
}

// When a number is clicked, this changes the color of the number's UI element and takes care of checking how to enter it
function clickNum(num, ui){
    highlightButton(ui, 'light-num');
    if(recentOp === true){
        numOne = 0;
        recentOp = false;
        operand = '';
    }

    if(operand == '') enterNum(num, numOne);
    if(operand != '') enterNum(num, numTwo);
}


// Enters the number into current number
function enterNum(num, numSelection){
    // Checks for deciaml
    if(num == '.') numSelection = numSelection.toString() + num.toString();
    // Just keeps it as is if it's already 0 and the num is 0
    else if(num === 0){
        numSelection = num;
    // Changes the number properly
    } else {
        numSelection = numSelection.toString() + num.toString();
        numSelection = Number(numSelection);
    }
    logVariables();
    updateDisplay(numSelection);
}

// Logs variables for testing purposes
function logVariables(){
    console.log("NumOne: ", numOne);
    console.log("NumTwo: ", numTwo);
    console.log("DispNum: ", dispNum);
    console.log("Operand: ", operand);
    console.log("Recent Operation: ", recentOp);
    console.log("\n");
}