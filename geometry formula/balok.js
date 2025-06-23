const panjang = document.getElementById('panjang')
const lebar = document.getElementById('lebar')
const tinggi = document.getElementById('tinggi')

const hitung = document.getElementById('perhitungan')

const luas = document.querySelector('#luas')
const volume = document.querySelector('#volume')


function ngitungluas(p, l, t) {
  return 2 * ((p * l) + (p * t) + (l * t))
}

const hitungvolume = (p , l , t) => p * l *t

hitung.addEventListener('click', function() {
 luas.textContent = ngitungluas(panjang.value , lebar.value , tinggi.value)
 volume.textContent = hitungvolume(panjang.value , lebar.value , tinggi.value)
})