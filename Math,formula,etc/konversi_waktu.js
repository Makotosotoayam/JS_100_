// Menghitung total detik dari jam, menit, dan detik
document.getElementById('hitung').addEventListener('click', function() {
  const jam = parseInt(document.getElementById('jam').value) || 0;
  const menit = parseInt(document.getElementById('menit').value) || 0;
  const detik = parseInt(document.getElementById('detik').value) || 0;
  const totalDetik = (jam * 3600) + (menit * 60) + detik; // Menghitung total detik
  document.getElementById('hasil').innerText = `Total Detik: ${totalDetik}`;
});
