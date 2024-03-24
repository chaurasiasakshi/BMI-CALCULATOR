// let button = document.getElementById('btn');

window.onload= () =>{
    const button = document.querySelector( '#btn' );
    button.addEventListener("click", calculateBmi)

}

function calculateBmi(){
    const height = document.getElementById('height');
    const weight = document.getElementById('weight');

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

}
button.addEventListener('click', () => {
   
   
   
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    const height = parseInt(heightInput.value.trim());
    const weight = parseInt(weightInput.value.trim());

    if (isNaN(height) || height <= 0) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (isNaN(weight) || weight <= 0) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Under weight : ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal : ' + bmi;
        } else {
            result.innerHTML = 'Over weight : ' + bmi;
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});
