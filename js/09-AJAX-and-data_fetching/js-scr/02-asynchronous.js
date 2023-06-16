console.log("TEST-ASYNCHRONOUS")
/******************ASYNCHRONOUS PROGRAMMING ******************************/

/**
 * Asynchronous
 * Can execute a piece of code asynchronously in the background - can execute several ststaements at a time
 * does not block the xexution of the next line opf code
 * 
 * there are many functions and APIs provided by browsers WebAPI,
 * They anable asynchronous execution in the background without blocking code execution. e.g., setTimeout() function
 * 
 * */

let str1 = "Good morning";
console.log(str1);
setTimeout(() => {
    alert(`Synchrounous Window Alert, Allows "Have A Good Day to execute"`)    
}, 5000);
console.log("Have a good day");