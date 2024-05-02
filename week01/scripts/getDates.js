const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

document.getElementById('lastModified').textContent += document.lastModified;
document.getElementById('location').textContent = 'Lagos Nigeria';

// Get user's location
// Check if localStorage supports
if (typeof(Storage) !== "undefined") {
    // Check if visit count exists in localStorage
    if (localStorage.getItem("visitCount")) {
        // If exists, get the value and increment
        var count = parseInt(localStorage.getItem("visitCount"));
        count++;
        localStorage.setItem("visitCount", count);
        document.getElementById("visitCount").textContent = count;
    } else {
        // If not exists, set visit count to 1
        localStorage.setItem("visitCount", 1);
        document.getElementById("visitCount").textContent = 1;
    }
} else {
    // If localStorage is not supported, show a message
    document.getElementById("visitCount").textContent = "localStorage is not supported by your browser.";
}

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const section = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        document.body.style.background = "#000";
        document.body.style.color = "#fff";
        modeButton.textContent = "🔆";
    } else {
        document.body.style.background = "#eee";
        document.body.style.color = "#000";
        modeButton.textContent = "🕶️";
    }
});

// Toggle the 'active' class on click of the hamburger icon
hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
    // Toggle between hamburger and X icon
    if (hamburger.textContent === "☰") {
        hamburger.textContent = "✕";
    } else {
        hamburger.textContent = "☰";
    }
});
