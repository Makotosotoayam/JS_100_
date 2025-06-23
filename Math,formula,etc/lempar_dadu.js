// Simulasi lempar dadu
document.getElementById('lempar').addEventListener('click', function() {
  const hasil = Math.floor(Math.random() * 6) + 1; // Angka acak antara 1-6
  document.getElementById('hasil').innerText = `Hasil Lempar Dadu: ${hasil}`;
});
