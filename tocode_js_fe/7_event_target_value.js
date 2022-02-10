const inputs = document.querySelectorAll('input')

function writeToAllInputs(text){
    for (let input of inputs){
        input.value = text;
    }
}
function handleTextChangeBox(event){
    writeToAllInputs(event.target.value)
}
for (let inp of inputs){
    inp.addEventListener('input', handleTextChangeBox )
}
writeToAllInputs('hi !')