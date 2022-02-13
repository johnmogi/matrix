const box = document.querySelector('#box')

box.style.backgroundColor = "blue"
box.style.height = '100px';
box.style.width = '100px';

box.addEventListener('click', function() {
    box.classList.add('animate__animated', 'animate__bounceIn')
})