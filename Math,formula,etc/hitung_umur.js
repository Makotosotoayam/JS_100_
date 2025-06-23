// Menghitung umur dari tanggal lahir
document.getElementById('hitung').addEventListener('click', function() {
  const tanggalLahir = new Date(document.getElementById('tanggalLahir').value);
  const sekarang = new Date();
  let umur = sekarang.getFullYear() - tanggalLahir.getFullYear();
  const m = sekarang.getMonth() - tanggalLahir.getMonth();
  if (m < 0 || (m === 0 && sekarang.getDate() < tanggalLahir.getDate())) {
      umur--; // Mengurangi umur jika belum ulang tahun tahun ini
  }
  document.getElementById('hasil').innerText = `Umur Anda: ${umur} tahun`;
});
