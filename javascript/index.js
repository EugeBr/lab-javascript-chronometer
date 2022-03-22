const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  //printMilliseconds();
}

function printMinutes() {
  let minDec = (chronometer.getMinutes()).computeTwoDigitNumber()[0];
  let minUni = (chronometer.getMinutes()).computeTwoDigitNumber()[1];
  minDecElement.innerHTML = minDec
  minUniElement.innerHTML = minUni
}

function printSeconds() {
  const seconds =chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secDecElement.innerText= seconds[0]
  secUniElement.innerText= seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {
  let newLi = document.createElement('li');
  //newLi.className = 'list-item';
  newLi.innerHTML = chronometer.split();
  splitsElement.appendChild(newLi);
}

function clearSplits() {
  splitsElement.innerHTML = "";
  chronometer.reset();
}

function setStopBtn() {
  chronometer.start()
  printTime();
  btnLeft.className = 'btn stop';
  btnLeft.innerHTML = 'STOP';
  
}

function setSplitBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  chronometer.stop();
  btnLeft.className = 'btn start';
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.className = 'btn reset';
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
  } else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'SPLIT') {
    printSplit();
  } else {
    clearSplits();
    chronometer.reset();
  }
});
