function convertTemp() {
  const temp = document.getElementById("tempInput").value;
  const type = document.getElementById("conversionType").value;
  const result = document.getElementById("result");

  if (temp === "") {
    result.textContent = "Please enter a temperature!";
    return;
  }

  let output;

  if (type === "cToF") {
    output = (temp * 9 / 5) + 32;
    result.textContent = output.toFixed(2) + " °F";
  } 
  else if (type === "fToC") {
    output = (temp - 32) * 5 / 9;
    result.textContent = output.toFixed(2) + " °C";
  } 
  else {
    output = Number(temp) + 273.15;
    result.textContent = output.toFixed(2) + " K";
  }
}
