// Function to generate a random number between a minimum and maximum value
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Ship class representing both the player's spaceship and alien ships
  class Ship {
    constructor(hull, firepower, accuracy) {
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
  
    // Method to check if the ship is destroyed
    isDestroyed() {
      return this.hull <= 0;
    }
  
    // Method to calculate the chance of a successful hit
    calculateHitChance() {
      return Math.random() < this.accuracy;
    }
  
    // Method to attack a target ship
    attack(target) {
      console.log("Attacking the target ship!");
      if (this.calculateHitChance()) {
        console.log("Attack successful!");
        target.hull -= this.firepower;
      } else {
        console.log("Attack missed!");
      }
    }
  }
  
  // Create the player's spaceship
  const playerShip = new Ship(20, 5, 0.7);
  
  // Create the array to hold the alien ships
  const alienShips = [];
  
  // Generate the alien ships with random properties
  for (let i = 0; i < 6; i++) {
    const hull = getRandomNumber(3, 6);
    const firepower = getRandomNumber(2, 4);
    const accuracy = getRandomNumber(0.6, 0.8);
    alienShips.push(new Ship(hull, firepower, accuracy));
  }
  
  // Function to simulate a game round
  function playRound() {
    console.log("Player's turn:");
    playerShip.attack(alienShips[0]);
  
    if (alienShips[0].isDestroyed()) {
      console.log("Alien ship destroyed!");
      alienShips.shift(); // Remove the destroyed ship from the array
  
      if (alienShips.length === 0) {
        console.log("Congratulations! You destroyed all alien ships. You win!");
        return;
      }
  
      const retreat = window.prompt(
        "Do you want to attack the next ship or retreat? (attack/retreat)"
      );
  
      if (retreat.toLowerCase() === "retreat") {
        console.log("You retreated. Game over.");
        return;
      }
    }
  
    console.log("Alien's turn:");
    for (let i = 0; i < alienShips.length; i++) {
      const currentAlienShip = alienShips[i];
      if (!currentAlienShip.isDestroyed()) {
        currentAlienShip.attack(playerShip);
  
        if (playerShip.isDestroyed()) {
          console.log("Your spaceship was destroyed. Game over.");
          return;
        }
      }
    }
  
    playRound(); // Continue to the next round
  }
  
  // Start the game
  playRound();
  