// Create two variables, firstCard and secondCard and set their values to a random number between 2-11

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

//Store the message paragraph in a variable called messageEl
let messageEl = document.getElementById("message");

//store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");

//store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards");

//startGame function
function startGame() {
  renderGame();
}
//BlackJack logic
function renderGame() {
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

  //render the cards value on the page
  cardsEl.textContent = "Cards: ";
  //   renders out all the cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

//New Card Function
function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

//random card generator
function getRandomCard() {
  //random number between 1-13
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  //Assuming ACE =11
  if (randomNumber === 1) {
    return 11;
  }
  // Jack, king and queen =10
  else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
