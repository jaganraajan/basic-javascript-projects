let cards = document.querySelectorAll(".card");
let cards2 = document.getElementsByClassName("card");
console.log(cards);

cards.forEach(element => {
    element.addEventListener("click", function(e) {
        console.log("element");
        cards.forEach(element => {
            console.log(element.classList.remove("active"));
            element.querySelector("h1").classList.remove("activeH")
            element.querySelector("h1").classList.add("inactive")
        })
        e.target.classList.toggle("active");
        e.target.querySelector("h1").classList.remove("inactive");
        e.target.querySelector("h1").classList.add("activeH");
        console.log(e.target.classList);
    })
});



