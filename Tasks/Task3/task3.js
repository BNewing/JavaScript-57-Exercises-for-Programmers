function getSentence(){
  var quote = document.getElementById("quote").value;
  var author = document.getElementById("author").value;
  document.getElementById("sentence").innerHTML = author + " said: \"" + quote + "\"";
  form.reset();
}
