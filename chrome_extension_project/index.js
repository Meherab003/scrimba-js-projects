const myLeads = [];

const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

inputBtn.addEventListener("click", () => {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	renderLeads();
	console.log(localStorage.getItem("myLeads"));
});
function renderLeads() {
	let listItems = "";

	for (let i = 0; i < myLeads.length; i++) {
		listItems += `<li>
			  <a target='_blank' href='https://${myLeads[i]}'>
           ${myLeads[i]}
        </a>
			</li>`;
	}
	ulEl.innerHTML = listItems;
}

//Video Topics
// Video 1: Refactor the addEventListener
// video 2: Get a value for an input field
// video 3: Render HTML element with ".innerHTML" method
// video 4: Render HTML element with createElement and .append()
// video 5: Template String
// video 6: Local Storage
// video 7: JSON.stringify and JSON.parse
// video 8: truthy and falsy value; all the 6 falsy values: false, 0, null, undefined, "", NaN
