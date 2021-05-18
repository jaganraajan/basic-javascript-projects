const header = document.getElementById('myHeader')
const options = document.querySelector('.options')
const container = document.querySelector('.container')

console.log(header.classList)

window.onscroll = () => {
    if(window.pageYOffset > 10) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}


options.addEventListener('click', () => {
    console.log("in")
    container.classList.toggle('rotate')
})
