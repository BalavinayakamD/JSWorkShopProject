window.addEventListener('DOMContentLoaded',()=>{var enteredText = document.getElementById('enteredText');
var totalChar = document.getElementById('totalChar');
var remainingChar = document.getElementById('remainingChar');
var countLimit = 100;
function count(){
    totalChar.textContent = enteredText.value.length;
    remainingChar.textContent = countLimit - enteredText.value.length;
}
enteredText.addEventListener('input', count);
})