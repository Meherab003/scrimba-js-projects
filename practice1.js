//Practice1:
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
// Call the functions to that the line below logs out 10
// let myPoints = 3;
// function add() {
// 	myPoints += 3;
// }
// function remove() {
// 	myPoints -= 1;
// }
// add();
// add();
// add();
// remove();
// remove();
// console.log(myPoints);

//rendaring error
const errorEl = document.getElementById("error-el");
function purchase() {
	errorEl.innerText = "Something went wrong, please try again";
}

//calculator
const num1 = 8;
const num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = 0;
const sumEl = document.getElementById("sum-el");
function add() {
	sum = num1 + num2;
	sumEl.textContent = "Sum: " + sum;
}
function subtract() {
	sum = num1 - num2;
	sumEl.textContent = "Sum: " + sum;
}
function divide() {
	sum = num1 / num2;
	sumEl.textContent = "Sum: " + sum;
}
function multiply() {
	sum = num1 * num2;
	sumEl.textContent = "Sum: " + sum;
}
