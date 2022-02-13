let res = ''

for (let i = 1; i < 11; i++) { 
    res += '<tr>'
    for (let j = 1; j < 11; j++) {
        res += `<td> ${ i * j } </td>` 
    } 
    res += '</tr>'
    
}
const table = document.querySelector('tbody');
table.innerHTML = res
// console.log(res);
