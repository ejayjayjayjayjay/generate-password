const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el")
let generatedEl = document.getElementById("generated-el")
let generatedElTwo = document.getElementById("generated-el-two")
let lengthEl = document.getElementById("length-el")
let errorEl = document.getElementById("error-el")

function getRandom() {
    return Math.floor(Math.random() * characters.length)
}

passwordEl.addEventListener("click", function (){
    let userInputNumber = lengthEl.value
    let password = []
    let passwordTwo = []
    if (userInputNumber === "") {
        errorEl.textContent = "Please input number first before you generate"
        generatedEl.textContent = ""
        generatedElTwo.textContent = ""
    } else {
        if (userInputNumber <= 16) {
            for (let i = 0; i < userInputNumber; i++ ) {
            password += characters[getRandom()]
            passwordTwo += characters[getRandom()]
        }
            generatedEl.textContent = password
            generatedElTwo.textContent = passwordTwo
            errorEl.textContent = ""
        } else {
            errorEl.textContent = "Please input number not greater than 16"
        }

    }
})

