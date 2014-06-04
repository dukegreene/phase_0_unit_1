// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // Rescue Mission
 // Move up x1
 // Move right x2
 // Move down x1
 // Attack
 
this.moveDown();
this.moveDown();
this.moveRight(); 
this.moveUp();
this.moveUp();
this.moveRight(); 
this.moveRight(); 
this.moveDown();
this.attackNearbyEnemy();

-------
 
 // Grab the Mushroom
 // Move up x1
 // Move right x1
 // Grab mushroom
 // move left x1
 // move up x1
 // attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

-----
 
// Drink Me
// Move right x1
// Attack munchkin 1
// Move right x1
// Move down x1
// grab mushroom
// move up x1
// move right x1
// attack munchkin 2

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

------

// Taunt the Guards
// Move right x1
// taunt
// move left x2
// let Phoebe shoot
// move right
// make Phoebe follow
// move right x2
// move up
// move right
// taunt guards
// move down
// move right
// move up
// move right

this.moveRight();
this.bustDownDoor();


this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey you guys!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

------

// It's a Trap
// move down x2
// taunt
// move up x2
// call for attack

this.moveDown();
this.moveDown();
this.say("YO!");
this.moveUp();
this.moveUp();
this.say("Attack!");

-----

// Break the Prison
// bust first door
// skip second door
// bust third door
// skip fourth door
// bust fifth door
// skip sixth door
// bust seventh door

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  // <-- Start here; Krogg is not a friend!

if(name === "Lucas")
    return true;
    
if(name === "Brack")
    return false;
if(name === "Gort")
    return false;
if(name === "Marcus")
    return true;
if(name === "Robert")
    return true;
if(name === "MARCUS")
    return false;
if(name === "Gordon")
    return true;    
  
-----

// Taunt
// taunt ogre x3

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("Yeah, you!");
this.say("Your mom smells!");
this.say("Weakling!!");

-----

// Cowardly Taunt
// (after initial code)
// move to 45, 19
// taunt ogres
// move back to 70, 10
// call attack

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

this.moveXY(45, 19);
this.say("You smell!");
this.moveXY(70, 10);
this.say("Attack!");

------

// Commanding Followers
// (after initial code)
// ask troops to follow
// move to 64, 45
// call for troops to attack

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

this.say("Follow me, guys!");
this.moveXY(64, 45);
this.say("attack!");

-----

// Mobile Artillery
// (after initial code)
// Move to the right of the rock outcropping near Phoebe
// fire on top ogre group
// fire again to stop top big ogre
// fire on right ogre group
// fire again to stop right big ogre

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres


this.moveXY(43, 41);
this.attackXY(49, 64);
this.attackXY(43, 56);
this.attackXY(69, 53);
this.attackXY(56, 48);

-----



// Reflection:
// Write your reflection here.
// My favorite part of this was seeing how games work behind the scenes. 
// I liked being able to mouse over the characters and see their attributes.
// It was fun to watch things play out in real time.
// I'm still getting used to camelCase but it's getting easier.
// To test myself, I left out the semicolons and only put them in after I'd written several steps. More buildup that way. I think semicolons send a signal that a command is complete and can be executed in full.
// I wish I had started this week's exercises sooner, because this one was so much fun I'm now motivated to do a couple more exercises today.
// I struggled with understanding exactly what the "()" were referring to at first. I think the parentheses contain arguments, and if there's no argument, the command just auto-executes by itself. So moveRight must have its own built in X,Y arguments that auto-execute.
// "this" seems to be a pointer to the controllable character. It links to all the character's attributes so the user can control it's movement ant action.