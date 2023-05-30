/**
 * concat()
 * merges  arrays
 * creates a new array by merging (concatenating) existing arrays
 */

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChidren = myGirls.concat(myBoys);
console.log(myChidren);

const girls = ["Cecilie", "Lone"];
const boys = ["Emil", "Tobias", "Linus"];
const trans = ["Robin", "Morgan"]
const chidren = girls.concat(boys, trans);
console.log(chidren);