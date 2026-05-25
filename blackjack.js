//Blackjack game JavaScript file
// VIDEO: Add the firstCard, secondCard  and sum
// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
const secondCard = 0;
const sum = firstCard + secondCard;
let hasBlackjack = false; //VIDEO: add a hasBlackjack variable with boolean value
let isAlive = true; //VIDEO: add the isAlive variable with initial value as true;
//VIDEO: if...else condition
if (sum < 21) {
	console.log("Do you want to draw a new card?🙂");
} else if (sum === 21) {
	console.log("Wohoo! You've got the Blackjack!🥳");
	hasBlackjack = true;
} else {
	console.log("You're out of the game!😭");
	isAlive = false;
}
console.log(hasBlackjack);

//VIDEO: [Challenge] if...else statement
// Check if the person is old enough to enter the club (21)
// Log a suitable message to the console in both cases
// const age = 23;
// if (age < 21) {
// 	console.log("You're not old enough to join the club😑");
// } else {
// 	console.log("Welcome to the Blackjack Club!👋");
// }

//VIDEO: [Challenge] birthday card from the king on the 100th birthday;
// if (age < 100) {
// 	console.log("Not eligible!");
// } else if (age === 100) {
// 	console.log("Here is your birthday card from the king!");
// } else {
// 	console.log("Not eligible! You've already gotten one.");
// }

//VIDEO: BOOLEANS🎉
// boolean can be either true or false;
// 1. Ronaldo check
// const isRonaldo = true;
// function goatCheck() {
// 	if (isRonaldo) {
// 		console.log("You're the greatest of all time🐐");
// 	} else {
// 		console.log("You're not him👶");
// 	}
// }
// goatCheck();
//2.
// let hasDiscount = true;
// function processOrder() {
// 	if (hasDiscount) {
// 		console.log("Discount added to the oder!");
// 		hasDiscount = false; //changes the value to false
// 	} else {
// 		console.log("No discount applied");
// 	}
// }
// processOrder();
// processOrder();
