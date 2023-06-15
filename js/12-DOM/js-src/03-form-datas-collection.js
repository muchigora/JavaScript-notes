/***************************COLLECTING DATA FROM FORMS***************************************/

///////////COLLECTING FROM TEXTBOXES///////////////////////////////////////////////////////////
//FIRST NAME ID = fname
//last name id = lname
//email id = email

let fname = document.getElementById("fname").value;
console.log(fname);

let lname = document.getElementById("lname").value;
console.log(lname);

let email = document.getElementById("email").value;
console.log(email);


/////////////DATA FROM A DROP-DOWN LIST///////////////////////////////////////////////////
let country = document.querySelector("#country").value
console.log(country);


//////////////RADIO BUTTON//////////////////
let gender = document.querySelector('input[name = "gender"]:checked').value;
console.log(gender);


//////////////////CHECK BOXES////////////////////////////////////////

//create an array of hobbies to store all the value of checked checkboxes
let hobbies = [];
// read all checkboxes with a specific name (in this case hobbies) and store them in a variable, using the methd getElementsNyName() will return all the elements with the given name
let checkboxes = document.getElementsByName("hobbies[]")
//select only the checked check boxes using a for loop
for (let i = 0; i < checkboxes.length; i++){
    if(checkboxes[i].checked){
        hobbies.push(checkboxes[i].value); //pushes values of checked elements to hobbies array
    }
}
console.log(hobbies);
