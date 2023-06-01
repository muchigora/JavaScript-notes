/***
 * HOISTING:
 * JavaScript's behavior of moving declarations to the top of the current scope
 * As it is done with variables, so can it be done with functions.
 * therefore FUNCTIONS can be invoked before they are  declared
 * 
 */

// invoking the function 
myFunction(2)
// declaring the function 
function myFunction(num) {
    let result =  Math.pow(10, num);
    console.log(result);
}

