function updateTime() {
    const currentDateTimeElement = document.getElementById('currentDateTime'); // Corrected the id
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }; // Use 'hour12: false' for 24-hour format
    const currentTime = new Date().toLocaleTimeString('en-US', options);
    
    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = currentTime.split(':');

    // Create an HTML string with different colors for hours, minutes, and seconds
    const timeHTML = `
        <span style="color: white;">${hours}</span>:
        <span style="color: white;">${minutes}</span>:
        <span style="color: red;">${seconds}</span>
    `;

    // Update the currentDateTimeElement with the colored time
    currentDateTimeElement.innerHTML = timeHTML;
}

// Update the time initially
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
