
const passInput = document.querySelector('#password')
const notif = document.querySelector('#notif')

function checkStrength(){
    let check = passInput.value.length
    let checkContent = passInput.value
    if (check < 4){
        notif.innerText = 'value too small'
    } if (check >= 4 && check < 8){
        for (let i = 0; i < checkContent.length; i++) {
        console.log(checkContent[i]);            
        }
        notif.textContent = 'value medium strength'
    }else if (check >= 8){
        notif.textContent = 'strong password'

    }
}
passInput.addEventListener('input', checkStrength)
