function maths() {
  var firstNumber = document.getElementById("first").value;
  var secondNumber = document.getElementById("second").value;
  var addition = firstNumber + secondNumber;
  var subtraction = firstNumber - secondNumber;
  var division = firstNumber/secondNumber;
  var multiplication = firstNumber + secondNumber;
  document.getElementById("add").innerHTML = firstNumber + " + " + secondNumber +  " = " + addition;
  document.getElementById("subtract").innerHTML = firstNumber + " - " + secondNumber +  " = " + subtraction;
  document.getElementById("divide").innerHTML = firstNumber + " / " + secondNumber +  " = " + division;
  document.getElementById("multiply").innerHTML = firstNumber + " x " + secondNumber +  " = " + multiplication;



}
