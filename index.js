let charAll = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z","X","C","V","B","N","M", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "[", "]", "{", "}", "-", "=", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ";", "'", ":", "`", "~", ",", ".", "/", "<", ">", "?"] 
let charNoSym= ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z","X","C","V","B","N","M", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p","a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let charNumOnly = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

let passOne = document.getElementById("pass-1")
let passTwo = document.getElementById("pass-2")
let passThree = document.getElementById("pass-3")
let passFour = document.getElementById("pass-4")

const cb1 = document.querySelector("#spec-char")
const cb2 = document.querySelector("#choose-PIN")

function randomChar() {
    if (cb1.checked === true && cb2.checked === false) {
        charSelect = charAll
        loopLength = 91
    } else if (cb1.checked === false && cb2.checked === false) {
        charSelect = charNoSym
        loopLength = 62
    } else if (cb2.checked === true) {
        charSelect = charNumOnly
        loopLength = 10
    }
    else {console.log("error")}
        
    let randomNum = Math.floor((Math.random()*loopLength))
    return charSelect[randomNum]
}
function buttonPress() {
        passOne.value = ""
        passTwo.value = ""
        passThree.value = ""
        passFour.value = "" 
        
    function passLength() {
        var complexity = document.getElementById("pass-length").value
            if (cb2.checked === true && complexity === "") {
                complexity = 4
            } else if (cb2.checked === false && complexity === "") {
                complexity = 20
            }
        return complexity
    }
           
    for (let i = 0; i < passLength(); i++) {
        passOne.value += (randomChar())
        passTwo.value += (randomChar())
        passThree.value += (randomChar())
        passFour.value += (randomChar())
    }
}