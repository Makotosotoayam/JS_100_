// Menampilkan atau menyembunyikan password
document.getElementById('toggle').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  const type = passwordField.type === 'password' ? 'text' : 'password'; // Mengubah tipe input
  passwordField.type = type; // Mengatur tipe input
  this.innerText = type === 'text' ? 'Sembunyikan' : 'Tampilkan'; // Mengubah teks tombol
});
