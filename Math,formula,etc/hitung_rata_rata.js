// Menghitung rata-rata nilai
document.getElementById('hitung').addEventListener('click', function() {
  const nilaiInput = document.getElementById('nilai').value;
  const nilaiArray = nilaiInput.split(',').map(Number); // Mengonversi input menjadi array angka
  const total = nilaiArray.reduce((acc, curr) => acc + curr, 0); // Menghitung total
  const rataRata = total / nilaiArray.length; // Menghitung rata-rata
  document.getElementById('hasil').innerText = `Rata-rata Nilai: ${rataRata.toFixed(2)}`;
});
