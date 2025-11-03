console.log('appending')
// const newh1 = document.createElement('h1');
// newh1.innerText = 'first by me appending'
// const parent = document.getElementsByTagName('main')[0];
// parent.appendChild(parent)
const newh2 = document.createElement('h1');
newh2.innerText = 'first by me appending'
// console.log(newh1)
const parent = document.getElementById('mains');
// parent.appendChild(parent)
// console.log(parent, 's')
parent.appendChild(newh2)
const new3 = document.createElement('section');
parent.appendChild(new3)
const new4 = document.createElement('h1');
new4.innerText = 'section title';
new3.appendChild(new4)
const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = 'linkONE'
ul.appendChild(li)
new3.appendChild(ul)