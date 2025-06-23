const jari = document.getElementById('jari');
const hitung = document.getElementById('hitung');
const volume = document.querySelector('#volume');
const luas = document.querySelector('#luas');

hitung.addEventListener('click', function() {
  const r = parseFloat(jari.value);
  volume.textContent = (4/3 * Math.PI * Math.pow(r, 3)).toFixed(2);
  luas.textContent = (4 * Math.PI * Math.pow(r, 2)).toFixed(2);
});