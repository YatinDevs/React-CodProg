// setTimeout
/*
Source MDN web Docs :
  !Defination
 * setTimeout : 
  The global setTimeout() method sets a timer which executes
  a function or specified piece of code once the timer expires.


*/

/*
 ? setTimeout Syntax :
setTimeout(code)
setTimeout(code, delay)
setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2,...…,  paramN)

*/

// Case 1: Basic SetTimeout Working.

/*
console.log("script Start");

setTimeout(function f1() {
  console.log("inside f1 setTimeout");
}, 2000);

console.log("script End");
*/

// Case 2: Priority and EventLoop Concept for SetTimeout.
/*
console.log("script Start");

setTimeout(function f1() {
  console.log("inside f1 setTimeout");
}, 0);

for (let i = 0; i < 1000; i++) {
  console.log("inside blocking loop code...");
}
console.log("script End");
*/
// Case 3 : Cancellation of SetTimeout :
/*
console.log("script Start");

const timerId = setTimeout(() => {
  console.log("inside setTimeout");
}, 4000);

for (let i = 0; i < 1000; i++) {
  console.log("inside blocking loop code...");
}

console.log("setTimeout Id : ", timerId);
console.log("clearing timeout");
clearTimeout(timerId);
console.log("script End");
*/

// Case 4 : cancellable Function :

var cancellable = function (fn, args, delay) {
  console.log(args);
  const cancelFunction = function () {
    clearTimeout(timerId);
  };

  const timerId = setTimeout(() => {
    fn(...args);
  }, delay);

  return cancelFunction;
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
