var button = document.getElementById("next");
button.addEventListener("click", function(e) {
    console.log("here");
    var progress = document.querySelector(".progress");
    progress.style.width = "70px";
})