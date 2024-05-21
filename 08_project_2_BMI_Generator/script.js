const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get height and weight values from the input fields
    const heightInput = document.querySelector('#Height').value;
    const weightInput = document.querySelector('#Weight').value;

    // Parse the height and weight values
    const height = parseInt(heightInput);
    const weight = parseInt(weightInput);

    const results = document.querySelector('#results');

    // Check for invalid height
    if (!heightInput || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height.`;
    } 
    // Check for invalid weight
    else if (!weightInput || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight.`;
    } 
    // Calculate BMI and display result
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
