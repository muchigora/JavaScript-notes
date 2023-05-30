/**
 * OBJECTS
 * What is an object?
 * 
 * Objects written as name value pairs are similar to:

    Associative arrays in PHP
    Dictionaries in Python
    Hash tables in C
    Hash maps in Java
    Hashes in Ruby and Perl

 */



/***
 * OBJECT METHODS
 * Actions that can be performed on an object
 * stored in properties as function definitions.
 * a method is a function stored as a property.
 * 
 */

// method as a function stored as a property 
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}
console.log(person.fullName())

/**
 * this KEY WORD
 * 
 * in the example above:
 * THIS KEY WORD refers to:
 * ==> the person object, i.e.,
 * this object, this person
 * this.firstName - is - firstName property of this Object (person object)
 * In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.
 */



/***
 * WHEN TO USE OBJECTS
 * 
 */
