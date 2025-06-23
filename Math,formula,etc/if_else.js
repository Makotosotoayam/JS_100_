function checkAgeCategory() {
  const age = parseInt(document.getElementById('age').value);
  const resultDiv = document.getElementById('result');
  
  if (isNaN(age) || age < 0) {
      resultDiv.innerHTML = "Mohon masukkan usia yang valid";
      return;
  }
  
  let category;
  if (age <= 13) {
      category = "Anak-anak";
  } else if (age <= 18) {
      category = "Remaja";
  } else if (age <= 39) {
      category = "Dewasa";
  } else {
      category = "Lansia";
  }
  
  resultDiv.innerHTML = `Kategori usia: ${category}`;
}