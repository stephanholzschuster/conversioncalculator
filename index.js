function convertLengthValues() {
    let inputValues = document.getElementById("inputValues").value;
    let valuesArray = inputValues.split("x");
    
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

function toggleUnitLabel() {
    let unitSwitch = document.getElementById("unitSwitch");
    let unitLabel = document.getElementById("unitLabel");
    let inputValuesLabel = document.querySelector('label[for="inputValues"]');

    if (unitSwitch.checked) {
        unitLabel.innerHTML = "cm → inch";
        inputValuesLabel.innerHTML = "Enter Values (L x B x H) in cm:";
    } else {
        unitLabel.innerHTML = "inch → cm";
        inputValuesLabel.innerHTML = "Enter Values (L x B x H) in inches:";
    }
}

function clearValues() {
    document.getElementById("inputValues").value = "";
    document.getElementById("outputValues").value = "";
}


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

function toggleWeightLabel() {
    let unitSwitch = document.getElementById("weightSwitch");
    let unitLabel = document.getElementById("weightLabel");
    let inputValuesLabel = document.querySelector('label[for="inputWeight"]');

    if (unitSwitch.checked) {
        unitLabel.innerHTML = "kg → lbs";
        inputValuesLabel.innerHTML = "Enter Value in kg:";
    } else {
        unitLabel.innerHTML = "lbs → kg";
        inputValuesLabel.innerHTML = "Enter Value in lbs:";
    }
}

function clearWeightValues() {
    document.getElementById("inputWeight").value = "";
    document.getElementById("outputWeight").value = "";
}

function initializePage() {
    toggleUnitLabel();
    toggleWeightLabel();
}