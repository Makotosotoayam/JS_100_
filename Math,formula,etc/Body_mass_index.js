// Fungsi untuk menghitung BMI
function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const bmi = weight / (height * height); // Rumus BMI
  document.getElementById('result').innerText = `BMI Anda: ${bmi.toFixed(2)}`; // Menampilkan hasil
}
