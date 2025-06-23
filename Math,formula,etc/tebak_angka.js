// Permainan tebak angka
const angkaAcak = Math.floor(Math.random() * 10) + 1; // Angka acak antara 1-10

document.getElementById('cek').addEventListener('click', function() {
    const tebakan = parseInt(document.getElementById('tebakan').value);
    let hasil;

    if (tebakan === angkaAcak) {
        hasil = 'Tebakan Anda Benar!';
    } else {
        hasil = `Tebakan Anda Salah! Angka yang benar adalah ${angkaAcak}.`;
    }
    document.getElementById('hasil').innerText = hasil;
});
