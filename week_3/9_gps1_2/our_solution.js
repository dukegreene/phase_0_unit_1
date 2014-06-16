// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Mike Daugherty
//  2. Duke Greene


// 0. "YOU SIGNED... WHO?!"

var darthVader = {
    name: "Darth Vader",
    age: 49,
    quote: "Luke, I am your father.",
    showQuote: function() {
        console.log(this.quote)
    }
}

var princessLeia = {
    name: "Princess Leia",
    age: 29,
    quote: "Aren't you a little short for a stormtrooper?",
    showQuote: function() {
        console.log(this.quote)
    }
}

// console.log(princessLeia.name)


// 1. "Here they Come!"

var adamSandler = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!",
    showQuote: function() {
        console.log(this.quote)
    }
}

var kristenBell = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?",
    showQuote: function() {
        console.log(this.quote)
    }
}

var jimCarrey = {
    name: "Jim Carrey",
    age: 52,
    quote: "...So you're telling me there's a chance? YEAH!",
    showQuote: function() {
        console.log(this.quote)
    }
}


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

    function Client(name, age, quote) {
        this.name = name,
        this.age = age,
        this.quote = quote
        this.showQuote = function() {
        console.log(this.quote)
        }
    }

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 3. "SHOW 'EM OFF!"
client_array = [darthVader, princessLeia, adamSandler, jimCarrey, kristenBell, shooterMcGavin]

for (i = 0; i < client_array.length; i++) {
    console.log("Name: " + client_array[i].name + ", Age: " + client_array[i].age)
    // console.log("Quote: " + client_array[i].quote)
    client_array[i].showQuote()
    console.log("\n")
}


// 4. "But wait, there's more!"

// (See "showQuote" functions on lines 14/15, 23/24. etc)

// 5.  ** BONUS **


//  6.  Your Reflection:

// I drove for most of this challenge, and I felt pretty good doing it. I feel like we spent about 2/3 of the time looking up information and the rest of the time playing with the code. It was a good balance since we were both pretty rusty on the JavaScript.
// Once again, the w3schools.com pages were very helpful in jogging my memory on stuff. I almost got stuck when I saw "constructor" for the first time in Release 2, but a little online research helped me figure out how to phrase the Client function correctly.
// I felt like the hardest thing about this session was staying on the same page when we both wanted to try things out or research something. There were a few times when neither of us really knew what the other person was doing becuase we stopped verbally communicating.
// Things I learned from this session: Using "this" within functions, testing in the console, and getting more practice with for loops (my pair was an invaluable resource on this last one)