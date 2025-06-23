// Menampilkan teks berjalan
document.getElementById('mulai').addEventListener('click', function() {
  const teks = document.getElementById('teks').value;
  const berjalan = document.getElementById('berjalan');
  berjalan.innerText = teks;
  berjalan.style.animation = 'berjalan 10s linear infinite'; // Menambahkan animasi
});

// CSS untuk animasi
const style = document.createElement('style');
style.innerHTML = `
@keyframes berjalan {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}`;
document.head.appendChild(style);
