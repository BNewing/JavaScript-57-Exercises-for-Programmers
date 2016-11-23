function maths() {
  var firstNumber = document.getElementById("first").value;
  var secondNumber = document.getElementById("second").value;
  var addition = firstNumber + secondNumber;
  document.getElementById("add").innerHTML = firstNumber + " + " + secondNumber +  " = " + addition;
}
