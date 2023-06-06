/**
 * Flight check in function
 */

// declare variables
// primitive - pass by value 
let flight = "BNB289";
// object variable - pass by reference
let person = {
    name: "John",
    passport: 12342345
}

// function 
function checkIn(flightNum, passenger){
    passenger.name = `Mr. ${passenger.name}`;  // The name of person object will change to Mr. John. 
    flightNum = "BNB999"
    // console.log(passenger.name);

    if(passenger.passport === 12342345){
        console.log(`${passenger.name} you have successfully checked in for flight ${flightNum}`)
    } else{
        console.log("Inavlid passport");
    }
}
checkIn(flight, person)
console.log(person); // Name has changed
console.log(flight); //flight has not chnaged
