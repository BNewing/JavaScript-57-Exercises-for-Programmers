function getLength() {
  var value = document.getElementById("string").value;
  var length = value.length;
  document.getElementById("length").innerHTML = "The length of '" + value + "' is: " + length;
  form.reset();
}
