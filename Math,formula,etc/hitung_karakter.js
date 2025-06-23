// Menghitung jumlah karakter pada teks
document.getElementById('hitung').addEventListener('click', function() {
  const teks = document.getElementById('teks').value;
  const jumlahKarakter = teks.length; // Menghitung jumlah karakter
  document.getElementById('hasil').innerText = `Jumlah Karakter: ${jumlahKarakter}`;
});
