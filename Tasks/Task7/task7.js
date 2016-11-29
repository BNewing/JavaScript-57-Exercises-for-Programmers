function checkIfNumber() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  if (isNaN(length) != true && isNaN(width) != true){
    checkInputType(width, length);
  }
  else {
    document.getElementById("areaFeet").innerHTML = "You need to add in numbers!"
    document.getElementById("areaMetres").innerHTML = "";
  }
}

function checkInputType(width, length) {
  var metreRadioButton = document.getElementById("metres").checked;
  var feetRadioButton = document.getElementById("feet").checked;
  if (metreRadioButton === false && feetRadioButton === true){
    calculateAreaWithFeet(width,length)
  }
  else if (metreRadioButton === true && feetRadioButton === false ) {
    calculateAreaWithMetres(width, length)
  }
  else{
    document.getElementById("areaFeet").innerHTML = "You need to say if your input is in metres or feet!"
    document.getElementById("areaMetres").innerHTML = "";
  }
}

function calculateAreaWithFeet(width, length){
  var inputType = document.getElementById
  var areaFeet = width * length;
  var metreConversionFactor = 0.09290304;
  var areaMetres = areaFeet * metreConversionFactor;
  document.getElementById("areaFeet").innerHTML = areaFeet + " feet squared";
  document.getElementById("areaMetres").innerHTML = areaMetres + " metres squared";
}

function calculateAreaWithMetres(width, length){
  var areaMetres = width * length;
  var feetConversionFactor = 10.7639;
  var areaFeet = areaMetres * feetConversionFactor;
  document.getElementById("areaFeet").innerHTML = areaFeet + " feet squared";
  document.getElementById("areaMetres").innerHTML = areaMetres + " metres squared";
}
