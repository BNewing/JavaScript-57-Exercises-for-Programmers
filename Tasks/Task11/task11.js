function calculateAmount(){
	let euros = document.getElementById("euros").value;
	let exchangeRate = document.getElementById("exchangeRate").value;
	let result = euros * exchangeRate;
	let resultRounded = result.toFixed(2);
	let resultText = euros + " euros at an exchange rate of " + exchangeRate + " is " + resultRounded + " U.S. dollars.";
	document.getElementById("amount").innerHTML = resultText;
}

function checkFilledOut(){
	let euros = document.getElementById("euros");
	let exchangeRate = document.getElementById("exchangeRate");
	if(!euros.value) {
		euros.style.borderColor = "red";
	}
	else if (!exchangeRate.value) {
		exchangeRate.style.borderColor = "red";
		euros.style.borderColor = "white";
	}
	else {
		euros.style.borderColor = "white";
		exchangeRate.style.borderColor = "white";
		calculateAmount()
	}
}