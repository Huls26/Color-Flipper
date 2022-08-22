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

        if (text === "btn-hex btn-nav") {
            option = 1
        } else if (text === "btn-simple btn-nav") {
            option = 0
        } else if (text === "btn-click" && option < 2) {
            console.log(option)
            let color = container[option];
            document.body.style.backgroundColor = color;
            span.innerText = color;

            if (color === "#000000") {
                color = "white"
                span.style.color = color
            } else {
                span.style.color = color
            }
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
// HEADER
let header = document.querySelector("header");
header.style.fontSize = "1.5em"
header.style.padding = ".8em 0"
// header.style.width = "100%";
header.style.backgroundColor = "rgb(240, 240, 240)";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.boxShadow = "0px 0px 20px lightblue"

// NAV
let nav = document.querySelector("nav")
nav.style.width = "500px"
nav.style.display = "flex";
nav.style.justifyContent = "space-between";

// title 
let title = document.querySelector(".title");
title.style.color = "rgb(30, 150, 200)"
title.style.fontWeight = "bold"
title.style.textShadow = "1px 1px white"

// button nav
let btnNav = document.querySelectorAll(".btn-nav");
for (let btn of Array.from(btnNav)) {
    btn.style.border = "none";
    btn.style.fontSize = "1em";
    btn.style.marginLeft = ".5em";
    btn.style.textShadow = "1px 1px white"
}

// Section
let section = document.querySelector("section");
section.style.height = `${window.innerHeight}px`;
section.style.display = "flex";
section.style.justifyContent = "center";
section.style.flexDirection = "column";
section.style.alignItems = "center"

// h1 background color
let backgroundColorText = document.querySelector(".bgc");
backgroundColorText.style.fontSize = "2.6em";
backgroundColorText.style.fontFamily = "Arial";
backgroundColorText.style.backgroundColor = "Black"
backgroundColorText.style.color = "rgb(240, 240, 240)"
backgroundColorText.style.marginBottom = ".7em"
backgroundColorText.style.padding = ".3em .6em";
backgroundColorText.style.borderRadius = "10px"
backgroundColorText.style.letterSpacing = ".2em"
backgroundColorText.style.textShadow = "1px 1px lightblue"

// btn click me
let clickMe = document.querySelector(".btn-click");
clickMe.style.fontFamily = "Arial";
clickMe.style.fontWeight = "bold"
clickMe.style.fontSize = "1.1em"
clickMe.style.borderWidth = "5px"
clickMe.style.borderRadius = "10px"
clickMe.style.padding = ".4em 1em";
clickMe.style.letterSpacing = ".1em"
clickMe.style.textShadow = "1px 1px lightblue"
