// Menghitung hari antara dua tanggal
document.getElementById('hitung').addEventListener('click', function() {
  const tanggal1 = new Date(document.getElementById('tanggal1').value);
  const tanggal2 = new Date(document.getElementById('tanggal2').value);
  const selisih = Math.abs(tanggal2 - tanggal1); // Selisih dalam milidetik
  const hari = Math.ceil(selisih / (1000 * 60 * 60 * 24)); // Menghitung hari
  document.getElementById('hasil').innerText = `Jumlah hari: ${hari} hari`;
});
