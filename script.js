let form = document.forms[0];

form.addEventListener("submit", alokator);

let amount;

let amountRealEstate = document.getElementById("amountre");

let amountStocksMarket = document.getElementById("amountsm");

let amountLuxuryWatches = document.getElementById("amountlw");

function alokator(event) {
	event.preventDefault();	
	amount = form.elements.amount.value;
	displayAlokator();
	realEstate();
	stocksMarket();
	luxuryWatches()
}

function realEstate() {
	let newAmount = document.createTextNode(`$${amount*0.65}`);
	amountRealEstate.appendChild(newAmount)
}

function stocksMarket() {
	let newAmount = document.createTextNode(`$${amount*0.20}`);
	amountStocksMarket.appendChild(newAmount)
}

function luxuryWatches() {
	let newAmount = document.createTextNode(`$${amount*0.15}`);
	amountLuxuryWatches.appendChild(newAmount)
}

function displayAlokator() {
	let alokator = document.getElementsByClassName("alokator")[0];
	alokator.style.display = "flex";
}