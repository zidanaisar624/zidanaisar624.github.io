// File: js/script.js

document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
    const gender = document.getElementById('gender').value;

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal (Ideal)';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Obesitas';
    }

    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi}`;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;
    document.getElementById('result').classList.remove('hidden');
});
