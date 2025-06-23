// Menghitung faktorial angka
document.getElementById('hitung').addEventListener('click', function() {
  const angka = parseInt(document.getElementById('angka').value);
  let faktorial = 1;
  for (let i = 1; i <= angka; i++) {
      faktorial *= i; // Menghitung faktorial
  }
  document.getElementById('hasil').innerText = `Faktorial dari ${angka} adalah: ${faktorial}`;
});
