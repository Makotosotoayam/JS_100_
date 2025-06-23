const Jari = document.getElementById("jarijari")
const tinggi = document.getElementById("tinggi")
const volume = document.getElementById("volume")
const luas = document.getElementById("luas")
const hitung = document.getElementById("tombol")


const ngitungvolume = (r, t) => Math.PI * r * r * t
const ngitungluas = (r, t) =>2 * (Math.PI * r * t) + (2 * Math.PI * r * r)

hitung.addEventListener('click', function (){
  luas.textContent = ngitungluas (jarijari.value , tinggi.value)
  volume.textContent = ngitungvolume (jarijari.value , tinggi.value)
})