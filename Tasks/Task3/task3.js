console.log(3)

function getSentence(){
  console.log(5);
  var quote = document.getElementById("quote").value;
  console.log(5);
  var author = document.getElementById("author").value;
  console.log(author);
  document.getElementById("sentence").innerHTML = author + " says: \"" + quote + "\"";
  form.reset();
}
