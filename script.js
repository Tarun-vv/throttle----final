// NOTE: USE CASE: for events that involve resizing, scrolling or mouse movements ALSO when we want something to happen every time within a delay

// NOTE: #1 First steup the basic functionality
// const inputEl = document.querySelector(".input");
// const span = document.querySelector(".span");

// const callApi = function (e) {
//   console.log("Calling API", e.target.value);
// };

// inputEl.addEventListener("input", callApi);

// document.addEventListener("mousemove", () => {
//   span.innerText = ++span.innerText;
// });

const inputEl = document.querySelector(".input");
const span = document.querySelector(".span");

// NOTE: code for input

const callApi = function (value) {
  console.log("Calling API", value);
};

// NOTE: call throttle function for the input
const logInput = throttle(callApi, 700);

// NOTE: add that function to the event listener
inputEl.addEventListener("input", (e) => {
  logInput(e.target.value);
});

// NOTE: code for the cursor movement

// NOTE: #2 call throttle function with the thing we are supposed to happen and with the delay
const updateNumber = throttle(() => {
  span.innerText = ++span.innerText;
}, 500);

// NOTE: #3 call the update number function with the event listener
document.addEventListener("mousemove", () => {
  updateNumber();
});

// NOTE: #1 create throttle function
function throttle(func, delay = 1000) {
  let timerId;
  let lastArgs = [];

  return (...args) => {
    lastArgs = args;
    if (timerId) return;

    timerId = setTimeout(() => {
      timerId = null;
      func(...lastArgs);
    }, delay);
  };
}
