function makeSentence() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adjective = document.getElementById("adjective").value;
  var adverb = document.getElementById("adverb").value;
  document.getElementById("sentence").innerHTML = "The " + adjective + " " + noun + " " + adverb + " " + verb + " the chair.";
  form.reset();
}
