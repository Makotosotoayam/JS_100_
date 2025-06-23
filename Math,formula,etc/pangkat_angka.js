// Menghitung pangkat angka
document.getElementById('hitung').addEventListener('click', function() {
  const angka = parseFloat(document.getElementById('angka').value);
  const pangkat = parseInt(document.getElementById('pangkat').value);
  const hasil = Math.pow(angka, pangkat); // Menghitung pangkat
  document.getElementById('hasil').innerText = `${angka} pangkat ${pangkat} adalah: ${hasil}`;
});
