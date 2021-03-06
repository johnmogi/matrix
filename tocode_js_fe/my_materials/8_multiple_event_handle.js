function handleTextInBox(event){
    const value = event.target.value

    const boxes = document.querySelectorAll('.inputs input');

    for (let box of boxes){
        // @ts-ignore
        box.value = value;
    }
}

const container = document.querySelector('.inputs')
container.addEventListener('input', handleTextInBox)


const addInputButton = document.querySelector('#add-input')
addInputButton.addEventListener('click', function(){
    const inp = document.createElement('input');
    document.querySelector('.inputs').appendChild(inp)
})