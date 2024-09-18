const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');
const secondsEl = document.querySelector('.seconds');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.classList.toggle('dark', savedTheme === 'dark');
    toggle.innerHTML = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

toggle.addEventListener('click', (e) => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    e.target.innerHTML = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

/**
 * Sets the time on the clock
 */
function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12 || 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}`;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

/**
 * Scales a number from one range to another.
 * @param {number} num - The number to scale.
 * @param {number} in_min - The lower bound of the input range.
 * @param {number} in_max - The upper bound of the input range.
 * @param {number} out_min - The lower bound of the output range.
 * @param {number} out_max - The upper bound of the output range.
 * @returns {number} The scaled number.
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function updateClock() {
    setTime();
    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);
