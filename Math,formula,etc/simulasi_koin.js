// Simulasi lempar koin
document.getElementById('lempar').addEventListener('click', function() {
  const hasil = Math.random() < 0.5 ? 'Heads' : 'Tails'; // 50% kemungkinan
  document.getElementById('hasil').innerText = `Hasil Lempar Koin: ${hasil}`;
});
