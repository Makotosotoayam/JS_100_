// Menghitung PPN sederhana
document.getElementById('hitung').addEventListener('click', function() {
  // Mengambil nilai dari input
  const harga = parseFloat(document.getElementById('harga').value);
  const ppn = 0.1; // Persentase PPN 10%
  
  // Menghitung total harga setelah PPN
  const total = harga + (harga * ppn);
  
  // Menampilkan hasil
  document.getElementById('hasil').innerText = `Total Harga setelah PPN: Rp ${total.toFixed(2)}`;
});
