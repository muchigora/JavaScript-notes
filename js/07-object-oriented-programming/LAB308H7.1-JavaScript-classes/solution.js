class Cat {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    speak(){
        console.log("Meow");
    }
    knockThingsOver(){
        console.log(`${this.name} the cat pushes a cup off the counter`);
    }
    scratch() {
        console.log(`${this.name} the cat starts scratching the cat post`);
    }
}
const felix = new Cat('Felix', 3, 'Maine Coon');
const simba = new Cat('Simba', 2, 'Persian');
console.log(felix);
console.log(simba);
felix.speak();
felix.scratch();
felix.knockThingsOver();
simba.speak();
simba.scratch();
simba.knockThingsOver();

class Pirate {
  constructor(name, age, weapon) {
    this.name = name;
    this.age = age;
    this.weapon = weapon;
  }
  speak() {
    console.log("Ahoy matey");
  }
  attack(otherPirates){
    console.log(`${this.name} uses his ${this.weapon} on his enemys!`);
  }
  eat(hasFood){
    if(hasFood) {
        console.log(`${this.name} chows on some grub`);
    }
  }
}

let jollyRoger = [new Pirate('Jimmy', 20, 'Pistol'), new Pirate('Daniel', 50, 'Sword'), new Pirate('Will', 15, 'Hammer')];
let blackPearl = [new Pirate('David', 20, 'Sword'), new Pirate('Marcus', 55, 'Knife'), new Pirate('Tyler', 35, 'Pistol')];

for(const pirate of jollyRoger) {
    console.log(`Name: ${pirate.name}, Age: ${pirate.age}, Weapon: ${pirate.weapon}`);
}