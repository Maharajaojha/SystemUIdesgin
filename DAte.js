function getCurrentDate() {
    const currentDateElement = document.getElementById('currentDate');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDateTime = new Date().toLocaleDateString('en-US', options);
    currentDateElement.textContent = currentDateTime;
}

// Update the current date initially
getCurrentDate();
