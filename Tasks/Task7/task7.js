function checkIfNumber() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  if (isNaN(length) != true && isNaN(width) != true){
    calculateArea(width, length);
  }
  else {
    document.getElementById("areaFeet").innerHTML = "You need to add in numbers!"
    document.getElementById("areaMetres").innerHTML = "";
  }
}

function calculateArea(width, length){
  var areaFeet = width * length;
  var metreConversionFactor = 0.09290304;
  var areaMetres = areaFeet * metreConversionFactor;
  document.getElementById("areaFeet").innerHTML = areaFeet + " feet squared";
  document.getElementById("areaMetres").innerHTML = areaMetres + " metres squared";
}
