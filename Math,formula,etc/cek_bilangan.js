// Mengecek apakah bilangan positif atau negatif
document.getElementById('cek').addEventListener('click', function() {
  const bilangan = parseFloat(document.getElementById('bilangan').value);
  let status;
  if (bilangan > 0) {
      status = 'Positif';
  } else if (bilangan < 0) {
      status = 'Negatif';
  } else {
      status = 'Nol';
  }
  document.getElementById('hasil').innerText = `Bilangan: ${status}`;
});
