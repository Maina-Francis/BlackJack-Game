// Create two variables, firstCard and secondCard and set their values to a random number between 2-11

let firstCard = 20;
let secondCard = 1;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

//Store the message paragraph in a variable called messageEl
let messageEl = document.getElementById("message");

//store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");

//BlackJack logic
function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Congratulations! You've got BlackJack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;

  //   render the sum on the page
  sumEl.textContent = `Sum: ${sum}`;
}
