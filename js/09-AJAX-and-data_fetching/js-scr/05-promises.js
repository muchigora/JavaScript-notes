/************************PROMISES*********************************************/

// let promise = new Promise();

/**
 * creating a new promise
 * a promise should always have an executor function, therefore new Promise(); alone will return an error
 * the executor function executes immediately
 */
let promise = new Promise(function(){
    console.log("executor function executed");    
});
console.log(promise); 

//this promise is pending and results undefined because it does not return any data.


/************RESOLVED AND REJECTED PROMISED**********************************/
// promise parameters (resolved, rejected) are call back functions 
promiseDefined = new Promise(function(resolved, rejected){
    resolved([20,40,36,47]);
    rejected("something went wrong");
});
console.log(promiseDefined);


//Requesting AJAX DATA USING A PROMISE
let promiseNew = new Promise(function(resolved, rejected){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.send();
    xhr.onload = function(){
        if(xhr.statusText === "OK"){
            resolved(xhr.responseText);
        }else{
            rejected("Something went wrong. Please try again later");
        }
    }
});

/**
 * then() method
 * used for handling resolved data
 */
promiseNew.then(function(data){
    console.log(data);
}, function(error){   //error handling
    console.log(error);
});

/**
 * catch() methode
 * used for handling rejected data
 */

// promiseNew.catch(function(error){
//     console.log(error);
// });



console.log(promiseNew);


