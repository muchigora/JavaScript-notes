/**
 * create a class named Person
 * with the following properties: name, birthYear, gender.
 * add the following method calculateAge() which calculates age based on birth year.
 */

let Person = function(name, birthYear, gender){
    //properties
    this.name = name;
    this.birthYear = birthYear;
    this.gender = gender;
    //methods
    // this.calculateAge = function(){
    //     let age = new Date().getFullYear() - this.birthYear;
    //     console.log(age);
    // }
}

// CREATE PROTOTYPE PROPERTY FOR PERSON OBJECT
Person.prototype.calculateAge = function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log(`age: ${age}`);
}

//Instantiating instances of the class
let john = new Person("John",1985,"M");
john.calculateAge();
console.log(john);

console.log("--------------------------------------------------------------------------------")

let mary = new Person("Mary",1998, "F");
mary.calculateAge();
console.log(mary);

console.log("--------------------------------------------------------------------------------")
let steve = new Person("Steve",1989, "M");
steve.calculateAge();
console.log(steve);