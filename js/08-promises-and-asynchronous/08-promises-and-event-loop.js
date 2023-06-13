const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log("Cat"));

Promise.resolve()
  .then(() => console.log("Dog"))
  .then(() => console.log("Cow"));

console.log("Bird");