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
// convert Weight Value One
function convertWeightValueOne() {
    let inputValueOne = document.getElementById("inputWeightOne").value;
    let weightOne = inputValueOne;

    let unitSwitch = document.getElementById("weightSwitch");
    let outputValueOne = document.getElementById("outputWeightOne");

    let weightConstant = 2.20462;

    if (unitSwitch.checked) {
        let weightInKg = Math.ceil(weightOne * weightConstant);
        outputValueOne.value = weightInKg.toFixed(0) + " lbs";
    } else {
        let weightInLbs = Math.ceil(weightOne / weightConstant);
        outputValueOne.value = weightInLbs.toFixed(0) + " kg";
    }
}

// convert Weight Value Two
function convertWeightValueTwo() {
    let inputValueTwo = document.getElementById("inputWeightTwo").value;
    let weightTwo = inputValueTwo;

    let unitSwitch = document.getElementById("weightSwitch");
    let outputValueTwo = document.getElementById("outputWeightTwo");

    let weightConstant = 2.20462;

    if (unitSwitch.checked) {
        let weightInKg = Math.ceil(weightTwo * weightConstant);
        outputValueTwo.value = weightInKg.toFixed(0) + " lbs";
    } else {
        let weightInLbs = Math.ceil(weightTwo / weightConstant);
        outputValueTwo.value = weightInLbs.toFixed(0) + " kg";
    }
}

// EventListeners
// // EventListener to convert by pressing Enter
document.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        convertWeightValueOne();
        convertWeightValueTwo();
    }
});

// // EventListener to delete values by pressing Delete
function clearWeightValues() {
    document.getElementById("inputWeightOne").value = "";
    document.getElementById("inputWeightTwo").value = "";
    document.getElementById("outputWeightOne").value = "";
    document.getElementById("outputWeightTwo").value = "";

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
    let inputValueLableOne = document.querySelector('label[for="inputWeightOne"]');
    let inputValueLableTwo = document.querySelector('label[for="inputWeightTwo"]');

    if (unitSwitch.checked) {
        unitLabel.innerHTML = "kg → lbs";
        inputValueLableOne.innerHTML = "Enter value in kg:";
        inputValueLableTwo.innerHTML = "Enter value in kg:";
    } else {
        unitLabel.innerHTML = "lbs → kg";
        inputValueLableOne.innerHTML = "Enter value in lbs:";
        inputValueLableTwo.innerHTML = "Enter value in lbs:";
    }
}

// Jump between dimension input fields and mass input fields
let inputValues = document.getElementById("inputValues");
let inputWeightOne = document.getElementById("inputWeightOne");
let inputWeightTwo = document.getElementById("inputWeightTwo");

inputValues.addEventListener("keydown", function(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    if (event.shiftKey) {
      // Wenn Shift-Taste gedrückt ist, zum vorherigen Element (inputWeightTwo) wechseln
      inputWeightTwo.focus();
    } else {
      // Andernfalls zum nächsten Element (inputWeightOne) wechseln
      inputWeightOne.focus();
    }
  }
});

inputWeightOne.addEventListener("keydown", function(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    if (event.shiftKey) {
      // Wenn Shift-Taste gedrückt ist, zum vorherigen Element (inputValues) wechseln
      inputValues.focus();
    } else {
      // Andernfalls zum nächsten Element (inputWeightTwo) wechseln
      inputWeightTwo.focus();
    }
  }
});

inputWeightTwo.addEventListener("keydown", function(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    if (event.shiftKey) {
      // Wenn Shift-Taste gedrückt ist, zum vorherigen Element (inputWeightOne) wechseln
      inputWeightOne.focus();
    } else {
      // Andernfalls zum nächsten Element (inputValues) wechseln
      inputValues.focus();
    }
  }
});
