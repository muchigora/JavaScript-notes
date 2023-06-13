// Create a Promise that resolves after one second.
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log("Guess this worked!"));
    }, 3000);
});

// Add some then() methods to handle additional tasks.
myPromise
    .then((x) => x + console.log(' Again?'))
    .then((x) => x + console.log(' Third time!'))
    .then((x) => x + console.log(' Promises are cool.'))
    .catch((err) => {
        console.error(err);
    })