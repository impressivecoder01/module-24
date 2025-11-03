// const sections = document.getElementsByTagName('section')
// const sections = document.querySelectorAll('#players-container ul li')
const sections = document.querySelectorAll('section')
// console.log(sections, 'using queryselectorall')
for(let section of sections){
    // console.log(section)
    // section.style.backgroundColor = 'gray'
    // section.style.padding = '10px' 
    // section.style.marginBottom = '60px'
    // section.style.borderRadius = '50px' 
    section.classList.add('section-card')
}
// console.log(document.getElementById('players-container').childNodes[0])
console.log(document.getElementById('players-container').childNodes[0])
console.log(document.getElementById('players-container').childNodes[1])
console.log(document.getElementById('players-container').childNodes[2])
console.log(document.getElementById('players-container').childNodes[3])
// console.log(document.getElementById('players-container').childNodes[3].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
const now = document.createElement('li')
now.innerText = 'now new player'
console.log(now)
const playerList = document.getElementById('player-list');
playerList.appendChild(now)