
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15;
const password1El = document.getElementById("password1-el");
const password2El = document.getElementById("password2-el");
const passwordEl = document.getElementById("onclick");
function generatePassword(){

// get random character
function getRandomCharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// loop through randomPassword 15 times while putting random character in it and return value to passwordGenerate()
function passwordGenerate(){
    let randomPassword = ""
    for ( let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    
    return randomPassword
}
 
function passwordNew(){
    password1El.innerText = passwordGenerate()
    password2El.innerText = passwordGenerate()
}
// print out the password to the screen
function getPassword(){
    passwordNew()
};





