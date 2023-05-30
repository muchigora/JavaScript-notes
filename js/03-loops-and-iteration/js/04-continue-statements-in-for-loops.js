
// for in loop 
const str = 'Hello Muchi';

for (const i in str){
    // console.log(str[i]);
}

// for of loop looping though objects:
const person = {firstName: 'John', 
                lastName: 'Doe',
                age: 30
            };
let value = "";
for(let key in person){
    value += person[key] + " ";
    // console.log(value)
}
// document.getElementById("for-in-object").innerHTML = value;



// Array.forEach()
const numbers = [45, 4, 9, 16, 25];
let arrayElementValue = "";
numbers.forEach(myFunction);

function myFunction(value, index, array){
    arrayElementValue += value + " ";
    // console.log(arrayElementValue);
}


// for ... of loop 
const st = 'Hello Muchi';
for(const c of st){
    // console.log(c);
}

const cars = ["BMW", "Audi", "Mini"]
let text = "";
for (let x of cars){
    text += x;
    // console.log(text);
}

const s = "Hello World";

for (let i = 0; i < s.length; i++) {
	if (s[i] == "l") {
		continue;
	}

	// console.log(s[i]);
}

const siri = "Hello World";

for (const i in siri) {
	if (siri[i] == "l") {
		continue;
	}

	// console.log(siri[i]);
}

for (const c of siri) {
	if (c == "l") {
		continue;
	}

	console.log(c);
}