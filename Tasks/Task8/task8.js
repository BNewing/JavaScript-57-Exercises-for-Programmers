function collectNumbers() {
  var people = document.getElementById("people").value;
  var pizza = document.getElementById("pizza").value;
  var slices = document.getElementById("slices").value;
  document.getElementById("pizza-and-people").innerHTML = people + " people with " + pizza + " pizzas.";
  form.reset();
  calculateSlices(people, pizza, slices);
}

function calculateSlices(people, pizza, slices) {
  var numberOfSlices = pizza * slices;
  document.getElementById("numberOfSlices").innerHTML = "There are " + numberOfSlices + " slices of pizza."
  var slicesPerPerson = numberOfSlices/people;
  var amount = Math.floor(slicesPerPerson);
  document.getElementById("slicesPerPerson").innerHTML = "You each get " + amount + " slices of pizza.";
  var remainder = numberOfSlices - (amount * people);
  document.getElementById("leftover").innerHTML = "There are " + remainder + " slices of pizza left.";
}
