function calculateArea() {
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var areaFeet = width * length;
  var metreConversionFactor = 0.09290304;
  var areaMetres = areaFeet * metreConversionFactor;
  document.getElementById("areaFeet").innerHTML = areaFeet + " feet squared";
  document.getElementById("areaMetres").innerHTML = areaMetres + " metres squared";
}
