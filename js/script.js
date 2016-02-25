var link = document.querySelector(".btn-write-us");
var map = document.querySelector(".open-map");

var popup = document.querySelector("#window");
var mapup = document.querySelector("#map");


var closepop = popup.querySelector(".modal-content-close");
var closemap = mapup.querySelector(".modal-content-close");


link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
});

map.addEventListener("click", function (event) {
    event.preventDefault();
    mapup.classList.add("modal-content-show");
});



closepop.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
//        console.log("подключено");
});

closemap.addEventListener("click", function (event) {
    event.preventDefault();
    mapup.classList.remove("modal-content-show");
//        console.log("подключено");
});