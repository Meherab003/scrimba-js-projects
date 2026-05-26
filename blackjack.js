//Blackjack game JavaScript file
// VIDEO: Add the firstCard, secondCard  and sum
// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
//VIDEO: what is an Array
const cards = []; //ordered list of cards (this is an array)
let sum = 0;
let hasBlackjack = false; //VIDEO: add a hasBlackjack variable with boolean value
let isAlive = false; //VIDEO: add the isAlive variable with initial value as false;
let message = ""; //VIDEO: add a message variable with empty string;
const messageEl = document.getElementById("message-el"); //VIDEO: rending the message in message-el element
// const sumEl = document.getElementById("sum-el");
const sumEl = document.querySelector("#sum-el"); //VIDEO: rending the sum in sum-el element
const cardsEl = document.querySelector("#cards-el"); //VIDEO: rending the sum in sum-el element

//VIDEO: object👀
const player = {
	name: "Meherab",
	chips: 145,
};
const playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
	const randomNumber = Math.floor(Math.random() * 12 + 1);
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

//VIDEO: make the start game button work with startGame() function
function startGame() {
	isAlive = true;
	const firstCard = getRandomCard();
	const secondCard = getRandomCard();
	sum = firstCard + secondCard;
	cards.push(firstCard, secondCard);
	rendergame();
}

// VIDEO: the render the game
function rendergame() {
	cardsEl.textContent = "Cards: "; // to erase the previous loop result
	//renders firstCard and secondCard only
	// cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
	// VIDEO: use a for loop to renders all the cards
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ", ";
	}

	sumEl.textContent = "Sum: " + sum;
	//VIDEO: if...else condition
	if (sum < 21) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got the Blackjack!";
		hasBlackjack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

//VIDEO: add new card function and render the new sum and message
function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		message = "Drawing a new from the deck";
		messageEl.textContent = message;
		const card = getRandomCard();
		sum += card;
		cards.push(card);
		rendergame();
	} else {
		message = "You're out of the game!";
		messageEl.textContent = message;
	}
}

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

//from the VIDEO: what is an Array

// array is a list of items/variables
// array is 0 indexed; meaning the first variable of an array is the 0th variable and the second one is the 1th variable.
// even though array is 0 indexed, the length of an array is the number of element inside the array
// e.g:
//      const arr = ["1, the 0th", "2, the 1st", "3, the 2nd", " 4, the 3rd"];
//      console.log(arr.length); //4
// array is composite/complex datatype
// array push and pop method: push method pushes an element in end of an array and pop method removes one.
//  const arr = [1, 2, 3];
//  arr.push(4);
//  console.log(arr);
//  arr.pop(4);
//  console.log(arr);

// VIDEO: LOOP🎉 [for loop]
//      START            FINISH       STEP SIZE
// for (let count = 10; count <= 100; count += 10) {
// 	console.log(count);
// }

// const cards1 = [7, 3, 9]; //VIDEO: array-based for loop
// for (let i = 0; i < cards1.length; i++) {
// 	console.log(cards1[i]);
// }

//VIDEO:  rendering a greetings from an array with for loop
// const sentence = ["hello", "my", "name", "is", "Meherab"];
// const greetingEl = document.querySelector("#greeting-el");
// for (let i = 0; i < sentence.length; i++) {
// 	greetingEl.textContent += sentence[i] + " ";
// }

//VIDEO: returning value of a function; return helps a value inside of a function to be used outside
// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
// const player1Time = 102;
// const player2Time = 107;
// function getFastestRaceTime() {
// 	if (player1Time < player2Time) {
// 		return player1Time;
// 	} else if (player2Time < player1Time) {
// 		return player2Time;
// 	} else {
// 		return player1Time;
// 	}
// }
// function getTotalRaceTime() {
// 	return player1Time + player2Time;
// }

// const totalRaceTime = getTotalRaceTime();
// console.log(totalRaceTime);

// VIDEO: Math.random(); returns a number between 0.000 to 0.9999......
// VIDEO: Math.floor(); cut off the decimals of a number like 5.412 to 5 and 9.999999999999 to 9

//VIDEO: making a dice function with Math.random() and Math.floor()
// function rollDice() {
// 	return Math.floor(Math.random() * 6 + 1);
// }
// const roll = rollDice();
// console.log(roll);

//VIDEO: the logical operators
//VIDEO: the logical And operators (&&); means multiple conditions, and when both or all the conditions are true only then the it will execute
//VIDEO: the logical or operators (||). This means multiple conditions, and if one them is true then it will execute

//VIDEO: object; it can store any datatype including another object. an object has two things one is property and the other is value.

// const obj = {
// 	//PROPERTY: VALUE
// 	propName: "val",
// };

//example:
// const castle = {
// 	name: "st. ronaldo el bicho",
// 	established: 1987,
// 	isStanding: true,
// 	prime: [2008, 2014, 2017, 2022],
// };

// console.log(castle.name + " " + castle.established);

//VIDEO: Methods on object
// const konsole = {
// 	//this is a method
// 	lowg: () => {
// 		console.log("Hello earth");
// 	},
// };
// konsole.lowg();
// everything in JavaScript is an object

//VIDEO: recap
// 1. array
// 2. object
// 3. if else statement
// 4. comparison operators
// 5. logical operators
// 6. for loops
// 7. the Math object
// 8. return statement
