// Fungsi untuk menghitung pembagian dua angka
function calculateDivision() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  if (num2 === 0) {
      document.getElementById('result').innerText = 'Tidak bisa membagi dengan nol'; // Cek pembagi nol
      return;
  }
  const result = num1 / num2; // Menghitung hasil pembagian
  document.getElementById('result').innerText = `Hasil: ${result}`; // Menampilkan hasil
}
