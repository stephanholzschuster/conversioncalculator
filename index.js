//Test
function convertLengthValues() {
    let inputValues = document.getElementById("inputValues").value;
    let valuesArray = inputValues.split("x");
    
    // Überprüfen, ob das Format korrekt ist
    if (valuesArray.length !== 3 || isNaN(parseFloat(valuesArray[0])) || isNaN(parseFloat(valuesArray[1])) || isNaN(parseFloat(valuesArray[2]))){
        // Wenn das Format falsch ist, eine Fehlermeldung anzeigen
        alert("Please enter following format: L x B x H e.g. 10 x 20 x 30", 'danger');
        document.getElementById("outputValues").value = "";
        return;
    } 
    
    let length = parseFloat(valuesArray[0].trim());
    let width = parseFloat(valuesArray[1].trim());
    let height = parseFloat(valuesArray[2].trim());

    let unitSwitch = document.getElementById("unitSwitch");
    let outputValues = document.getElementById("outputValues");
    

    if (unitSwitch.checked) {
        let lengthInInch = Math.ceil(length / 2.54);
        let widthInInch = Math.ceil(width / 2.54);
        let heightInInch = Math.ceil(height / 2.54);

        outputValues.value = lengthInInch.toFixed(0) + " x " + widthInInch.toFixed(0) + " x " + heightInInch.toFixed(0) + " inches";
    } else {
        let lengthInCm = Math.ceil(length * 2.54);
        let widthInCm = Math.ceil(width * 2.54);
        let heightInCm = Math.ceil(height * 2.54);

        outputValues.value = lengthInCm.toFixed(0) + " x " + widthInCm.toFixed(0) + " x " + heightInCm.toFixed(0) + " cm";
    }
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        convertLengthValues();
    }
});

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

function clearValues() {
    document.getElementById("inputValues").value = "";
    document.getElementById("outputValues").value = "";
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Delete') {
        clearValues();
    }
});

function convertWeightValues() {
    let inputValues = document.getElementById("inputWeight").value;
    let weight = inputValues;

    let unitSwitch = document.getElementById("weightSwitch");
    let outputValues = document.getElementById("outputWeight");

    if (unitSwitch.checked) {
        let weightInKg = Math.ceil(weight * 2.20462);
        outputValues.value = weightInKg.toFixed(0) + " lbs";
    } else {
        let weightInLbs = Math.ceil(weight / 2.20462);
        outputValues.value = weightInLbs.toFixed(0) + " kg";
    }
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        convertWeightValues();
    }
});

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

function clearWeightValues() {
    document.getElementById("inputWeight").value = "";
    document.getElementById("outputWeight").value = "";
}

document.addEventListener('keyup', function(event) {
    if (event.key === 'Delete') {
        clearWeightValues();
    }
});

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

function initializePage() {
    toggleUnitLabel();
    toggleWeightLabel();
}