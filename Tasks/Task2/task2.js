function getLength() {
  var length = document.getElementById("string").value.length;
  document.getElementById("length").innerHTML = "The length of that string is: " + length;
  form.reset();
}
