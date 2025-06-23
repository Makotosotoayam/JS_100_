// Mencari kata dalam kalimat
document.getElementById('cari').addEventListener('click', function() {
  const kalimat = document.getElementById('kalimat').value;
  const kata = document.getElementById('kata').value;
  const jumlah = kalimat.split(kata).length - 1; // Menghitung jumlah kemunculan kata
  document.getElementById('hasil').innerText = `Kata "${kata}" muncul sebanyak: ${jumlah} kali`;
});
