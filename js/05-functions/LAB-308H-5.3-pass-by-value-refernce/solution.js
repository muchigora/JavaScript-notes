
/***
 * PASS BY VALUE && PASS BY REFERENCE
 */


const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}


/**
 * TASK 1
 * 
    People move location frequently. Create a new function moveLocation().
    moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
    The location object will have the properties city, state, and zip.
    The function should change the city, state, and zip properties of the person to match those of the new location.
    Test your function by using the following code. Does personTwo now live in Rochester? (They should.)

 */
const newLocation = {
    city: "Rochester",
    state: "New York",
    zip: 14606
}

function moveLocation(mover, moveToLoc){
    // Details of person moving
    mover = `${personTwo.name.first} ${personTwo.name.last}`;
    console.log(mover);

    // add new location to mover
    personTwo.location = moveToLoc;
    moveToLoc = (city, state, zip) => {
        city = newLocation.city;
        state = newLocation.state;
        zip = newLocation.zip
    }
    
    
   

}
moveLocation(personTwo, newLocation);
console.log(personTwo.location.city);
// console.log(personTwo.location.state);
// console.log(personTwo.location.zip);



/**
 * TASK TWO
 * 
    Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move.
        Set Julie's location to Timmy's location by reference.
        Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.)

 */

    personTwo.location = personOne.location;
    const personOneNewLoc = () => {
        personOne.city = "Mountain View";
        personOne.state = "CA";
        personOne.zip = 94035
    }
    console.log(personTwo.location);