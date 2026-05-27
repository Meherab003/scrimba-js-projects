//PRACTICE TIME PART 2

// VIDEO: OBJECT AND FUNCTIONS
//  Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
// Create a function, logData(), that uses the person object to create a string in the following format:
// "Per is 35 years old and lives in Norway"
// Call the logData() function to verify that it works.

const person = {
	name: "Meherab",
	age: 23,
	country: "Bangladesh",
};
function logData() {
	const str =
		person.name +
		" is " +
		person.age +
		" years old and lives in " +
		person.country;
	console.log(str);
}
logData();

//VIDEO: IF...ELSE
// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

const age = 45;
if (age < 6) {
	console.log("Free");
} else if (age < 18) {
	console.log("Child Discount");
} else if (age < 27) {
	console.log("Student Discount");
} else if (age < 66) {
	console.log("Full Price");
} else {
	console.log("Senior Citizen Discount");
}

//  VIDEO: LOOPS AND ARRAY
/* Use a for loop to log the following to the console:
The 5 largest countries in the world in terms of population:
- China
- India
- United States
- Indonesia
- Pakistan
*/

const largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
for (let i = 0; i < largeCountries.length; i++) {
	console.log(largeCountries[i]);
}

//VIDEO: PUSH, POP, SHIFT, UNSHIFT CHALLENGE
// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

const largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries2.pop();
largeCountries2.shift();
largeCountries2.push("Pakistan");
largeCountries2.unshift("China");
console.log(largeCountries2);

//VIDEO: LOGICAL AND OPERATOR
// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

const dayOfMonth = 14;
const weekday = "Friday";
if (dayOfMonth === 13 && weekday === "Friday") {
	console.log("😱");
}

//VIDEO: ROCK, PAPER, SCISSOR WITH FOR LOOP
// Create a function that returns a random item from the array

const hands = ["rock", "paper", "scissor"];
function play() {
	return hands[Math.floor(Math.random() * 3)];
}
console.log(play());

//VIDEO: BINGO GAME🎉🎉🎉
//
const emojis = [
	"🐉",
	"🐥",
	"🐊",
	"💩",
	"🦍",
	"🐢",
	"🐩",
	"🦭",
	"🦀",
	"🐝",
	"🤖",
	"🐘",
	"🐸",
	"🕷",
	"🐆",
	"🦕",
	"🦁",
];

const stageEl = document.getElementById("stage");
const bingoCeleb = document.getElementById("bingo-celeb");
const bingoButton = document.getElementById("bingoButton");

bingoButton.addEventListener("click", () => {
	const emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
	const emoji1 = emojis[Math.floor(Math.random() * emojis.length)];
	const emoji3 = emojis[Math.floor(Math.random() * emojis.length)];
	stageEl.textContent = emoji1 + "  " + emoji2 + "  " + emoji3;
	if (emoji1 === emoji2 && emoji1 === emoji3) {
		bingoCeleb.textContent = "Bingooo!!!";
	} else {
		bingoCeleb.textContent = "";
	}
});

//VIDEO: SORTING FRUITS
// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

const fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
const appleShelf = document.getElementById("apple-shelf");
const orangeShelf = document.getElementById("orange-shelf");
const appleArray = [];
const orangeArray = [];

for (let i = 0; i < fruit.length; i++) {
	if (fruit[i] === "🍎") {
		appleArray.push("🍎");
		appleShelf.textContent += "🍎" + " ";
	} else if (fruit[i] === "🍊") {
		orangeArray.push("🍊");
		orangeShelf.textContent += "🍊" + " ";
	}
}
