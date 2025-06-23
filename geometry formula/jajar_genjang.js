const alas = document.getElementById('alas');
const tinggi = document.getElementById('tinggi');
const sisi = document.getElementById('sisi');
const hitung = document.getElementById('hitung');
const luas = document.querySelector('#luas');
const keliling = document.querySelector('#keliling');

hitung.addEventListener('click', function() {
  const a = parseFloat(alas.value);
  const t = parseFloat(tinggi.value);
  const s = parseFloat(sisi.value);
  luas.textContent = a * t;
  keliling.textContent = 2 * (a + s);
});