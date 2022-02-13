const inputArr = document.querySelectorAll('input')
const sentence = [
'with great power',
'comes great responsability',
'not all those who wonder',
'are lost',
'today is the new day',
]
for (let i = 0; i < inputArr.length; i++) {
    inputArr[i].textContent = sentence
    
}

