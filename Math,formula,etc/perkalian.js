// Fungsi untuk menghitung perkalian dua angka
function calculateMultiplication() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = num1 * num2; // Menghitung hasil perkalian
  document.getElementById('result').innerText = `Hasil: ${result}`; // Menampilkan hasil
}
