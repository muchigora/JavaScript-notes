// console.log("test")

let titleEl = document.querySelector('#heading');
titleEl.style.color = "red";


let pEl = document.querySelector(".cool");
pEl.style.color = "blue";


const newLi = document.createElement("li");
newLi.innerText = "newLi appended!";

window.onload = () => {
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("Onload Heading!");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
}

/****************************ACCESSING Document Elements************************ */

//getElementById("id-name");
let paragraph = document.getElementById("intro");
console.log(paragraph);

//querySelector();
let div = document.querySelector(".list");
console.log(div);

let h1 = document.querySelector("#heading");
console.log(h1);


