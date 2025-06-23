// Menentukan kelulusan siswa
document.getElementById('cek').addEventListener('click', function() {
  const nilai = parseFloat(document.getElementById('nilai').value);
  const kelulusan = nilai >= 75 ? 'Lulus' : 'Tidak Lulus'; // Menentukan kelulusan
  document.getElementById('hasil').innerText = `Status Kelulusan: ${kelulusan}`;
});
