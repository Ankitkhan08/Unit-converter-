let convertBtn = document.getElementById("convert-btn");
let lengthConversion = document.getElementById("length-p");
let volumeConversion = document.getElementById("volume-p");
let massConversion = document.getElementById("mass-p");
let inputEl = document.getElementById("input-el");

// let length = lengthConversion.textContent
// let volume = volumeConversion.textContent
// let mass = massConversion.textContent
convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  lengthConversion.textContent = ` ${inputValue} meters = ${(
    inputValue * 3.281
  ).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters `;
  volumeConversion.textContent = ` ${inputValue} liters = ${
    (inputValue * 0.264).toFixed(3)
  } gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters `;
  massConversion.textContent = ` ${inputValue} kilos = ${
   ( inputValue * 2.204).toFixed(3)
  } pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos `;
});
