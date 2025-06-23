// Menghitung deret bilangan Fibonacci
document.getElementById('hitung').addEventListener('click', function() {
  const jumlah = parseInt(document.getElementById('jumlah').value);
  let fib = [0, 1];
  for (let i = 2; i < jumlah; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; // Menghitung bilangan Fibonacci
  }
  document.getElementById('hasil').innerText = `Deret Fibonacci: ${fib.slice(0, jumlah).join(', ')}`;
});
