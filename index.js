// Create two variables, firstCard and secondCard and set their values to a random number between 2-11

let firstCard = 4;
let secondCard = 6;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Congratulations! You've got BlackJack");
} else {
  console.log("You're out of the game!");
}

console.log(sum);
