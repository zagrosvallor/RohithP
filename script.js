// Initialize AOS (Animate On Scroll)
AOS.init({
    offset: 0,
    duration: 1500,  // Default animation duration
    once: true,      // Only run the animation once when it scrolls into view
});

// Toggle the navigation menu in mobile view
function hamburg() {
    const navbar = document.querySelector(".nav-container .links");
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
}

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "STUDENT",
    "TECH ENTHUSIAST",
    "LIFELONG LEARNER",
];
let speed = 100; // Typing speed (milliseconds)
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

// Function to type out the text in the typewriter effect
function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

// Function to erase the text after it's typed
function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length; // Loop through the text array
        charIndex = 0;
        setTimeout(typeWriter, 500); // Wait before starting the next word
    }
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;
