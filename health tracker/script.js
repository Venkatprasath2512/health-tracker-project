function trackSleep() {
  const hours = parseFloat(document.getElementById('sleepHours').value);
  let result = "Please enter a valid number.";
  if (!isNaN(hours)) {
    if (hours >= 7 && hours <= 9) {
      result = "Great! You had enough sleep.";
    } else if (hours < 7) {
      result = "You need more sleep.";
    } else {
      result = "That’s a lot of sleep!";
    }
  }
  document.getElementById('sleepResult').innerText = result;
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  let result = "Please enter valid values.";
  if (weight && height) {
    const bmi = (weight / (height * height)).toFixed(1);
    if (bmi < 18.5) result = `BMI: ${bmi} - Underweight`;
    else if (bmi < 24.9) result = `BMI: ${bmi} - Normal`;
    else if (bmi < 29.9) result = `BMI: ${bmi} - Overweight`;
    else result = `BMI: ${bmi} - Obese`;
  }
  document.getElementById('bmiResult').innerText = result;
}

function checkOxygen() {
  const level = parseInt(document.getElementById('oxygenLevel').value);
  let result = "Please enter a valid SpO₂ level.";
  if (!isNaN(level)) {
    if (level >= 95) {
      result = "Oxygen level is normal.";
    } else if (level >= 90) {
      result = "Slightly low oxygen level. Monitor closely.";
    } else {
      result = "Seek medical attention!";
    }
  }
  document.getElementById('oxygenResult').innerText = result;
}

function trackRun() {
  const distance = parseFloat(document.getElementById('distance').value);
  const time = parseFloat(document.getElementById('time').value);
  let result = "Please enter valid distance and time.";
  if (distance && time) {
    const speed = (distance / (time / 60)).toFixed(2);
    result = `You ran at ${speed} km/h`;
  }
  document.getElementById('runResult').innerText = result;
}
