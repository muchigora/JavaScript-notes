// console.log("test");
/******AJAX CALL & XMLHttpRequest*************************/
document.getElementById("btn-load").addEventListener("click", getProducts)

let div = document.querySelector(".product")

//function that makes and AJAX call
function getProducts(){
    //Step 1: create an XMLHttpRequest OBJECT aka xhr
    let xhr = new XMLHttpRequest();

    //Step 2: create the request on xhr. Use open() method
    /**OPEN METHOD TAKES 5 PARAMETERS
     * parameters taken by the open() method
     * 1st parameter: is a method type, methods used are GET (request data), POST (used to send data), UPDATE, DELETE
     * 2nd parameter: url refers to the filepath from where the data is requested
     * 3rd parameter: sync /async => whether you want the data in a synchronous way or asynchronous way. asynchronous = true, synchronous = false
     * 4th parameter:userid (optional)
     * 5th parameter: password (optional)
     */
    xhr.open("GET", "./assets/products.json", true);

    //Step 3: send request
    /**
     * request is send on xhr variable
     * use send() method
     * if requesting pass no parameters in send() method, you know when GET is in open() method
     * if sending data, use 'data' method as a parameter, you know when POST is in open() method
     */
    xhr.send();

    //Step 4: progress event
    /**
     * this is what display while loading in is progress, whether an image, or a test
     */
    xhr.onprogress = function(){
        div.textContent = "Loading ...";
    }

    // step 5: when loading is complete, definie what happens using omload() method
    xhr.onload = function(){
        // convert JSON data to JS Object, use JSON.parse() method
        let products = JSON.parse(xhr.responseText);
        //destructure a JS Object to a JS Array
        let {arrayOfproducts}=products;      
        // console.log(arrayOfproducts); 
        
        arrayOfproducts.forEach((element) => {
            let html = `
                <div style ="display:flex; font-size:14; height:130px; margin:20px 10px;">
                    <div>
                        <img src="${element.imgUrl} heigh="100" width="180">
                    </div>
                    <div style="padding: 5px 10px;">
                        <p>
                            ${element.name}
                        </p>
                    </div>
                    <div style="font-size:12px; padding: 5px 10px">
                        <p>
                            ${element.description}
                        </p>
                    </div>
                    <div style="padding: 5px 10px">
                        <p>
                            ${element.price}
                        </p>
                    </div>
                </div>
            `;
            div.insertAdjacentHTML('beforeend', html);
        });

    }
}


/**
 * 
 *   
        arrayOfProducts.forEach((element)=>{
            let html = `
                <div style ="display:flex; font-size:14; height:130px; margin:20px 10px;">
                    <div>
                        <img src="${element.imgUrl} heigh="100" width="180">
                    </div>
                    <div style="padding: 5px 10px;">
                        <p>
                            ${element.name}
                        </p>
                    </div>
                    <div style="font-size:12px; padding: 5px 10px">
                        <p>
                            ${element.description}
                        </p>
                    </div>
                    <div style="padding: 5px 10px">
                        <p>
                            ${element.price}
                        </p>
                    </div>
                </div>\
            `;           
            div.insertAdjucentHTML('beforeend', html);

        });
 */