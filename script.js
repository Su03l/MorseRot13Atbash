// Morse Code Dictionary
const morseCodeMap = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
    'Y': '-.--',  'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----',
    ' ': '/'
};

const textToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
};

const morseToText = (morse) => {
    const reversedMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));
    return morse.split(' ').map(code => reversedMap[code] || '').join('');
};

// Convert Text to Morse Code
function convertToMorse() {
    const textInput = document.getElementById('text-input').value;
    const result = textToMorse(textInput);
    document.getElementById('morse-result').textContent = `Output : ${result}`;
}

// Convert Morse Code to Text
function convertToText() {
    const morseInput = document.getElementById('morse-input').value;
    const result = morseToText(morseInput);
    document.getElementById('text-result').textContent = `Output : ${result}`;
}

// Function to convert text to ROT13
function convertToROT13() {
    let inputText = document.getElementById('text-input').value;
    let result = rot13(inputText);
    document.getElementById('morse-result').innerHTML = 'Output: ' + result;
}

// Function to convert ROT13 to original text
function convertToOriginal1() {
    let inputText = document.getElementById('morse-input').value;
    let result = rot13(inputText);
    document.getElementById('text-result').innerHTML = 'Output: ' + result;
}

// Helper function to perform ROT13 cipher conversion
function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
        // Convert letters to ROT13
        let base = (c <= 'Z') ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode(base + (c.charCodeAt(0) - base + 13) % 26);
    });
}
// Function to convert text to Atbash
function convertToAtbash() {
    let inputText = document.getElementById('text-input').value;
    let result = atbash(inputText);
    document.getElementById('morse-result').innerHTML = 'Output: ' + result;
}

// Function to convert Atbash to original text
function convertToOriginal2() {
    let inputText = document.getElementById('morse-input').value;
    let result = atbash(inputText);
    document.getElementById('text-result').innerHTML = 'Output: ' + result;
}

// Helper function to perform Atbash cipher conversion
function atbash(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
        // Convert letters to Atbash (A ↔ Z, B ↔ Y, C ↔ X, etc.)
        let base = (c <= 'Z') ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        let offset = c.charCodeAt(0) - base;
        return String.fromCharCode(base + (25 - offset));  // Reverse the alphabet
    });
}

// Function to navigate to HomePage.html when the "Back" button is clicked
function goToHomePage() {
    window.location.href = "homePgae.html"; // Redirect to HomePage.html
}

// Attach the function to the "Back" button
document.querySelector(".Back").addEventListener("click", goToHomePage);