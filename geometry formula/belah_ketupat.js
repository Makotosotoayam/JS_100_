const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const sisi = document.getElementById('sisi');
const hitung = document.getElementById('hitung');
const luas = document.querySelector('#luas');
const keliling = document.querySelector('#keliling');

hitung.addEventListener('click', function() {
  const diagonal1 = parseFloat(d1.value);
  const diagonal2 = parseFloat(d2.value);
  const s = parseFloat(sisi.value);
  luas.textContent = 0.5 * diagonal1 * diagonal2;
  keliling.textContent = 4 * s;
});