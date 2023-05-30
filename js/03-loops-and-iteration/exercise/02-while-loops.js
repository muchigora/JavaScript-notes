/**
 * Exercise
Write while loops to accomplish the following tasks:

Count down to 0 from a given number.
Log integers in multiples of 3 as long as they are less than 35.
Print integers in multiples of 5 as long as they are less than 100.
Print integers between 0 and 20 with the following conditions:
 =>All numbers divisible by 2 should be multiplied by 3 before they are output.
 =>All other integers should not be output.
 =>Print all prime numbers between 0 and 20.
 */


// Count down to 0 from a given number.
let count = 10;
while (count > 0) {
   count--;
    console.log(count);
}

// Log integers in multiples of 3 as long as they are less than 35.
let myInt = 0;
while(myInt < 35){
    myInt++;
    if(myInt % 3 === 0){
        // console.log(myInt);
    }
}

let multiplesOf5 = 0;
while(multiplesOf5 < 100){
    multiplesOf5++;
    if(multiplesOf5 % 5 === 0){
        console.log(multiplesOf5);
    }
}


