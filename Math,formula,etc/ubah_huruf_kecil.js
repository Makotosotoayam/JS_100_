// Mengubah huruf ke huruf kecil
document.getElementById('ubah').addEventListener('click', function() {
  // Mengambil nilai dari input
  const teks = document.getElementById('teks').value;
  
  // Mengubah teks menjadi huruf kecil
  const hasil = teks.toLowerCase();
  
  // Menampilkan hasil
  document.getElementById('hasil').innerText = `Teks dalam Huruf Kecil: ${hasil}`;
});
