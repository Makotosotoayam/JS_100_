function checkLeapYear() {
  const year = parseInt(document.getElementById('year').value);
  const resultDiv = document.getElementById('result');
  
  if (isNaN(year)) {
      resultDiv.innerHTML = "Mohon masukkan tahun yang valid";
      return;
  }
  
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      resultDiv.innerHTML = `<span class="leap">${year} adalah tahun kabisat</span>`;
  } else {
      resultDiv.innerHTML = `<span class="not-leap">${year} bukan tahun kabisat</span>`;
  }
}