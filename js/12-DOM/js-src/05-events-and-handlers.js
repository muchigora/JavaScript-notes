/****************************EVENT HANDLERS***********************************/
console.log("test - event handlers");

let lName = document.getElementById("lname");
lName.onfocus = function(){
    this.style.backgroundColor = 'yellow';
}
lName.onblur = function(){
    this.style.backgroundColor = "white";
}

let h2 = document.querySelector("#registration");
h2.onmouseover = function(){
    this.style.color = "red";
}
h2.onmouseout = function(){
    this.style.color = "black";
}



/********************************addEventListener() Method******************************/

document.getElementById("btn").addEventListener("click",displayAlert);
function displayAlert(){
    alert("Submit button clicked");
}

document.getElementById("btn").addEventListener("click", (()=>{
    alert("Submit button clicked")
}));

document.getElementById("email").addEventListener("focus", function(){
    this.style.backgroundColor = "yellow";
    }
);
document.getElementById("email").addEventListener("blur", (function(){
    this.style.backgroundColor = "white";
}));