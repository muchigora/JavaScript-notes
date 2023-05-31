// 1 Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if...else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    }else if (num1 < num2) {
        return num2;
    }else {
        return num1;
    }
};
maxOfTwoNumbers(7, 4);

//2 Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThreeNumbers = function(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }else if (num2 > num1 && num2 > num3) {
        return num2;
    }else if (num3 > num1 && num3 > num2) {
        return num3;
    }else {
        return num1;
    }
};
// console.log(maxOfThreeNumbers(10, 11, 10));

//3 Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;
    }else {
        return false;
    }
}
// console.log(isCharAVowel('x'));

//4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
// console.log(sumArray([2, 4, 5]));

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
};
// console.log(multiplyArray([2, 4, 5]));

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function() {
    return arguments.length;
};
// console.log(numArgs("b", "c", "d"));

//7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(str) {
    return str.split('').reverse().join('');
};
// console.log(reverseString('rockstar'));

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function(arr) {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }
    return longest;
};
// console.log(longestStringInArray(["TIMEDURIRANEROCKSTAR", "ROCKSTAR", "ROCKSTAR", "ROCKSTAR"]));

//9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

const stringsLongerThan = function(arr, num) {
    let longer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            longer.push(arr[i]);
        }
    }
    return longer;
};
// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

//10. Define a function, as a function expression, addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).

const addList = function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};
console.log(addList([1, 2, 3, 4, 5]));