(function(){ //IIFE 
const ticker = document.querySelector('#ticker')
const textSpan = document.querySelector('#ticketer')

const textStrings = [
    
    'loading',
    'hi',
    'bye',
]

let index = 0;

function tick(){
    textSpan.textContent = textStrings[index]
    index = (index +1) % textStrings.length 
    setTimeout(tick, 1000)
}
ticker.addEventListener('click', function(){
    tick()
})
}());