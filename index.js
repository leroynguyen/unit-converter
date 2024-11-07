// DOM elements
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let themeModeToggleBtn = document.getElementById("theme-toggle-btn")

// Conversion factors
const meterToFeet = 3.28084
const literToGallon = 0.264172
const kiloToPound = 2.20462
const feetToMeter = 0.3048
const gallonToLiter = 3.78541
const poundToKilo = 0.453592

// Function to validate input and update UI
function validateInput() {
  const baseValue = parseFloat(inputEl.value)
  if (isNaN(baseValue)) {
    convertBtn.disabled = true
    lengthEl.textContent = "Please enter a valid number."
    volumeEl.textContent = "Please enter a valid number."
    massEl.textContent = "Please enter a valid number."
  } else {
    convertBtn.disabled = false
  }
}

// Validate input on page load
validateInput()

// Add an event listener to the input element for validation
inputEl.addEventListener("input", validateInput)

// Event listener for conversion button
convertBtn.addEventListener("click", function () {
  let baseValue = parseFloat(inputEl.value) // Parse input value as a float

  // Update length conversion
  lengthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(4)} feet | ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(
    4
  )} meter`

  // Update volume conversion
  volumeEl.textContent = `${baseValue} liter = ${(
    baseValue * literToGallon
  ).toFixed(4)} gallon | ${baseValue} gallon = ${(
    baseValue * gallonToLiter
  ).toFixed(4)} liter`

  // Update mass conversion
  massEl.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(
    4
  )} pounds | ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(
    4
  )} kilo`
})

// Event listener for theme toggle button
themeModeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode") // Toggle dark mode class

  // Update button text based on current theme
  themeModeToggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙"
})
