// Techniques used in Web Developement to control the frequency of
// function execution,particularly in Response to Events.
// Events like : Scrolling,Resizing,or Keyboard Input

// While they share the goal of optimizing performance .
// 1. Debouncing and
// 2. Throttling
// https://codepen.io/nem035/pen/xdybvK

/*
  ### ## ## ## ## ## ## Debouncing ## ## ## ## ## ## ## ### 

- Most Useful Concept for Performance Optimization by Limition function calls
on Different Events :
Typing Events, Scroll Events,Resize Events , On other keyboard / Mouse Events.

*/

/*
 
> # # Concepts Covered :
- 1. keyup vs input vs change input Events.
- 2. this.value vs e.target.value.
- 3. What is Debouncing?
- 4. What are decorator functions?
- 5. Implement Debouncing.
- 6. Understanding Debouncing in Depth.

*/

// const SearchInput = document.getElementById("input-event");

// * - 1. keyup vs input vs change input Events.
/*
// Recommended: input
// Triggered when the value of the input field changes, including typing,
// pasting, or deleting text.
SearchInput.addEventListener("input", (e) => {
  console.log("Input Event Occurred...", e.target.value);
});

// Uncomment the following lines to see the behavior of other events:

// SearchInput.addEventListener("change", (e) => {
//   console.log("Change Event Occurred...", e.target.value);
// });
// Triggered when the value of the input field changes and the field loses focus
// or when the user explicitly interacts with a form control.

// SearchInput.addEventListener("keyup", (e) => {
//   console.log("Keyup Event Occurred...", e.target.value);
// });
// Triggered when a key on the keyboard is released. Note: May not be triggered
// in some cases.

// SearchInput.addEventListener("keypress", (e) => {
//   console.log("Keypress Event Occurred...", e.target.value);
// });
// Triggered when a key is pressed down. This may not capture certain
// non-character keys.

// SearchInput.addEventListener("keydown", (e) => {
//   console.log("Keydown Event Occurred...", e.target.value);
// });
// Triggered when a key on the keyboard is pressed down.
*/

// * - 2. this.value vs e.target.value.

/*

// Arrow Function: 'this' points to the global object (e.g., window)
SearchInput.addEventListener("input", (e) => {
  // 'this.value' will be undefined or not the input value
  console.log("Input Event Occurred with Arrow Function...", this.value, this);
});

// Regular Function: 'this' points to the DOM element that triggered the event
SearchInput.addEventListener("input", function (e) {
  // 'this.value' is the value of the input field that triggered the event
  console.log(
    "Input Event Occurred with Regular Function...",
    this.value,
    this
  );
});

*/
// - 3. What is Debouncing?

const SearchInput = document.getElementById("input-event");

function getSuggestions(e) {
  console.log("Suggestions for ", e.target.value);
}
let timerId;
const debouncedFunc = function (fn, delay) {
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => {
    return fn(e);
  }, delay);
};
SearchInput.addEventListener("input");

// - 4. What are decorator functions?

/*

*/

// const decoratedDebounce = (debouncedFunc)
