function checkPass() {
  const score = parseFloat(document.getElementById('score').value);
  const resultDiv = document.getElementById('result');
  
  if (isNaN(score)) {
      resultDiv.innerHTML = "Mohon masukkan nilai yang valid";
      return;
  }
  
  if (score >= 75) {
      resultDiv.innerHTML = '<span class="pass">Selamat anda lulus!!!</span>';
  } else {
      resultDiv.innerHTML = '<span class="fail">Maaf anda tidak lulus:(</span>';
  }
}