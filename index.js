// import randomcolor from "randomcolor"

const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

const badAdvice = [
    "Just give up already.",
    "Try drinking orange juice after brushing your teeth.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

const button = document.getElementById("advice-button")
const adviceDisplay = document.getElementById("advice-display")
const adviceEye = document.getElementById("advice-eye")
const modeSelector = document.getElementById("advice-type")

button.addEventListener("click", displayAdvice)

function displayAdvice() {
    let randomNum = Math.ceil(Math.random() * advice.length) -1
    adviceDisplay.textContent = advice[randomNum]

    adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})
}



// generate random light colors: 
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})