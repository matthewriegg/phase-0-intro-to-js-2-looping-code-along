// Code your solutions in this file

const personName = [`Ada`, `Brendan`, `Ali`];
const eventName = `birthday`;

function writeCards(personName, eventName) {
  let newArray = [];
    for (let i = 0; i < personName.length; i++){
        newArray.push(`Thank you, ${personName[i]}, for the wonderful ${eventName} gift!`)
    }
    debugger;
  
    return newArray;
}

    console.log(writeCards('personName', 'eventName'));

function countDown(init = 10){
    while (init >= 0){
        console.log(init --);
    }
}








