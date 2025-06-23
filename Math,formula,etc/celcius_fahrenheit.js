// Fungsi untuk mengonversi Celsius ke Fahrenheit
function convertToFahrenheit() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  const fahrenheit = (celsius * 9/5) + 32; // Rumus konversi
  document.getElementById('result').innerText = `Suhu dalam Fahrenheit: ${fahrenheit}`;
}

// Fungsi untuk mengonversi Fahrenheit ke Celsius
function convertToCelsius() {
  const fahrenheit = parseFloat(document.getElementById('celsius').value);
  const celsius = (fahrenheit - 32) * 5/9; // Rumus konversi
  document.getElementById('result').innerText = `Suhu dalam Celsius: ${celsius}`;
}
