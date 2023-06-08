/***************************************************
 * Muchi Gora
 * ALAB 308H.5.4 - JavaScript Total Recall
 */

/*****************SECTION A*************************/
// How do we assign a value to a variable?
// declare the variable name and use the assignment operator "=" as demonstrated below:
let greeting = "Hi Muchi"

// How do we change the value of a variable?
// invoke the assignment operator on an existing variable, example below resigning value to greeting variable
greeting = "Good morning, Muchi"


// How do we assign an existing variable to a new variable?
// declare the new variable and assign the existing variable for value as demonstrated below
let chitChat = greeting;

// Remind me, what are declare, assign, and define?
// declare a variable is to create a variable so that it can be implemented in code, e.g.,
let myNumber;
// assign is giving a value to a variable. e.g.,
myNumber = 15;

// define includes both define and declare. e.g.,
let yourNumber = 13;

// What is pseudocoding and why should you do it?
// Writing code in normal human language, the steps for the code to be written or algorithm 

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// While this may be subject to various factors, the majority of of the time would be well spent planning the solution and creating steps or algorithm before implementing in code 


/********************************SECTIOB B: STRINGS ***************************************/
/**
 * Create a variable called firstVariable.
Assign it the value of the string "Hello World".
Change the value of this variable to some number.
Store the value of firstVariable in a new variable called secondVariable.
Change the value of secondVariable to any string.
What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
 */
let firstVariable = "Hello World";
firstVariable = 75;
let secondVariable = firstVariable;
secondVariable = "New string value";
let yourName = "Muchi";
let greet = `Hello, my name is  ${yourName}`;
console.log(greet);

/**********************SECTION C: Booleans********************************************* */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false);
console.log(e == 'Kevin');
console.log(a + b == c); 
console.log(a * a == d);
console.log(48 == '48');

/**********************SECTION D: The Farm**************************************/
/**
 * Declare a variable animal. Set it to be "cow" or some other animal.
Write code that will print out "mooooo" if the variable is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
 */
let animal = "cow";
if(animal === "cow"){
        console.log("moooooo")
}else {
        console.log("Hey! You're not a cow.")
}

/********************************* SECTION E: Driver's Ed**************************************/
let age = 21;
if (age >= 16){
        console.log("Here are the keys!")
}else{
        console.log("Sorry, you're too young.")
}



/********************************PART II: LOOPS ************************************** */
/*******************************SECTION A: The Basics***********************************/
/**
 * Write a loop that will print out all the numbers from 0 to 10, inclusive.
Write a loop that will print out all the numbers from 10 up to and including 400.
Write a loop that will print out every third number starting with 12 and going no higher than 4000.
 */
for (let i=0; i<= 10; i++){
        console.log(i);
}
for (let i=10; i<= 400; i++){
        console.log(i);
}
for (let i=12; i<= 4000; i+=3){
        console.log(i);
}

/********************************SECTION B: GET EVEN ************************************/
/**
 * Print out the numbers that are within the range of 1 - 100.
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
 */

for (let i=1; i<= 100; i++){
        if(i %2 == 0){
                console.log(i+" <-- is an even number")
        }else{
        console.log(i);
        }
}


/******************************************SECTION C: GIVE ME FIVE******************************** */
for (let i = 0; i <= 100; i++){
        if (i == 0){
                continue;
        }else if (i % 3 == 0 && i % 5 ==0){
                console.log(`I found a  ${i}. Three is a crowd!`)
        }else if (i % 5 == 0){
                console.log("I found a " + i + ". High five!")
        }else if(i % 3 == 0){
                console.log("I found a " + i + " Three is a crowd")
        }
}

/**********************************SECTION:D. Savings Account  ******************************/

let bank_account = 0;
for (let i = 1; i<= 10; i++){
        bank_account += i;
}
let double_bank_account = 0;
for (let i = 1; i<= 100; i++){
        double_bank_account += i*2;
}
console.log(double_bank_account);

/****************************PART III:  Arrays & Control flow***********************************/
// A. Talk About It
// 1. What are the things in an array called?
//         elements 
//    2. Do Arrays guarantee those things will be in order?
//         Yes, arrays are alway in a specific order. That is guaranteed by the indexes allocated to elemnts
//    3. What real-life thing could you model with an array?
//        create a list of anything, like list of names, list pf pets, list of girlfriemds


// B. Easy Does it
let quotes = ["I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.'” —Muhammad Ali", 
            "Success is achieved and maintained by those who try and keep trying.” —W. Clement Stone", 
            "Success is the sum of small efforts repeated day in and day out.” —Robert Collier"]

// C. Accessing Elements
const randomThings = [1, 10, "Hello", true]
    // 1. How do you access the 1st element in the array? 
        randomThings[0];
//    2. What would you write to access the 3rd element of the array?
        randomThings[2];

// D. Change Values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[4]="Octocat"; // ourClass.pop(); -> ourClass.push("Octocat")
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("My String");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(myArray);

// F. Biggie Smalls
let integer = 23;
if (integer < 100){
        console.log("little number")
}else if(integer >= 100){
        console.log("big number")
}

// G. Monkey in the Middle
let monke = 11;
if(monke < 5){
        console.log("little number")
}else if(monke > 10){
        console.log("big number")
}else{
        console.log("monkey")
}

// H. What's in Your Closet?
const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        "right sock",
        "Per Scholas hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
      ];
const thomsCloset = [
        [// These are Thom's shirts
          "grey button-up",
          "dark grey button-up",
          "light blue button-up",
          "blue button-up",
        ],
        [// These are Thom's pants
          "grey jeans",
          "jeans",
          "PJs"
        ],
        [// Thom's accessories
          "wool mittens",
          "wool scarf",
          "raybans"
        ]
      ];
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
kristynsCloset.splice(6,0,"raybans");
kristynsCloset.splice(5,1,"stained knit hat")
console.log("Thom is wearing a " + thomsCloset[0][1] + " paired with some " + thomsCloset[1][2] + " and fancy " + thomsCloset[2][2]);
thomsCloset[1].pop();
thomsCloset[1].push("Footie Pajamas");
console.log(thomsCloset);

/**************************************SECTION IV: Functions*********************************/
// A. printGreeting
function printGreeting(name){
    console.log("Hello there, " + name + ".");
}
printGreeting("Bob");
// B. printCool
function printCool(name){
    console.log(name + " is cool.");
}
printCool("Bob");

// C. calculateCube
function calculateCube(number){
   let cube = number * number * number;
   console.log(cube);
}
calculateCube(3);

// D. isVowel
function isVowel(character){
    let input = character.toLowerCase();
    if(input == "a" ||input == "e" || input == "i" || input == "o" || input == "u"){
           return true;
}else{
   return false;
}
}
let a1 = isVowel("a");
let b1 = isVowel("b");
console.log(a1);
console.log(b1);

// E. getTwoLengths
function getTwoLengths(string1,string2){
    let lengths = [string1.length];
    lengths.push(string2.length);
    return lengths;
}
let test = getTwoLengths("one","four");
console.log(test);

// F. getMultipleLengths
function getMultipleLengths(array){
    let arrayLength = [];
    for(i=0; i<array.length; i++) {
            arrayLength.push(array[i].length);
    }
    return arrayLength;
}
let test1 = getMultipleLengths(["one","two","three"]);
console.log(test1);

// G. maxOfThree
function maxOfThree(a,b,c){
    if(a>b  && a>c){
    return a;
    }else if(b > a && b > c){
    return b;
    }else if(c > a && c > b){
    return c;
    }else if (a == b || a == c){
    return a;
    }else if (b == c){
    return c;
    }else{
            return "not valid"
    }
}
let test3 = maxOfThree(1,2,5);
console.log(test3);

// H. printLongestWord
function printLongestWord(array){
    let word ="";
    for(let i = 0; i < array.length; i++){
            if (word.length < array[i].length){
                    word = array[i];
            }
    } 
    return word;
}       
let test4 = printLongestWord(["two","three","elephant","ant"]);
console.log(test4);

/****************************************SECTION V: Objects*******************************************/
// A. Make a User Object
const user = {name:"Muchi", email:"muchi@gora.com", age: 23, purchased:[]};

// B. Update the User
user.email = "ripi@new.com"
user.age++;
console.log(user);

// C. Adding Keys and Values
user.location = "Los Angeles";
console.log(user)

// D. Shopaholic!
user.purchased.push("Carbohydrates");
user.purchased.push("Peace of Mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

// E. Object within an Object
user.friend = {name:"Friend",age:24,location:"San Diego",purchased:[]}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

// F. Loops
function purchased(arr){
for (let i = 0; i < arr.length; i++){
  console.log(arr[i])  
}
}
purchased(user.purchased);
purchased(user.friend.purchased);

// G. Functions Operating on Objects
function updateUser(){
   user.age++;
   user.upper =  user.name.toUpperCase();
   user.name = user.upper;
   delete user.upper;
}
updateUser();
console.log(user);

function oldAndLoud(person){
    person.age++;
    person.upper =  person.name.toUpperCase();
    person.name = person.upper;
    delete person.upper;
}
oldAndLoud(user);
console.log(user);
