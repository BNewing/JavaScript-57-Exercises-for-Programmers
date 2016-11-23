function maths() {
  var firstNumberValue = document.getElementById("first").value;
  var secondNumberValue = document.getElementById("second").value;
  var firstNumber = parseInt(firstNumberValue);
  var secondNumber = parseInt(secondNumberValue);
  if (isNaN(firstNumber) === false && isNaN(secondNumber) === false){
    print(firstNumber, secondNumber);
 }
 else {
   alert('You need to enter numbers!');
 }
}

function print(firstNumber, secondNumber){
  var addition = firstNumber + secondNumber;
  var subtraction = firstNumber - secondNumber;
  var division = firstNumber/secondNumber;
  var multiplication = firstNumber * secondNumber;
  document.getElementById("add").innerHTML = firstNumber + " + " + secondNumber +  " = " + addition;
  document.getElementById("subtract").innerHTML = firstNumber + " - " + secondNumber +  " = " + subtraction;
  document.getElementById("divide").innerHTML = firstNumber + " / " + secondNumber +  " = " + division;
  document.getElementById("multiply").innerHTML = firstNumber + " x " + secondNumber +  " = " + multiplication;
}
