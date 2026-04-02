
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

let activeNav = document.querySelectorAll(".nav-link");

activeNav.forEach(function (link) {
    let href = link.getAttribute("href");
    if (window.location.pathname.includes(href)) {
        link.classList.add("active");
    }
});

let darkModeSwitch = document.querySelector(".day-night-mode");
let body = document.querySelector("body");

let savedTheme = localStorage.getItem("theme");


if (savedTheme == "dark") {
    body.classList.add("dark");
}

darkModeSwitch.addEventListener("click", function () {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

let contactForm = document.getElementById("contact-page-form");
let fullName = document.getElementById("Full-Name");
let emailAddress = document.getElementById("Email-Address");
let subject = document.getElementById("Subject");
let message = document.getElementById("Message");
let submitBtn = document.getElementById("submit")
let error = document.querySelectorAll(".error");
let successMsg = document.querySelector(".success-message");


if (contactForm) {
    contactForm.addEventListener("submit",
        function (event) {
            event.preventDefault();
            if (fullName.value === "") {
                error[0].textContent = "full name is required"
            } else {
                error[0].textContent = "";
            }

            if (emailAddress.value === "") {
                error[1].textContent = "email is required";
            } else if ((!emailAddress.value.includes("@")) || (!emailAddress.value.includes("."))) {
                error[1].textContent = "invalid email address";
            } else {
                error[1].textContent = "";
            }

            if (subject.value === "") {
                error[2].textContent = "subject is required";
            } else {
                error[2].textContent = "";
            }

            if (message.value === "") {
                error[3].textContent = "please write your message"
            } else {
                error[3].textContent = "";
            }

            let isValid = error[0].textContent === "" &&
                error[1].textContent === "" &&
                error[2].textContent === "" &&
                error[3].textContent === "";

            if (isValid) {
                successMsg.textContent = "Message sent successfully!";
                contactForm.reset();
            } else {
                successMsg.textContent = "";
            }

        }
    )
};


let searchBtn = document.querySelector(".search-btn");
let searchInput = document.querySelector(".search-input");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        searchInput.classList.toggle("visible-search-input");
    });
}