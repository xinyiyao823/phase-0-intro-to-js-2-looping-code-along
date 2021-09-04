

const name = ["Lisa", "Kaitlyn", "Jan"]; // define array of string names
const event = "surprise"; // define variable with string

function writeCards(name, event) { // creating function to iterate through array (name)
    const message = []; // define empty array to insert date into and return at end of fx
    for ( let i = 0; i < name.length; i++) {  // sets loop to run through all array elements
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`); // uses string interpolation to create 3 diff phrases with the array elements and string variable
    }
    return message; // returns new array with 3 new phrases
}

// countdown from 10 to 0
const n = 10; // define starting value at 10
function countDown(n){ //create countDown fx
while (n >= 0) { // sets value so that countdown begins at 10 and ends at 0
    console.log(n); // returns "10"
    n--;
    }
    
}
countDown(10);