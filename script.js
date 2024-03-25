document.getElementById("bmiForm").onsubmit = function() {
    // Get height and weight values from input fields
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    // Calculate BMI
    var bmi = weight / ((height/100) * (height/100));

    // Display the result
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);

    return false; // Prevent form submission
};