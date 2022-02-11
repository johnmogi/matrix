var b1 = document.querySelector('#btn1');
var b2 = document.querySelector('#btn2');
var panel = document.querySelector('p');



b1.addEventListener('click', writeText('Yo'));
b2.addEventListener('click', writeText('Nice To Meet You'));

function writeText(text) {
  return function(e){
  panel.innerHTML  = text
  }
}