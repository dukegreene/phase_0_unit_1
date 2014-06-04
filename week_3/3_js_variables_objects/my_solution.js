// I paired by myself on this challenge.

// __________________________________________
// Write your code below.
// 
// assign 7 to secretNumber variable to pass tests 1 and 2
// assign 'just open the door' to password variable to pass tests 3 and 4
// assign 2===3 to allowedIn variable to pass tests 5 and 6
// assign array with 'John' as first item and 'Mary' as fourth to members variable to pass tests 7 - 9

var secretNumber = 7
var password = 'just open the door'
var allowedIn = 2===3
var members = ['John', 'Duke', 'Kellie', 'Mary']



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// Ok, this one was really fun. Like a puzzle to solve. Are we always supposed to write tests first? I hope so. After I started throwing some variables around in the browser, it clicked and I just started solving the tests backwards, which was way faster. I din't have to write three different arrays.
// I struggled with the code of the function at first. I kind of had to just stare at it for a few minutes until it clicked that the function runs through a number count and does a test at each number that throws an error if it fails. The assert parameters were also tricky for me to grasp, but they were well named, which made it easier.
// This article helped me understand how the tests work. http://www.w3schools.com/js/js_errors.asp
// I remember a lot of this from Code Academy and my Ruby knowledge helps for context. I'm looking forward to doing more of this.
// 
// 


// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

