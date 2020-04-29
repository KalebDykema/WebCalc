/**
    PROCESS:
    1. Wait for 

**/

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
UIdec.addEventListener('click', () => addNum('.'));