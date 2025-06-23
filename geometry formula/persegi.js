const Sisi = document.getElementById('sisi')
const hitung = document.getElementById('initombol')
const Keliling = document.getElementById('Keliling')
const Luas = document.getElementById('Luas')

const hitunglkeliling = (s) => 4 * s
const hitungLuas = (s) => s * s

hitung.addEventListener('click', function () {
  Keliling.textContent = hitunglkeliling(Sisi.value)
  Luas.textContent = hitungLuas(Sisi.value)
})