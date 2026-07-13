//Video Topics
// Video 1: Refactor the addEventListener
// video 2: Get a value for an input field
// video 3: Render HTML element with ".innerHTML" method
// video 4: Render HTML element with createElement and .append()
// video 5: Template String

const myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", () => {
	myLeads.push(inputEl.value);
	renderLeads();
	inputEl.value = "";
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

/***
There is a folder called "chrome_extension_project". Everything inside is the same as this one. I made a separate folder to make it zip folder and test the extension on my browser
***/
