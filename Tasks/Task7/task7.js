function calculateArea() {
  console.log(4);
  var length = document.getElementById("length").value;
  var width = document.getElementById("width").value;
  var areaFeet = width * length;
  console.log(areaFeet);
  document.getElementById("areaFeet").innerHTML = areaFeet + " feet squared";
  document.getElementById("areaMetres").innerHTML = (areaFeet * 0.09290304) + " metres squared";
}
