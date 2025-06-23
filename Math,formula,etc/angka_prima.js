// Fungsi untuk mengecek apakah angka adalah angka prima
function checkPrime() {
  const number = parseInt(document.getElementById('number').value);
  let isPrime = true;

  if (number < 2) {
      isPrime = false; // Angka kurang dari 2 bukan prima
  } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
              isPrime = false; // Jika ada pembagi, angka bukan prima
              break;
          }
      }
  }

  const resultText = isPrime ? `${number} adalah angka prima.` : `${number} bukan angka prima.`;
  document.getElementById('result').innerText = resultText; // Menampilkan hasil
}
