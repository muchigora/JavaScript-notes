
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

/**
 * every() Method:
 * Determine if every number is greater than or equal to 0.
 * Determine if every word shorter than 8 characters.
 */

// const isGreaterThanZero1 = (myNum) => myNum >= 0;
// console.log(nums.every(isGreaterThanZero1));

function isGreaterThanZero(num) {
    if (num >= 0) {
        console.log(true);
    }
        else console.log(false);
}
let check = nums.every(isGreaterThanZero);

const shorterThanEight = (word) => {
    if(word.length < 8)
        console.log(true);
     else 
        console.log(false);
}
let myWord = panagram.every(shorterThanEight);



/**
 * Filter() Method
 * filter the array for numbers less than 4.
 * Filter words that have an even length.
 */

// function lessThanFour(num){
//     return num < 4;     
// }

const lessThanFour = (num) => num < 4;
const numsLessThanFour = nums.filter(lessThanFour);
console.log(numsLessThanFour);

const evenLength = (word) => word.length % 2 === 0;
const evenLengthArray = panagram.filter(evenLength);
console.log(evenLengthArray);


/**
 * Find()
 * Find the first value divisible by 5.
 * Find the first word that is longer than 5 characters
 */
const findDivisibleByFive = (num) => num % 5 === 0;
const divisibleByFiveArray = nums.find(findDivisibleByFive);
console.log(divisibleByFiveArray);

// const longerThanFive = (word) => word.length > 5;
// const longerThanFiveArray = panagram.find(longerThanFive);

const longerThanFive = panagram.find(word => word.length > 5);
console.log(longerThanFive);


/**
 * Find Index
 * findIndex() method:
 * Find the index of the first number that is divisible by 3.
 * Find the index of the first word that is less than 2 characters long.
 */

// const divisibleByThree = (num) => num % 3 === 0;
const divisibleByThree = nums.findIndex((num) => num % 3 === 0);
console.log(divisibleByThree);

const lessThanTwo = panagram.findIndex((word) => word.length < 2);
console.log(lessThanTwo);


/**
 * For Each: forEach()
 * Log each value of the array multiplied by 3.
 * Log each word with an exclamation point at the end of it.
 */

const multiplyByThree = nums.forEach((num) => console.log(num * 3));

const addExclamationPoint = panagram.forEach((word) => console.log(`${word}!`));




/**
 * Map
 * Make a new array of each number multiplied by 100.
 * Make a new array of all of the words in all uppercase.
 */

const multiplyByHundred = nums.map((num) => num * 100);
console.log(multiplyByHundred);

const wordsToUpperArray = panagram.map((word)=> word.toUpperCase());
console.log(wordsToUpperArray);


/**
 * Some
 * some() method
 * Find out if some numbers are divisible by 7.
 * Find out if some words have the letter a in them.
 */
const evenNumsPresent = nums.some((num)=> num % 2 === 0);
console.log(evenNumsPresent);

const wordWithA = panagram.some((word) => word.includes('a'));
console.log(wordWithA);

