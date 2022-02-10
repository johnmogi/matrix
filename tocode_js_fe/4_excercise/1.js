const tbody = document.querySelector('tbody')
let res = '';
const fragm = document.createDocumentFragment();


for (let i = 1; i < 100; i++) {
    res += '<tr>'
    for (let j = 1; j < 100; j++) {
        res += `<td> ${i*j} </td>`
    }
    res += '</tr>' 
}


tbody.appendChild(fragm)