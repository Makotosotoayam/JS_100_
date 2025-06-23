// Fungsi untuk menentukan apakah angka ganjil atau genap
function checkOddEven() {
  const number = parseInt(document.getElementById('number').value);
  const result = (number % 2 === 0) ? 'Genap' : 'Ganjil'; // Cek genap atau ganjil
  document.getElementById('result').innerText = `Angka tersebut adalah: ${result}`; // Menampilkan hasil
}
