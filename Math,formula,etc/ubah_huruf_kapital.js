// Mengubah huruf ke kapital
document.getElementById('ubah').addEventListener('click', function() {
  // Mengambil nilai dari input
  const teks = document.getElementById('teks').value;
  
  // Mengubah teks menjadi kapital
  const hasil = teks.toUpperCase();
  
  // Menampilkan hasil
  document.getElementById('hasil').innerText = `Teks dalam Kapital: ${hasil}`;
});
