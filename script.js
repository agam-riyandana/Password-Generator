const LowercaseChars "abcdefghijklmnopqrstuvwxyz";

const uppercaseChars "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; const numberChars "0123456789";

const symbolchars "1-S^+";

const spaceChar

function getRandomChar(chars) {

const index Math.floor(Math.random() chars.length);

return chars [index];

function generate Passworα() {

const passwordInput document.getElementById("password");

const lowercaseCheckbox document.getElementById("lowercase");

const uppercaseCheckbox document.getElementById("uppercase"); const numbersCheckbox document.getElementById("numbers");

const symbolsCheckbox document.getElementById("symbols");

const exclude DuplicateCheckbox document.getElementById("exc-duplicate");

const spacesCheckbox document.getElementById("spaces");

If next slide
}
