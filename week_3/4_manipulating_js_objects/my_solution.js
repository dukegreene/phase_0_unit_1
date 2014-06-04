
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}



// __________________________________________
// Write your code below.

// Define adam variable as an Object with no properties
var adam = {}
// Give adam a name property with value "Adam"
adam.name = "Adam"
// Add adam as a spouse property in terah
terah.spouse = adam
// Change terah's weight to 125
terah.weight = 125
// Remove terah's eyeColor property
delete terah.eyeColor
// Give adam a spouse property, assign terah there
adam.spouse = terah
// Add a propertyless object to terah as a children property
terah.children = {}
// Add a carson object (with property name "Carson") as a property to the terah children property
terah.children.carson = {name: "Carson"}
// Add a carter object (with property name "Carter") as a property to the terah children property
terah.children.carter = {name: "Carter"}
// Add a colton object (with property name "Colton") as a property to the terah children property
terah.children.colton = {name: "Colton"}
// Add children property to adam with the value of terah children
adam.children = terah.children





// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I feel really good about this so far. The HTML/CSS was trickier for me. I do better with abstract variables than I do with visual layouts, I think.
// The easiest part about this was assigning the most basic variables. The hardest was figuring out how to add the children in, I said {name = "Colton"} at first and it took me a while to remember the colon notation at the top of this document.
// I can see this becoming very useful in real life. You could create a user profile for a website with what we've learned so far.
// Writing pseudocode eally helped me here. I think without it I would have had a harder time reading the assignment instructions. The writing process is like a pep talk mixed with a game plan, I didn't think I'd like pseudocode this much.
// I'm now regretting that I chickened out of making progress last week when everyone was on JavaScript still. I can't wait to catch up and start diving into code with others.
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)