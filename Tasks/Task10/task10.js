function getAmounts(){
  var item1Price = document.getElementById("item1Price").value;
  var item1Quantity = document.getElementById("item1Quantity").value;
  var item2Price = document.getElementById("item2Price").value;
  var item2Quantity = document.getElementById("item2Quantity").value;
  var item3Price = document.getElementById("item3Price").value;
  var item3Quantity = document.getElementById("item3Quantity").value;
  calculateCosts(item1Price, item1Quantity, item2Price, item2Quantity, item3Price, item3Quantity)
}

function calculateCosts(item1Price, item1Quantity, item2Price, item2Quantity, item3Price, item3Quantity){
  var item1TotalPrice = item1Price * item1Quantity;
  var item2TotalPrice = item2Price * item2Quantity;
  var item3TotalPrice = item3Price * item3Quantity;
  var subtotal = item1TotalPrice + item2TotalPrice + item3TotalPrice;
  var taxRate = 0.055;
  var tax = subtotal * taxRate;
  var total = subtotal + tax;
  displayTotals(subtotal, tax, total)
}

function displayTotals(subtotal, tax, total){
  document.getElementById("subtotal").innerHTML = "Subtotal: £" + subtotal;
  document.getElementById("tax").innerHTML = "Tax: £" + tax;
  document.getElementById("total").innerHTML = "Total: £" + total;
}
