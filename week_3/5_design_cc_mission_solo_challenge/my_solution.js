// This is a solo challenge

// Your mission description:
// 
// There is a player character, "medic," who must retrieve a healing salve from one part of the room 
// and bring it to a sick person on the other side of the room. 
// The mission will use four objects: The medic (player character), the patient, the salve table, and the salve.
// The user will interact using movement commands UP, DOWN, LEFT, RIGHT, and touching an object will cause the medic to interact with it automatically.
// There will be no visual interface, just text-based instruction.
// 

// Pseudocode
// 
// Create medic object named "Player" and give him an X position of 4 and a Y position of 3 and empty inventory property
// Create table object with X position 6, Y position 2, and inventory consisting of salve, which is an empty object literal
// Create patient object with X position 3, Y position 4, health property set to sick, and an empty inventory
// Tell the user that they are a medic and a patient needs healing via salve. They must retrieve the salve and bring it to the patient.
// while the patient is not healed, prompt the player for a new x,y position
// If Player moves into the salve table position, the table inventory becomes empty and Player inventory becomes salve
// If Player has salve and moves into the Patient position, the patient's Health property changes to well and their inventory becomes salve
// Once the patient is healed, the Player is congratulated and thanked for playing
//
// 

// Initial Code

// create objects

var medic = {
  name: "Player",
  inventory: {},
  xPos: 4,
  yPos: 3
}

var salve = {name: "Salve"}

var table = {
  name: "Table",
  inventory: salve,
  xPos: 6,
  yPos: 2
}

var patient = {
  name: "Patient",
  inventory: {},
  health: "sick,",
  xPos: 3,
  yPos: 4
}

// give instructions
 
console.log("You are a medic and you must heal a nearby patient. A bunch of salve sits on a table across the room. Can you go get it?");
console.log("RULES: You're at (4, 3). Table is at (6, 2). Patient is at (3, 4). Move around and help the patient!");
// play game

while ((patient.inventory !== salve) || (patient.health !== "healthy")) {
  
  // console.log(medic.xPos) # for testing
  // console.log(medic.yPos)

  var x = prompt('Enter X Coordinate:')
  var y = prompt('Enter Y Coordinate:')
  medic.xPos = x
  medic.yPos = y

  if (medic.xPos == table.xPos && medic.yPos == table.yPos) {
    console.log("Here's the medicine table. You got some salve! The patient in (3, 4) sure could use some salve!");
    table.inventory = {};
    medic.inventory = salve;
  } else if (medic.xPos == patient.xPos && medic.yPos == patient.yPos) {
    console.log("Here is the patient.");
    if (medic.inventory == salve) {
      patient.inventory = salve;
      patient.health = "healthy";
      console.log("You gave the patient the salve and they feel much better. Great job!");
    } else { console.log("The patient still needs salve from (6, 2).") }
  } else {
    console.log("There's nothing of interest here...The medicine table is at (6, 2) and the patient is at (3, 4).")
  }
}

// Refactored Code






// Reflection
// 
// 
// 
// 
// 
// 
// 