// Menampilkan hari dari bulan yang dipilih
document.getElementById('tampilkan').addEventListener('click', function() {
  const bulan = document.getElementById('bulan').value;
  const tanggal = new Date(bulan);
  const hari = tanggal.getDate(); // Mengambil hari dari tanggal
  document.getElementById('hasil').innerText = `Hari: ${hari}`; // Menampilkan hari
});
