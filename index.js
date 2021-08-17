

const name = ["Lisa", "Kaitlyn", "Jan"];
const event = "surprise";

function writeCards(name, event) {
    const message = [];
    for ( let i = 0; i < name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}


const n = 10;
function countDown(n){
while (n >= 0) {
    console.log(n);
    n--;
    }
    debugger;
}
countDown(10);