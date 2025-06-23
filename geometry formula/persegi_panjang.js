const panjang = document.getElementById('panjang')
const lebar = document.getElementById('lebar')

const hitung = document.getElementById('perhitungan')

const luas = document.querySelector('#luas')
const keliling = document.querySelector('#keliling')

const hitungluas= (p , l) => p * l
const hitungkeliling = (p , l) => 2 * (p + l)

hitung.addEventListener('click', function() {
  luas.textContent = hitungluas(panjang.value , lebar.value)
  keliling.textContent = hitungkeliling(panjang.value , lebar.value)
 })
