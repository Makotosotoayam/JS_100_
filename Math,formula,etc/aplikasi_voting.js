// Aplikasi voting sederhana
let suaraKandidat1 = 0;
let suaraKandidat2 = 0;

document.getElementById('voting').addEventListener('click', function() {
    const kandidat = document.querySelector('input[name="kandidat"]:checked');
    if (kandidat) {
        if (kandidat.value === 'Kandidat 1') {
            suaraKandidat1++;
        } else {
            suaraKandidat2++;
        }
        document.getElementById('hasil').innerText = `Suara Kandidat 1: ${suaraKandidat1}, Suara Kandidat 2: ${suaraKandidat2}`;
    } else {
        alert('Silakan pilih kandidat terlebih dahulu!');
    }
});
