// Fungsi untuk mengonversi cm ke inches
function convertToInches() {
  const cm = parseFloat(document.getElementById('cm').value);
  const inches = cm / 2.54; // Rumus konversi
  document.getElementById('result').innerText = `Panjang dalam Inches: ${inches}`;
}

// Fungsi untuk mengonversi inches ke cm
function convertToCm() {
  const inches = parseFloat(document.getElementById('cm').value);
  const cm = inches * 2.54; // Rumus konversi
  document.getElementById('result').innerText = `Panjang dalam cm: ${cm}`;
}
