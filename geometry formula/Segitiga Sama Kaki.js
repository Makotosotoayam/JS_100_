const alas = document.getElementById('alas');
const tinggi = document.getElementById('tinggi');
const hitung = document.getElementById('perhitungan');
const luas = document.querySelector('#luas');
const keliling = document.querySelector('#keliling');


const hitungluas = (a, t) => (a * t) / 2;
const hitungkeliling = (a, s) => a + 2 * s; // s adalah panjang sisi miring


hitung.addEventListener('click', function() {
  const s = parseFloat(prompt("Masukkan panjang sisi miring:"));
  luas.textContent = hitungluas(alas.value, tinggi.value);
  keliling.textContent = hitungkeliling(alas.value, s);
});