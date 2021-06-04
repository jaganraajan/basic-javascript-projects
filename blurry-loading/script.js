let count = 0
const percent = document.querySelector('#percent')
const bg = document.querySelector('.bg')
console.log(percent)

let interval = setInterval(function() {
    count++;
    percent.innerHTML = count + '%';
    console.log(count);
    bg.style.filter = "blur(" + (100-count) + "px)";
    
    if(count<100) {
        percent.style.filter = "blur(" + (count/20) + "px)";
    } else {
        percent.style.filter = "blur(100px)";
    }
        // percent.style.filter = "blur(px)";

    if(count >= 100) {
        clearInterval(interval);
    }
}, 20);



