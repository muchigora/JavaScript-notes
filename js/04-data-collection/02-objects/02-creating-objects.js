/**
 * CREATING A NEW OBJECT
 * JS provides the scope to define and create new objects.
 * 
    There are different ways to create new objects:

    Create a single object, using an object literal.
    Create a single object, with the keyword new.
    Define an object constructor, and then create objects of the constructed type.
    Create an object using Object.create().

 */


/**
 Using an Object Literal

This is the easiest way to create a JavaScript Object.

Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

The following example creates a new JavaScript object with four properties:
 */

const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};
// console.log(person);

// you can create and empty object and then pupulate it with data 
const student = {}
// console.log(student);
student.firstName = " John";
student.lastName =  "Doe";
student.school = "Engineering & Technology";
student. major =  "Computer Information Technology";
// console.log(student);


/**
 * new KEY WORD
 * new Object(); e.g., const person = new Object();
 * then add properties to the object
 */
const person2 = new Object();
// console.log(person2);
person2.firstName = "John";
person2.lastName = "Doe";
// console.log(person2);



/**
 * JavaScript Objects are Mutable
 * Objects are mutable, because they are addressed by reference not by value
 * if x is an object, then const y = x; will not produce a copy of x in y, they will both be the same object 
 */
const x = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
console.log(x);

const y = x;
console.log(y);
y.value3 = "new value3";
console.log(y);
console.log( x);
