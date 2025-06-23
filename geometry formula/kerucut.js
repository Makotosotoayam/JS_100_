const jari = document.getElementById('jari');
const tinggi = document.getElementById('tinggi');
const hitung = document.getElementById('hitung');
const volume = document.querySelector('#volume');
const luas = document.querySelector('#luas');

hitung.addEventListener('click', function() {
  const r = parseFloat(jari.value);
  const t = parseFloat(tinggi.value);
  const s = Math.sqrt(r*r + t*t); // Garis pelukis
  volume.textContent = (1/3 * Math.PI * Math.pow(r, 2) * t).toFixed(2);
  luas.textContent = (Math.PI * r * (r + s)).toFixed(2);
});
