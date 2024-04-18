// HTML Elements
var milesInput;
var gallonsInput;
var mpgDisplay;
var errorDisplay;
window.onload = function () {
    // Get HTML Elements
    milesInput = document.getElementById("miles");
    gallonsInput = document.getElementById("gallons");
    mpgDisplay = document.getElementById("mpg");
    errorDisplay = document.getElementById("error");
    // Add Event Listeners
    var calculateButton = document.getElementById("calculate");
    if (calculateButton) {
        calculateButton.onclick = calculateMPG;
    }
    else {
        console.error("Calculate button not found");
    }
    var clearButton = document.getElementById("clear");
    if (clearButton) {
        clearButton.onclick = clearForm;
    }
    else {
        console.error("Clear button not found");
    }
    milesInput.ondblclick = clearInput;
    gallonsInput.ondblclick = clearInput;
};
function calculateMPG() {
    var milesDriven = parseFloat(milesInput.value);
    var gallonsUsed = parseFloat(gallonsInput.value);
    if (isValid(milesDriven, gallonsUsed)) {
        var milesPerGallon = milesDriven / gallonsUsed;
        displayResults(milesPerGallon);
    }
}
function isValid(miles, gallons) {
    var isValid = true;
    errorDisplay.innerText = "";
    if (isNaN(miles) || miles <= 0) {
        isValid = false;
        errorDisplay.innerText += "Miles Driven must be a positive number.\n";
    }
    if (isNaN(gallons) || gallons <= 0) {
        isValid = false;
        errorDisplay.innerText += "Gallons Used must be a positive number.\n";
    }
    return isValid;
}
function displayResults(mpg) {
    mpgDisplay.value = mpg.toString();
}
function clearForm() {
    milesInput.value = "";
    gallonsInput.value = "";
    mpgDisplay.value = "";
    errorDisplay.innerText = "";
}
function clearInput(event) {
    var targetInput = event.target;
    targetInput.value = "";
}
