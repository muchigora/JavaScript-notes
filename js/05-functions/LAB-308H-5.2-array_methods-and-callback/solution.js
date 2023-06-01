
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

/**
 * every() Method:
 * Determine if every number is greater than or equal to 0.
 * Determine if every word shorter than 8 characters.
 */

// const isGreaterThanZero1 = (myNum) => myNum >= 0;
// console.log(nums.every(isGreaterThanZero1));

// function isGreaterThanZero(num) {
//     if (num >= 0) {
//         console.log(true);
//     }
//         else console.log(false);
// }
// let check = nums.every(isGreaterThanZero);

const shorterThanEight = (word) => {
    if(word.length < 8)
        console.log(true);
     else 
        console.log(false);
}
// let myWord = panagram.every(shorterThanEight);



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
// console.log(numsLessThanFour);

const evenLength = (word) => word.length % 2 === 0;
const evenLengthArray = panagram.filter(evenLength);
// console.log(evenLengthArray);


/**
 * Find()
 * Find the first value divisible by 5.
 * Find the first word that is longer than 5 characters
 */
const findDivisibleByFive = (num) => num % 5 === 0;
const divisibleByFiveArray = nums.find(findDivisibleByFive);
console.log(divisibleByFiveArray);

   


