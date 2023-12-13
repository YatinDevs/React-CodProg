// synchronous Programming vs Asychronous Programming.

// Synchronous Programming.

console.log("script Start");

// blocking Code
for (let i = 1; i < 10000; i++) {
  console.log("inside for loop");
}

console.log("script end");

/*
 Js (by default) is
  - Synchronous Programming Language . 
  - Blocking .
  - Single Threaded .

 Synchronous Means : execution of a program code in particular 
 sequence in blocking manner.
*/
