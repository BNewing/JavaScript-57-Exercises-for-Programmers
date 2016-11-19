var name;

function getName() {
  var name = document.getElementById("name").value;
  document.getElementById("yourName").innerHTML = "Hello, " + name;
  document.getElementById("form").reset();
}
