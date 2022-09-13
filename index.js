// Create two variables, firstCard and secondCard and set their values to a random number between 2-11

let firstCard = 11;
let secondCard = 1;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

//BlackJack logic
if (sum <= 20) {
  message = "Do you want to draw a new card?";
} else if (sum === 21) {
  message = "Congratulations! You've got BlackJack";
  hasBlackJack = true;
} else {
  message = "You're out of the game!";
  isAlive = false;
}

console.log(sum);
console.log(message);
