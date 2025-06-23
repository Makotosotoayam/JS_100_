// Mengonversi huruf ke angka (ASCII)
document.getElementById('konversi').addEventListener('click', function() {
  const huruf = document.getElementById('huruf').value;
  const ascii = huruf.charCodeAt(0); // Mengambil nilai ASCII
  document.getElementById('hasil').innerText = `Nilai ASCII: ${ascii}`;
});
