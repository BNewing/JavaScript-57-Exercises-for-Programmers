function calculateAge() {
  var currentAge = document.getElementById("currentAge").value;
  var preferredRetirementAge = document.getElementById("preferredRetirementAge").value;
  var yearsLeft = preferredRetirementAge - currentAge;
  var retirementYear = 2015 + yearsLeft;
  document.getElementById("yearsLeft").innerHTML = "You have " + yearsLeft + " years left until you can retire.";
  document.getElementById("retirementYear").innerHTML = "It's 2015, so you can retire in " + retirementYear + ".";
}
