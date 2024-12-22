const inputEl = document.querySelector(".input");
const spanEl = document.querySelector(".span");

// NOTE: #1 create the throttle function
const throttle = (func, delay = 1000) => {
  // NOTE: #1.2 connect the timer id to the setTimeout func
  let timerId = null;

  // NOTE: #1.1 return a function with a setTimeout that calls the passed in function with a delay with ...args
  return (...args) => {
    // NOTE: #1.4 set this last
    if (timerId) return;

    timerId = setTimeout(() => {
      // NOTE: #1.3 set the timerId to null
      timerId = null;
      func(...args);
    }, delay);
  };
};

// NOTE: USE CASE 1: FOR UPDATING SPAN COUNT

// NOTE: #2 call the throttle function with the thing we want to do
const updateNumber = throttle(() => {
  spanEl.innerText = ++spanEl.innerText;
}, 500);

// NOTE: USE CASE 2: FOR PRINTING INPUT VAL TO CONSOLE

// NOTE: using the logInput func
const logInput = throttle((value) => {
  console.log("Calling API", value);
}, 1000);

// NOTE: adding function to event listener
document.addEventListener("input", function (e) {
  logInput(e.target.value);
});

// NOTE: #3 add that func to the event listener
document.addEventListener("mousemove", function () {
  updateNumber();
});
