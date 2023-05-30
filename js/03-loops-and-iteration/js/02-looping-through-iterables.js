

//  string are iterable data-types 
 const str = "Hello Muchi";
 
 // given the abouve string, print each data type individually
for (let i = 0; i <str.length; i++) {
    // console.log(str[i]);
}

//iterator
let myArray = [1, 2, 3, 4, 5, 6];
let iterator = myArray[Symbol.iterator]();  //creates an iterator from the array
for(let element of iterator){ //iterating through the array
    console.log(element);
}

