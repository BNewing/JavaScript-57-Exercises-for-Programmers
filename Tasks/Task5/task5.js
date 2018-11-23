var addition, subtraction, division, multiplication;

function collectValues() {
  var firstNumberValue = document.getElementById("first").value;
  var secondNumberValue = document.getElementById("second").value;
  var firstNumber = parseInt(firstNumberValue);
  var secondNumber = parseInt(secondNumberValue);
  if (isNaN(firstNumber) === false && isNaN(secondNumber) === false){
    doMaths(firstNumber, secondNumber);
 }
 else {
   alert('You need to enter numbers!');
 }
}

function doMaths(firstNumber, secondNumber){
  addValues(firstNumber, secondNumber);
  subtractValues(firstNumber, secondNumber);
  divideValues(firstNumber, secondNumber);
  multiplyValues(firstNumber, secondNumber);
  displayOnScreen(firstNumber, secondNumber);
}

function addValues(firstNumber, secondNumber){
  addition = firstNumber + secondNumber;
  return addition;
}

function subtractValues(firstNumber, secondNumber){
  subtraction = firstNumber - secondNumber;
  return subtraction;
}

function divideValues(firstNumber, secondNumber){
  division = firstNumber / secondNumber;
  return division;
}

function multiplyValues(firstNumber, secondNumber){
  multiplication = firstNumber * secondNumber;
  return multiplication;
}


function displayOnScreen(firstNumber, secondNumber) {
  document.getElementById("add").innerHTML = firstNumber + " + " + secondNumber +  " = " + addition;
  document.getElementById("subtract").innerHTML = firstNumber + " - " + secondNumber +  " = " + subtraction;
  document.getElementById("divide").innerHTML = firstNumber + " / " + secondNumber +  " = " + division;
  document.getElementById("multiply").innerHTML = firstNumber + " x " + secondNumber +  " = " + multiplication;
}

module.exports = addValues;