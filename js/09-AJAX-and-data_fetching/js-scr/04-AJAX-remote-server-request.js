/*****************AJAX REQUEST TO A WEB API ************************************/

let countriesContainer = document.querySelector(".countries");

function getCountry(countryName){
    //Step1: create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();


    //Step2: create Request with open() method
    xhr.open("GET", "https://restcountries.com/v3.1/name/"+countryName, true);

    //Step3: send request send() method
    xhr.send();

    //Step4: load event handling
    xhr.addEventListener("load", function(){
        // console.log(xhr.responseText); //test data in console
        //convert JSON Data to JavaScript Object
        let [data] = JSON.parse(xhr.responseText);
        let countryData = data;
        
        console.log(data);
      

        //create html template for diplaying this data
        let html = `
            <article class="country">
                <img class="country_img" src="${data.flags.png}"/>
                <div class="country_data">
                    <h3 class="country_name">${data.name.official}</h3>
                    <h4 class="country_region">${data.region}</h4>
                    <p class="country_row"><span class="ion-ios-people"></span>${data.population}</p>
                    <p class="country_row"><span class="ion-ios-mic">${data.languages.eng}</span>
                    <p class="country_row"><span class="ion-social-usd>${data.currencies}</span>
                </div>
            </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
    });
}
getCountry("usa")
getCountry("zimbabwe")
getCountry("spain")
getCountry("mexico")
getCountry("nigeria")