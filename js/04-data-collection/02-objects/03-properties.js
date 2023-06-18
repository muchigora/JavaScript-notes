/**
 * JavaScript Properties
Properties are the values associated with a JavaScript object.
A JavaScript object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.
 */

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  console.log(person);

/**
 * Accessing JavaScript Properties
The syntax for accessing the property of an object is:
objectName.property      // person.age
objectName["property"]   // person["age"]
or
objectName[expression]   // x = "age"; person[x] // The expression must evaluate to a property name.
 */




// bjectName.property 
person.age
console.log(person.age);

// objectName["property"]
person["age"];
// console.log(person["age"]);

// objectName[expression]   // The expression must evaluate to a property name.
let x = "age"; person[x]
// console.log(person[x]);

/**
 * Adding New Properties
 */
person.nationality = "English"; 

/***
 * Deleting Properties
 * 
  The delete keyword deletes both the value of the property and the property itself.
After deletion, the property cannot be used before it is added back again.
The delete operator is designed to be used on object properties. It has no effect on variables or functions.
The delete operator should not be used on predefined JavaScript object properties. It can crash your application. 
 * */
delete person.age;

/**
 * Nested Objects
 * You can access nested objects using the dot notation or the bracket notation:
 */

nestedObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
nestedObj.cars.car2
nestedObj.cars["car2"]
nestedObj["cars"]["car2"]


/**
 * Nested Arrays and Objects
 * Values in objects can be arrays, and values in arrays can be objects:
 */

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  } 
  console.log(myObj);

  for(let i in myObj.cars){
    let carName = myObj.cars[i].name;
    console.log(carName);
    let carModel = myObj.cars[i].models;
    console.log(carModel);
}


