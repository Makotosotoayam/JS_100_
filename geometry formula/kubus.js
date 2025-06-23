const sisi = document.getElementById('sisi');
const hitung = document.getElementById('hitung');
const volume = document.querySelector('#volume');
const luas = document.querySelector('#luas');

hitung.addEventListener('click', function() {
  const s = parseFloat(sisi.value);
  volume.textContent = s * s * s;
  luas.textContent = 6 * s * s;
});