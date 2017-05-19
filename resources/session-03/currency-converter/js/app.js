var btcRate = 380.99;

function convertBTC() {
  var usdValue = valueForEl("usd");
  document.getElementById("btc").value = convertToBTC(usdValue);
}

function convertToBTC(dollarAmt) {
  return dollarAmt / btcRate;
}

function valueForEl(id) {
  return document.getElementById(id).value;
}
