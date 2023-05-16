// Initialize page to enable toggle functionality
function initializePage() {
    toggleUnitLabel();
    toggleWeightLabel();
}

// Dimension Conversion
function convertLengthValues() {
    let inputValues = document.getElementById("inputValues").value;
    let valuesArray = inputValues.split("x");

    // Check, if input format is correct
    if (valuesArray.length !== 3 || isNaN(parseFloat(valuesArray[0])) || isNaN(parseFloat(valuesArray[1])) || isNaN(parseFloat(valuesArray[2]))){
        alert("Please enter following format: L x B x H - e.g. 10 x 20 x 30 cm", 'danger');
        document.getElementById("outputValues").value = "";
        return;
    } 
    
    // Grab values from input feild
    let length = parseFloat(valuesArray[0].trim());
    let width = parseFloat(valuesArray[1].trim());
    let height = parseFloat(valuesArray[2].trim());

    let dimConstant = 2.54;

    let unitSwitch = document.getElementById("unitSwitch");
    let outputValues = document.getElementById("outputValues");

    // cm to inch
    if (unitSwitch.checked) {
        let lengthInInch = Math.ceil(length / dimConstant);
        let widthInInch = Math.ceil(width / dimConstant);
        let heightInInch = Math.ceil(height / dimConstant);
        outputValues.value = lengthInInch.toFixed(0) + " x " + widthInInch.toFixed(0) + " x " + heightInInch.toFixed(0) + " inches";
    }
    
    // inch to cm
    else {
        let lengthInCm = Math.ceil(length * dimConstant);
        let widthInCm = Math.ceil(width * dimConstant);
        let heightInCm = Math.ceil(height * dimConstant);

        outputValues.value = lengthInCm.toFixed(0) + " x " + widthInCm.toFixed(0) + " x " + heightInCm.toFixed(0) + " cm";
    }
}

// EventListeners
// // EventListener to convert by pressing Enter
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        convertLengthValues();
    }
});

// // EventListener to delete values by pressing Delete
function clearValues() {
    document.getElementById("inputValues").value = "";
    document.getElementById("outputValues").value = "";
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Delete') {
        clearValues();
    }
});

// Change between units using toggle button
function toggleUnitLabel() {
    let unitSwitch = document.getElementById("unitSwitch");
    let unitLabel = document.getElementById("unitLabel");
    let inputValuesLabel = document.querySelector('label[for="inputValues"]');

    if (unitSwitch.checked) {
        unitLabel.innerHTML = "cm → inch";
        inputValuesLabel.innerHTML = "Enter values (L x B x H) in cm:";
    } else {
        unitLabel.innerHTML = "inch → cm";
        inputValuesLabel.innerHTML = "Enter values (L x B x H) in inches:";
    }
}

// Mass Conversion
function convertWeightValues() {
    let inputValues = document.getElementById("inputWeight").value;
    let weight = inputValues;

    let unitSwitch = document.getElementById("weightSwitch");
    let outputValues = document.getElementById("outputWeight");

    let weightConstant = 2.20462;

    if (unitSwitch.checked) {
        let weightInKg = Math.ceil(weight * weightConstant);
        outputValues.value = weightInKg.toFixed(0) + " lbs";
    } else {
        let weightInLbs = Math.ceil(weight / weightConstant);
        outputValues.value = weightInLbs.toFixed(0) + " kg";
    }
}

// EventListeners
// // EventListener to convert by pressing Enter
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        convertWeightValues();
    }
});

// // EventListener to delete values by pressing Delete
function clearWeightValues() {
    document.getElementById("inputWeight").value = "";
    document.getElementById("outputWeight").value = "";
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Delete') {
        clearWeightValues();
    }
});

// Change between units using toggle button
function toggleWeightLabel() {
    let unitSwitch = document.getElementById("weightSwitch");
    let unitLabel = document.getElementById("weightLabel");
    let inputValuesLabel = document.querySelector('label[for="inputWeight"]');

    if (unitSwitch.checked) {
        unitLabel.innerHTML = "kg → lbs";
        inputValuesLabel.innerHTML = "Enter value in kg:";
    } else {
        unitLabel.innerHTML = "lbs → kg";
        inputValuesLabel.innerHTML = "Enter value in lbs:";
    }
}
// Jump between dimension input field and mass input field
var inputValues = document.getElementById("inputValues");
var inputWeight = document.getElementById("inputWeight");

inputValues.addEventListener("keydown", function(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    inputWeight.focus();
  }
});

inputWeight.addEventListener("keydown", function(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    inputValues.focus();
  }
});