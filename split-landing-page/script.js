const ps = document.getElementById('playstation')
const xbox = document.getElementById('xbox')

ps.addEventListener("mouseover", (e) => {
    console.log(e.pageX);
    console.log(e.pageY);
    ps.classList.remove('inactive');
    ps.classList.add("active");
})

ps.addEventListener("mouseout", (e) => {
    console.log(e.pageX);
    console.log(e.pageY);
    ps.classList.remove("active");
    ps.classList.add('inactive');
})

xbox.addEventListener("mouseover", (e) => {
    console.log(e.pageX);
    console.log(e.pageY);
    console.log("mouseenter");
    xbox.classList.remove('inactive');
    xbox.classList.add("active");
})

xbox.addEventListener("mouseout", (e) => {
    console.log(e.pageX);
    console.log(e.pageY);
    console.log("mouseoverr");
    xbox.classList.remove("active");
    xbox.classList.add('inactive');
})