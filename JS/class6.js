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