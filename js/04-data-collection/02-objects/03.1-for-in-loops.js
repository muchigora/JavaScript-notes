/**
 * JavaScript for...in Loop
 * The JavaScript for...in statement loops through the properties of an object.
 */

const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
//   console.log(person);

let personDetails = " ";
for(let key in person){
    personDetails = person[key];
}
console.log(personDetails);