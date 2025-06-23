// Membandingkan dua angka
document.getElementById('bandingkan').addEventListener('click', function() {
  const angka1 = parseFloat(document.getElementById('angka1').value);
  const angka2 = parseFloat(document.getElementById('angka2').value);
  let hasil;

  if (angka1 > angka2) {
      hasil = `${angka1} lebih besar dari ${angka2}`;
  } else if (angka1 < angka2) {
      hasil = `${angka1} lebih kecil dari ${angka2}`;
  } else {
      hasil = `${angka1} sama dengan ${angka2}`;
  }
  document.getElementById('hasil').innerText = hasil;
});
