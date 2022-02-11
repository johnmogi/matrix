const stage = document.querySelector('body')
const currentScore = document.querySelector('#currentScore')

let numOfSquares = 8;
const frag = document.createDocumentFragment();

for (let i = 0; i < numOfSquares; i++) {
    let box = document.createElement('div')
    box.classList.add('grey')
    frag.appendChild(box)
}
stage.appendChild(frag)

const boxes = document.querySelectorAll('.grey')

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    box.style.backgroundColor = "grey"
    if(i == boxes.length -1 ){
        box.classList.add('red')
        box.classList.remove("grey");
        box.style.backgroundColor = "red"
    }
}

const red = document.querySelector('.red')
let [result, bad, good] = [0 , 2 , 5];

function score(){
    result = result + good
    currentScore.textContent = result
    
}
function badScore(){
    if (result >= 2){
    result = result - bad
    currentScore.textContent = result
    }
}
red.addEventListener('click', function(){
    score()
    runAway()
})

for (let box of boxes){
    box.addEventListener('click', badScore)
}

function runAway(){
    const width = document.body.clientWidth - 100
    const x = Math.random() * width
    const height = document.body.clientHeight - 100
    const y = Math.random() * height
    Velocity(red, 'jello', {duration:500})


}