function getDimensions() {
  var width = document.getElementById("width").value;
  var length = document.getElementById("length").value;
  var feetSquared = width * length;
  calculateGallons(feetSquared);
}

function calculateGallons(feetSquared) {
  var constant = 360;
  var gallons = feetSquared/constant;
  var gallonsRequired = Math.ceil(gallons);
  document.getElementById("gallonsNeeded").innerHTML = "You'll need " + gallonsRequired + " tins of paint to be able to paint your ceiling."
}
