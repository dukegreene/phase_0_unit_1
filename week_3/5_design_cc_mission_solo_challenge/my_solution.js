// This is a solo challenge

// Your mission description:
// 
// There is a player character, "cleric," who must retrieve a healing salve from one part of the room 
// and bring it to a sick person on the other side of the room. 
// The mission will use four objects: The cleric (player character), the patient, the salve table, and the salve.
// The user will interact using movement commands UP, DOWN, LEFT, RIGHT, and touching an object will cause the cleric to interact with it automatically.
// There will be no visual interface, just text-based instruction.
// 

// Pseudocode
// 
// Create cleric object named "Player" and give him an X position of 4 and a Y position of 3 and empty inventory property
// Create table object with X position 6, Y position 2, and inventory consisting of salve, which is an empty object literal
// Create patient object with X position 3, Y position 4, health property set to sick, and an empty inventory
// Tell the user that they are a cleric and a patient needs healing via salve. They must retrieve the salve and bring it to the patient.
// The mission will exist inside a while loop that isn't satisfied until the patient gets the salve and becomes well.
// At the start of every iteration of the loop (i.e. every turn), the player will get a description of their current surroundings and inventory, plus a prompt to enter a movement direction.
// If the user enters UP, subtract 1 from the Y position.
// If the user enters DOWN, add 1 to the Y position.
// If the user enters LEFT, subtract 1 from the X position.
// If the user enters RIGHT, add 1 to the X position.
// Otherwise, tell the user their input is invalid and they need to enter UP, DOWN, LEFT, or RIGHT
// Location descriptions are specific to Player's current position. The mission map is a 4x3 grid, so there must be 12 descriptions.
// If Player leaves the grid, they are warped back to the starting location of (4, 3).
// If Player is at (3, 2), tell them that the table is far to the right and that the patient is far down
// If Player is at (3, 3), tell them that the table is up and far to the right and that the patient is nearby and down
// If Player is at (3, 4), tell them that the table is far up and far to the right and that they are visiting the patient
// If Player is at (4, 2), tell them that the table is far to the right and that the patient is far down and to the left
// If Player is at (4, 3), tell them that they are at the starting position. The table is up and far to the right and that the patient is down and to the left
// If Player is at (4, 4), tell them that the table is far up and far to the right and that the patient is down and to the left
// If Player is at (5, 2), tell them that the table is to the right and that the patient is far down and far to the left
// If Player is at (5, 3), tell them that the table is up and to the right and that the patient is down and far to the left
// If Player is at (5, 4), tell them that the table is far up and to the right and that the patient is far to the left
// If Player is at (6, 2), tell them that they are at the table, that they have the salve, and that the patient is far down and far to the left
// If Player is at (6, 3), tell them that the table is up and that the patient is far to the left
// If Player is at (6, 4), tell them that the table is far up and that the patient is far to the left
// If Player moves into the salve table position, the table inventory becomes empty and Player inventory becomes salve
// If Player has salve and moves into the Patient position, the patient's Health property changes to well and their inventory becomes salve
// Once the patient is healed, the Player is congratulated and thanked for playing
// 
// 
// 

// Initial Code

// create objects

var cleric = {
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
	health: "sick,"
	xPos: 3,
	yPos: 4
}

// give instructions
 
console.log("You are a cleric and you must heal a nearby patient. A salve sits on a table across the room. Can you go get it?")
console.log("RULES: Type 'UP', 'DOWN', 'LEFT', or 'RIGHT' to move. Got get the salve and bring it back to your patient. If you leave the area, you'll warp back to where you started.")

// play game

while ((patient.inventory !== salve) || (patient.health !== "sick") {

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
// 