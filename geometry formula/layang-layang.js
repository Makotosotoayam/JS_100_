const diagonal1 = document.getElementById('diagonal1');
const diagonal2 = document.getElementById('diagonal2');
const hitung = document.getElementById('perhitungan');
const luas = document.querySelector('#luas');
const keliling = document.querySelector('#keliling');

const hitungluas = (d1, d2) => (d1 * d2) / 2;
const hitungkeliling = (s1, s2) => 2 * (s1 + s2); // s1 dan s2 adalah panjang sisi


hitung.addEventListener('click', function() {
  const s1 = parseFloat(prompt("Masukkan panjang sisi 1:"));
  const s2 = parseFloat(prompt("Masukkan panjang sisi 2:"));
  luas.textContent = hitungluas(diagonal1.value, diagonal2.value);
  keliling.textContent = hitungkeliling(s1, s2);
});