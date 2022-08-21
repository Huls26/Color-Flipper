"use strict"
function run() {
    let span = document.querySelector(".hex");
    let option

    window.addEventListener("click", event => {
        let element = event.target;
        let text = element.getAttribute("class");
        const simple = simpleBG();
        const hex = letterAndNumber();
        const container = [simple, hex];
        
        if (text === "btn-hex") {
            option = 1
        } else if (text === "btn-simple") {
            option = 0
        } else if (text === "btn-click") {
            let color = container[option]
            document.body.style.backgroundColor = color;
            span.innerText = color;
        }
    })
}

run()

// background color
// simple color
function simpleBG() {
    const SimpleHexValues = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFFFF"];
    const randomNum = Math.floor(Math.random() * SimpleHexValues.length);
    return SimpleHexValues[randomNum]
}

// hex values
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

// style


// console.log(String.fromCharCode(65));