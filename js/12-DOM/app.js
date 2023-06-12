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
// console.log(paragraph);

//querySelector();
let div = document.querySelector(".list");
// console.log(div);

let h1 = document.querySelector("#heading");
// console.log(h1);

let img = document.querySelector("img");
// console.log(img);

let pgph = document.querySelectorAll("p");
// console.log(pgph);





/***********************************READING ELEMENTS DATA************************* */
//textContent();
let display = document.querySelector(".cool").textContent;
console.log(display);


//innerHTML();
let divDisplay = document.querySelector(".list").innerHTML;
console.log(divDisplay);



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

