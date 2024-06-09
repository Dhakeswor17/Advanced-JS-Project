const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChar = '0123456789';
const symbolsChar = '*!?+-.,';

const getRandomChar = (char) => {
    const index = Math.floor(Math.random() * char.length);
    return char[index];
}

const generatePassword = () => {
    let lowerCaseCheckedBox = document.getElementById("lowercase");
    let upperCaseCheckedBox = document.getElementById("uppercase");
    let numberCaseCheckedBox = document.getElementById("number");
    let symbolsCaseCheckedBox = document.getElementById("symbol");
    let passwordInput = document.getElementById("password");
    let exeDuplicate = document.getElementById("exclude-duplicate");
    
    let characters = "";
    if (lowerCaseCheckedBox.checked) characters += lowerCaseChar;
    if (upperCaseCheckedBox.checked) characters += upperCaseChar;
    if (numberCaseCheckedBox.checked) characters += numberChar;
    if (symbolsCaseCheckedBox.checked) characters += symbolsChar;

    if (characters === "") {
        passwordInput.value = "";
        return;
    }

    let password = "";
    let length = 12;
    while (password.length < length) {
        let char = getRandomChar(characters);
        if (exeDuplicate.checked && password.includes(char)) continue;
        password += char;
    }
    passwordInput.value = password;
}

document.getElementById("generate").addEventListener("click", generatePassword);

const copyPassword = () => {
    let passwordInput = document.getElementById("password");
    passwordInput.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

document.getElementById("copy").addEventListener("click", copyPassword);
