
document.body.insertAdjacentHTML("beforeend", `<div id="modal-overlay">
        <div class="modal-box">
            <div class="modal-header">
                <div class="modal-headings">
                    <h1>Get started with NovaTech</h1>
                    <p>Fill in your details and we'll get back to you.</p>
                </div>
                <button class="contact-form-close-button"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form id="modal-form">
                <div class="input-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Your Full Name" />
                    <span class="error"></span>
                </div>

                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder="you@example.com" />
                    <span class="error"></span>
                </div>

                <div class="input-group">
                    <label for="message">Message</label>
                    <textarea placeholder="How can we help you?" rows="5"></textarea>
                    <span class="error"></span>
                </div>
                <button type="submit" id="submit">Send message</button>
            </form>
        </div>
    </div>`);

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
let closeBtn = document.querySelector(".contact-form-close-button");
let modalForm = document.querySelector("#modal-form");
let getStartedButton = document.querySelectorAll(".get-started-btn");

if (modal) {
    getStartedButton.forEach(function (btn) {
        btn.addEventListener("click", function () {
            modal.classList.toggle("get-started");
        });
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function () {
        modal.classList.remove("get-started");
    });
}

if (modalForm) {
    modalForm.addEventListener("submit", function (e) {
        e.preventDefault();
    });
}

let revealElements = document.querySelectorAll(".reveal");

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

revealElements.forEach(function (el) {
    observer.observe(el);
});
