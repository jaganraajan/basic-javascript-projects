const seats = document.querySelectorAll(".seats .seat:not(.occupied)");
const movie = document.querySelector("#movies");
const priceElement = document.querySelector('.price');
const countElement = document.querySelector('.seats-number');
;



function initializeUI() {
    console.log(localStorage.getItem("occupied"));
    if(typeof(localStorage.getItem("occupied")) !== undefined && localStorage.getItem("occupied") !== null){
        console.log('in');
        occupied = JSON.parse(localStorage.getItem('occupied'));
    }
       
    
    if(typeof(localStorage.getItem("price"))!=='undefined' && localStorage.getItem("price") !== null){
        priceElement.innerHTML = localStorage['price'];
        price = localStorage['price'];
    }
        
    if(typeof(localStorage.getItem("count"))!=='undefined' && localStorage.getItem("count") !== null){
        countElement.innerHTML = localStorage['count'];
        count = localStorage['count'];
    }

    if(typeof(localStorage.getItem("index"))!=='undefined' && localStorage.getItem("index") !== null){
        movie.selectedIndex = localStorage['index'];
    }
}
let occupied = new Array(seats.length).fill(0);
let count = 0;
let price = 0;

window.onload = initializeUI();

console.log(occupied);

console.log(localStorage['seats']);

seats.forEach((seat, i) => {
    if(occupied[i] === 1){
        console.log('asdf');
        seat.classList.add('green');
    }

    seat.addEventListener('click', (e) => {
        console.log("clicked");
        console.log(i);
        // if(!seat.classList.contains("occupied")){
            if(seat.classList.contains('green')){
                count--;
                occupied[i] = 0;
            } else {
                count++;
                occupied[i] = 1;
            }
            seat.classList.toggle('green');
        // }
        priceElement.innerHTML = movie.value * count;
        countElement.innerHTML = count;
        console.log(occupied);
        localStorage['occupied'] = JSON.stringify(occupied);
        localStorage['price'] = movie.value * count;
        localStorage['count'] = count;
    })

    
});

movie.addEventListener('change', (e) => {
    priceElement.innerHTML = movie.value * count;
    localStorage['price'] = movie.value * count;
    localStorage['index'] = movie.selectedIndex;
})