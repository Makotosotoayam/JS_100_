const alas = document.getElementById('alas');
const tinggi = document.getElementById('tinggi');
const hitung = document.getElementById('perhitungan');
const luas = document.querySelector('#luas');
const keliling = document.querySelector('#keliling');

const hitungluas = (a, t) => (a * t) / 2;
const hitungkeliling = (a, t) => a + t + Math.sqrt(a * a + t * t);

hitung.addEventListener('click', function() {
  luas.textContent = hitungluas(alas.value, tinggi.value);
  keliling.textContent = hitungkeliling(alas.value, tinggi.value);
});