// Fungsi untuk menghitung pertambahan dua angka
function calculateAddition() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const result = num1 + num2; // Menghitung hasil pertambahan
  document.getElementById('result').innerText = `Hasil: ${result}`; // Menampilkan hasil
}
