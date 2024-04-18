
// HTML elements
let milesInput = document.getElementById('miles');
let gallonsInput = document.getElementById('gallons');
let mpgDisplay = document.getElementById('mpg');
let errorDisplay = document.getElementById('error');

// Clear form function
function clearForm() {
    milesInput.value = '';
    gallonsInput.value = '';
    mpgDisplay.value = '';
    errorDisplay.textContent = '';
}

// Validation function
function isValid() {
    let miles = parseFloat(milesInput.value);
    let gallons = parseFloat(gallonsInput.value);

    if (isNaN(miles) || isNaN(gallons)) {
        errorDisplay.textContent = "Warning! Both inputs must be numbers.";
        return false;
    } else if (miles <= 0 || gallons <= 0) {
        errorDisplay.textContent = "Warning! Both inputs must be greater than zero.";
        return false;
    }

    errorDisplay.textContent = '';
    return true;
}

// Calculate MPG function
function calculateMPG() {
    let miles = parseFloat(milesInput.value);
    let gallons = parseFloat(gallonsInput.value);
    return miles / gallons;
}

// Display results function
function displayResults(mpg) {
    mpgDisplay.value = mpg.toFixed(2);
}

// Event listeners
document.getElementById('calculate').addEventListener('click', function() {
    if (isValid()) {
        let mpg = calculateMPG();
        displayResults(mpg);
    }
});

document.getElementById('clear').addEventListener('click', clearForm);

milesInput.addEventListener('dblclick', function() {
    milesInput.value = "";
});

gallonsInput.addEventListener('dblclick', function() {
    gallonsInput.value = "";
});