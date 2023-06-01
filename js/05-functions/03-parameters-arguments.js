

//
function fuddify(speech){
    // if parameter is not a streeng retrun an error
    if(typeof speech !== 'string'){
        console.error('Not a string');
        return;
    }
    speech = speech.replace(/r/g, "w");
    speech = speech.replace(/R/g, "w");
    return speech;
}
let utterance = fuddify("yes jsgd kajhs ba");
console.log(utterance);


//
function isEven(num){
    return num % 2 === 0;
}
let myNum = isEven(6);
console.log(myNum);


// default parameters
function saySomething(what, howMany) {
    // create default arguments for parameters
    what = (typeof what !== "undefined") ? what : "Default what";
    howMany = (typeof howMany !== "undefined") ? howMany : 10;

    // for(let i=0; i<howMany; i=+1){
    //     i++ 
    //     console.log(`${what} (${[i]})`);
    // }
    // console.log(`${what} (${howMany})`);
}
saySomething()
