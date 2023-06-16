console.log("test");

/******************SYNCHRONOUS PROGRAMMING ******************************************/

/**
 * Synchronous Program:
 * prcessing one statement of code at a time, then move to the next after execution of the first
 * Single threaded programming languagge
 */

let HelloWorld = function(){
    console.log("Hello, World!");
}

let greetings = function(){
    console.log("Good Morning");

    HelloWorld(); //calling helloworld functiom()

    console.log("Have a good day!")
};
greetings();


////////DEMO 2///////////////////////////////////////

let str = "Good Morning";
console.log(str);
alert("Synchronous Window Alert!, blocks 'Have a good day'");
console.log("Have a great day");