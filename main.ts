// HTML Elements
let milesInput: HTMLInputElement;
let gallonsInput: HTMLInputElement;
let mpgDisplay: HTMLInputElement;
let errorDisplay: HTMLElement;

window.onload = function() {
    // Get HTML Elements
    milesInput = <HTMLInputElement>document.getElementById("miles");
    gallonsInput = <HTMLInputElement>document.getElementById("gallons");
    mpgDisplay = <HTMLInputElement>document.getElementById("mpg");
    errorDisplay = <HTMLElement>document.getElementById("error");

    // Add Event Listeners
    let calculateButton: HTMLElement | null = document.getElementById("calculate");
    if (calculateButton) {
        calculateButton.onclick = calculateMPG;
    } 
    else {
        console.error("Calculate button not found");
    }

    let clearButton: HTMLElement | null = document.getElementById("clear");
    if (clearButton) {
        clearButton.onclick = clearForm;
    }
    else {
        console.error("Clear button not found");
    }

    milesInput.ondblclick = clearInput;
    gallonsInput.ondblclick = clearInput;
}

function calculateMPG(): void {
    let milesDriven: number = parseFloat(milesInput.value);
    let gallonsUsed: number = parseFloat(gallonsInput.value);

    if (isValid(milesDriven, gallonsUsed)) {
        let milesPerGallon: number = milesDriven / gallonsUsed;
        displayResults(milesPerGallon);
    }
}

function isValid(miles: number, gallons: number): boolean {
    let isValid: boolean = true;
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

function displayResults(mpg: number): void {
    mpgDisplay.value = mpg.toString();
}

function clearForm(): void {
    milesInput.value = "";
    gallonsInput.value = "";
    mpgDisplay.value = "";
    errorDisplay.innerText = "";
}

function clearInput(event: Event): void {
    let targetInput: HTMLInputElement = <HTMLInputElement>event.target;
    targetInput.value = "";
}
