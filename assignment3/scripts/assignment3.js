function convertTemperature() {
  var inputFahrenheit = document.getElementById("inputFahrenheit").value;
  var outputCelsius = document.getElementById("outputCelsius");
  var celsius = (inputFahrenheit - 32) * (5/9);
  outputCelsius.innerText = celsius.toFixed(2);
}

function changeStyle() {
  var selectedStyle = document.getElementById("cssSelector").value;
  document.getElementById("selectedStyle").href = selectedStyle;
}