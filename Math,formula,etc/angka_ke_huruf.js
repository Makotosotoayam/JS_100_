// Mengonversi angka ke huruf
document.getElementById('konversi').addEventListener('click', function() {
  const angka = document.getElementById('angka').value;
  const huruf = angkaToWords(angka); // Mengonversi angka ke huruf
  document.getElementById('hasil').innerText = `Angka dalam Huruf: ${huruf}`;
});

// Fungsi untuk mengonversi angka ke huruf
function angkaToWords(angka) {
  const satuan = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  return satuan[parseInt(angka)] || 'Angka tidak valid';
}
