const jari = document.getElementById('jari');
const hitung = document.getElementById('hitung');
const luas = document.querySelector('#luas');
const keliling = document.querySelector('#keliling');

hitung.addEventListener('click', function() {
  const r = parseFloat(jari.value);
  luas.textContent = (Math.PI * r * r).toFixed(2);
  keliling.textContent = (2 * Math.PI * r).toFixed(2);
});