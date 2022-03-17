class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  };

  start(callback) {
    setInterval(() => {
      return this.currentTime ++ ;
    }, 1000);
  };

  getMinutes() {
  let minuteCounter = 0;
  minuteCounter = +(this.currentTime / 60).toFixed();
    return minuteCounter;
  };

  getSeconds() {
  let secondCounter;
  if (this.currentTime === 0){
    secondCounter = 0;
  }else if (this.currentTime % 60 !== 0) {
    secondCounter = this.currentTime - (this.minuteCounter * 60);
  }
  return secondCounter;
  };

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    }else {
      return value.toString();
    };
  };

  stop() {
  clearInterval(this.intervalId);
  };

  reset() {
    this.currentTime = 0;
  };

  split() {
    let mm = computeTwoDigitNumber(this.currentTime.getMinutes());
    let ss = computeTwoDigitNumber(this.currentTime.getSeconds());
    return `${mm}:${ss}`;
  };

};

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

