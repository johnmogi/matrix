const ul = document.querySelector('ul')

const items = [10,23,34,64,75]
const frag = document.createDocumentFragment();

for (let item of items){
    const li = document.createElement('li');
    // @ts-ignore
    li.textContent = item;
    frag.appendChild(li)
}
ul.appendChild(frag)