const alasAtas = document.getElementById('alasAtas');
const alasBawah = document.getElementById('alasBawah');
const tinggi = document.getElementById('tinggi');
const hitung = document.getElementById('perhitungan');
const luas = document.querySelector('#luas');
const keliling = document.querySelector('#keliling');

const hitungluas = (a, b, t) => ((a + b) / 2) * t;
const hitungkeliling = (a, b, s1, s2) => a + b + s1 + s2; // s1 dan s2 adalah sisi miring


hitung.addEventListener('click', function() {
  const s1 = parseFloat(prompt("Masukkan panjang sisi miring 1:"));
  const s2 = parseFloat(prompt("Masukkan panjang sisi miring 2:"));
  luas.textContent = hitungluas(alasAtas.value, alasBawah.value, tinggi.value);
  keliling.textContent = hitungkeliling(alasAtas.value, alasBawah.value, s1, s2);
});