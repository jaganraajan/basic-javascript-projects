const boxes = document.querySelectorAll('.box');

console.log(boxes)
window.addEventListener('scroll', (e) => {
    console.log(window.pageYOffset)
})

console.log(window)
boxes.forEach(box => {
    box.addEventListener('click', (e) => {
        console.log(e)
        console.log("U can do it")
    })
})