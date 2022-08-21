"use strict"

const SimpleHexValues = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFFFF"];

function run() {
    let string = randomLetterAndAlphabet() ;
    let count = 0;

    let color = letterAndNumber()
    console.log(color)
    document.body.style.backgroundColor = color
}

run()

// background color


// produce letter and number
function letterAndNumber() {
    let letter = randomLetterAndAlphabet();
    let BC = []

    while (BC.length < 6) {
        letter = randomLetterAndAlphabet();
        if (onlyLettersAndNumbers(letter)) {
            BC.push(letter)
        } else {
            letter = randomLetterAndAlphabet();
        }
    }

    BC.unshift("#")

    return BC.join("")
}

// char code of letter and alphabet 48 - 70
function randomLetterAndAlphabet() {
    let charCodeGap = 22;
    let num = Math.floor(Math.random() * charCodeGap)
    let randomNum = num + 48;
    
    return String.fromCharCode(randomNum)
}

// check letter and numbers only
function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
}

// console.log(String.fromCharCode(65));