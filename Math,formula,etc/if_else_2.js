function checkOddEven() {
  const number = parseFloat(document.getElementById('number').value);
  const resultDiv = document.getElementById('result');
  
  if (isNaN(number)) {
      resultDiv.innerHTML = "Mohon masukkan bilangan";
      return;
  }
  
  if (number % 2 === 0) {
      resultDiv.innerHTML = '<span class="even">Bilangan genap</span>';
  } else {
      resultDiv.innerHTML = '<span class="odd">Bilangan ganjil</span>';
  }
}