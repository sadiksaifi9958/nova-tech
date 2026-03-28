let burgerButton = document.getElementById("burger-btn");
let navMenu = document.getElementById("nav-menu");

burgerButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});

let cards = document.querySelectorAll(".price-card");
let cardButton = document.querySelectorAll(".card-button");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        cards.forEach(function (c) {
            c.classList.remove("selected-card");
        })
        card.classList.add("selected-card");
    })
});
cardButton.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});

let modal = document.getElementById("modal-overlay");
let getStartedButton = document.querySelectorAll(".get-started-btn");

getStartedButton.forEach(function (btn) {
    btn.addEventListener("click", function () {
        modal.classList.toggle("get-started")
    });
});

let closeBtn = document.querySelector(".contact-form-close-button");

closeBtn.addEventListener("click",
    function () {
        modal.classList.remove("get-started");
    }
);

let modalForm = document.querySelector("#modal-form");

modalForm.addEventListener("submit", function (e) {
    e.preventDefault();
});