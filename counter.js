// document.getElementById("count-el").innerText = 5;
// const count = 0;
// console.log(count);
// const myAge = 23;
// console.log(myAge);

// >>>>>>>>>>>>>>>>>>>>>>>>>>
//VIDEO: Basic mathermatical problems:
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

// const myAge = 23;
// const humanDogRatio = 7;
// const myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

//>>>>>>>>>>>>>>>>>>>>>>>>>>
// VIDEO: Reassining and incrementing
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
//
// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// VIDEO: Adding a button
// added a button with id="increment-btn"

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// VIDEO: The onclick eventListener
// 1. intialize the count as 0
// 2. listen for clicks on the increment button
// 3. increment the count variable when the button is clicked
// 4. change the count-el in the HTML to reflect the new count

// function increment() {
// 	console.log("Button was clikced");
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// VIDEO: Using function to write less code
// function countdown() {
// 	console.log(5);
// 	console.log(4);
// 	console.log(3);
// 	console.log(2);
// 	console.log(1);
// }

// countdown();
// countdown(); //dont have to rewrite the same consoles again
// countdown(); //dont have to rewrite the same consoles again(2)

//>>>>>>>>>>>>>>>>>>>>>>>>>>
// VIDEO:Test
// function printNumber() {
// 	console.log(42);
// }
// printNumber();

//Test:
// write a function that logs the sum
// const lap1 = 34;
// const lap2 = 33;
// const lap3 = 36;

// function printLaps() {
// 	const totalLaps = lap1 + lap2 + lap3;
// 	console.log(totalLaps);
// }
// printLaps();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// VIDEO: INCREMENT ON CLICKS && DISPLAY THE COUNT
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// const countEl = document.getElementById("count-el");
// let count = 0;
// function increment() {
// 	count = count + 1;
// 	countEl.innerHTML = count;
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// VIDEO: THE DOCUMENT OBJECT MODEL(DOM)👑
// function save() {
// 	console.log(countEl.innerText);
// }

//VIDEO:String datatype to show/work with texts
// const myString = "This is a text and its a string datatype";
// console.log(myString);

//VIDEO: BETWEEN NUMBERS AND STRINGS
// const myStr = "20";
// const myNum = 26;
// const both = myStr + myNum;
// console.log(both); //if a number is added with string, the result will be a string not a number.

//VIDEO: RENDER A WELCOME MESSAGE
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText
// const welcomeEl = document.getElementById("welcome-el");
// const name = "Meherab";
// const greeting = "Welcome to the bus  ";
// welcomeEl.innerText = greeting + " " + name;
// if I want to add an emoji
// welcomeEl.innerText = welcomeEl.innerText + "👋";
// or more concise way
// welcomeEl.innerText += "👋";

//VIDEO: CREATE A SAVE FEATURE
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
	count += 1;
	countEl.innerText = count;
}

function save() {
	const countStr = count + " - ";
	// saveEl.innerText = countStr; //This will not show the spaces in the element;
	saveEl.textContent += countStr; //This will show the text as it is including spaces;
	count = 0;
	countEl.innerText = count;
}
//with that being done, the first project is finished
// what is learned in this project:
// 1. script tag
// 2. variable
// 3. number
// 4. string
// 5. console.log()
// 6. functions
// 7. DOME
// 8. getElementById()
// 9. innerText
// 10. textContent
