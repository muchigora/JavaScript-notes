/**
 * PASS BY VALUE
 * all primitive data types are passed by value, which means that:
 * => A copy of the original value is made in a new location in memory.
 * => That new value is assigned to a new variable (in the example below, the function-scoped myVar).
 * => That new variable is independant of the old one. Any changes made to one will not be reflected in another.
 * PS: Primitive data types are string, number, biginit, boolean, undefined,symbol,null
 */



let myVar = 20;
function passBy(myVar){
    myVar = myVar * 10;
    return myVar;
}
// console.log(passBy(myVar));

console.log(myVar);            // 20
console.log(passBy(myVar));    // 200
console.log(myVar);            //20


let newVar = 20;
function passBy2(x){
    x = x * 10;
}

