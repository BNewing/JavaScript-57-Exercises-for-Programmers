var name;

function getName() {
  var name = document.getElementById("name").value;
  document.getElementById("yourName").innerHTML = name;
  document.getElementById("form").reset();
}
