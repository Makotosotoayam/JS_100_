// Kalkulator sederhana untuk 4 operasi
function hitung(operasi) {
  const angka1 = parseFloat(document.getElementById('angka1').value);
  const angka2 = parseFloat(document.getElementById('angka2').value);
  let hasil;

  switch (operasi) {
      case 'tambah':
          hasil = angka1 + angka2;
          break;
      case 'kurang':
          hasil = angka1 - angka2;
          break;
      case 'kali':
          hasil = angka1 * angka2;
          break;
      case 'bagi':
          hasil = angka2 !== 0 ? angka1 / angka2 : 'Tidak bisa dibagi dengan nol';
          break;
  }
  document.getElementById('hasil').innerText = `Hasil: ${hasil}`;
}

document.getElementById('tambah').addEventListener('click', () => hitung('tambah'));
document.getElementById('kurang').addEventListener('click', () => hitung('kurang'));
document.getElementById('kali').addEventListener('click', () => hitung('kali'));
document.getElementById('bagi').addEventListener('click', () => hitung('bagi'));
