/***
 * Practice Activity 2: Write a Function Expression

Write a function named planetHasWater using the function expression syntax.

    It will have one parameter: planet.
    Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
    Bonus points if you ensure the function will work regardless of the casing of the planet being passed in ('earth', 'MARS', etc.).

Invoke the function a couple of times to test it!

 */

const planetHasWater = function(planet) {
    // Convert the planet argument to lowercase for case-insensitive comparison
    const lowercasePlanet = planet.toLowerCase();
    
    // Check if the lowercase planet is either "earth" or "mars"
    if (lowercasePlanet === "earth" || lowercasePlanet === "mars") {
      return true;
    } else {
      return false;
    }
  };
  
  // Test the function
console.log(planetHasWater("Earth"));  // true
console.log(planetHasWater("Mars"));   // true
console.log(planetHasWater("Jupiter"));  // false
console.log(planetHasWater("MARS"));   // true (case-insensitive)