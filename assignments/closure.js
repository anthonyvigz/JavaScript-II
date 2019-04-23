// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function checkDad(x, y) {
  let arr = [x, y, 34];
  
  function checkSon(array) {
    let sonNums = [15, 16, 17];
    sonNums.push(array);
    return sonNums;
  }

  return checkSon(arr);
}

console.log(checkDad(12, 11));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
}());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
