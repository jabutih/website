document.addEventListener('DOMContentLoaded', (event) => {
    const counterElement = document.getElementById('contador');
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    counterElement.textContent = counter;

    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const timeToMidnight = midnight.getTime() - now.getTime();

    setTimeout(() => {
        incrementCounter();
        setInterval(incrementCounter, 24 * 60 * 60 * 1000);
    }, timeToMidnight);

    function incrementCounter() {
        counter = (counter + 1) % 6; // Increment and reset to 0 when it reaches 5
        counterElement.textContent = counter;
        localStorage.setItem('counter', counter);
    }
});