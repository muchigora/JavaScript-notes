// console.log("test")

let titleEl = document.querySelector('#heading');
titleEl.style.color = "red";


let pEl = document.querySelector(".cool");
pEl.style.color = "blue";


const newLi = document.createElement("li");
newLi.innerText = "newLi appended!";

// window.onload = () => {
//     const heading = document.createElement("h1");
//     const headingText = document.createTextNode("Onload Heading!");
//     heading.appendChild(headingText);
//     document.body.appendChild(heading);
// }

/****************************ACCESSING Document Elements************************ */

let paragraph = document.getElementById("intro");
let div = document.querySelector(".list");
let h1 = document.querySelector("#heading");
let img = document.querySelector("img");
let pgph = document.querySelectorAll("p");


/***********************************READING ELEMENTS DATA************************* */
let display = document.querySelector(".cool").textContent;
let divDisplay = document.querySelector(".list").innerHTML;

/****************Modifying Document Elements ********************************/
document.querySelector("#dynamicContent").textContent = "This is dynamically modified paragraph"

div.innerHTML = `
                
                <table border="1" cellspacing="2px" cellpadding="5px">
                <header>
                    <strong>
                        Changed Content from list to table
                    </strong>
                </header>
                    <tr>
                        <td>1</td>
                        <td>Accessing DOM element</td>
                    </tr> 
                    <tr>
                        <td>2</td>
                        <td>Modifying DOM element</td>
                    </tr> 
                    <tr>
                        <td>3</td>
                        <td>Adding new DOM element</td>
                    </tr> 
                    <tr>
                        <td>4</td>
                        <td>Removing existing DOM element</td>
                    </tr> 
                </table>              
                `

