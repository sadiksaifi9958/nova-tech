emailjs.init("k-9jzyU8NoWo0ZffM");

document.body.insertAdjacentHTML("beforeend", `
    <div id="modal-overlay">
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
                    <input type="text" id="name" name="user-name" placeholder="Your Full Name" />
                    <span class="modal-error"></span>
                </div>

                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="user-email" placeholder="you@example.com" />
                    <span class="modal-error"></span>
                </div>

                <div class="input-group">
                    <label for="message">Message</label>
                    <textarea id="modal-message" name="user-message" placeholder="How can we help you?" rows="5"></textarea>
                    <span class="modal-error"></span>
                </div>
                <span class="modal-success"></span>
                <button type="submit" id="submit">Send message</button>
            </form>
        </div>
    </div>`);

let burgerButton = document.getElementById("burger-btn");
let navMenu = document.getElementById("nav-links");

burgerButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
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

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("get-started");
        }
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

let activeNav = document.querySelectorAll(".page-link");

activeNav.forEach(function (link) {
    let href = link.getAttribute("href");
    if (window.location.pathname.includes(href)) {
        link.classList.add("active");
    }
});

let darkModeSwitch = document.querySelector(".theme-btn");
let body = document.querySelector("body");

let savedTheme = localStorage.getItem("theme");
let sunIcon = document.getElementById("sun-icon");
let moonIcon = document.getElementById("moon-icon");

if (savedTheme == "dark") {
    body.classList.add("dark");
    sunIcon.style.display = "flex";
    moonIcon.style.display = "none";
}

darkModeSwitch.addEventListener("click", function () {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        sunIcon.style.display = "flex";
        moonIcon.style.display = "none";
    } else {
        localStorage.setItem("theme", "light");
        sunIcon.style.display = "none";
        moonIcon.style.display = "flex";
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
                emailjs.send("service_7zcj7he", "template_skdpyh9", {
                    user_name: fullName.value,
                    user_email: emailAddress.value,
                    user_subject: subject.value,
                    user_message: message.value
                }).then(function () {
                    successMsg.textContent = "Message sent successfully!";
                    contactForm.reset();
                }).catch((error) => {
                    console.log(error);
                    successMsg.style.color = "red";
                    successMsg.textContent = "your message could not be submit!";
                });

            } else {
                successMsg.textContent = "";
            }



        }
    )
}

let modalName = document.getElementById("name");
let modalEmail = document.getElementById("email");
let modalMessage = document.getElementById("modal-message");
let modalError = document.querySelectorAll(".modal-error");
let modalSuccess = document.querySelector(".modal-success");

if (modalForm) {
    modalForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (modalName.value === "") {
            modalError[0].textContent = "full name is required";
        } else {
            modalError[0].textContent = "";
        }
        if (modalEmail.value === "") {
            modalError[1].textContent = "email is required";
        } else if ((!modalEmail.value.includes("@")) || (!modalEmail.value.includes("."))) {
            modalError[1].textContent = "email is invalid"
        } else {
            modalError[1].textContent = "";
        }

        if (modalMessage.value === "") {
            modalError[2].textContent = "message area should not be empty";
        } else {
            modalError[2].textContent = "";
        }

        let isValidModal = modalError[0].textContent === "" &&
            modalError[1].textContent === "" &&
            modalError[2].textContent === "";

        if (isValidModal) {
            emailjs.send("service_7zcj7he", "template_skdpyh9", {
                user_name: modalName.value,
                user_email: modalEmail.value,
                user_subject: "lead from modal",
                user_message: modalMessage.value
            }).then(function () {
                modalSuccess.textContent = "Message sent successfully!";
                modalForm.reset();
            }).catch((error) => {
                console.log(error);
                modalSuccess.style.color = "red";
                modalSuccess.textContent = "your message could not be submit!";
            });
        } else {
            modalSuccess.textContent = "";
        }
    })
};

let newsletterForm = document.querySelector(".nl-form")
let subscribeSuccessMsg = document.querySelector(".success-message")
let userEmail = document.querySelector(".nl-input");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        emailjs.send("service_7zcj7he", "template_26f79k9", {
            user_email: userEmail.value
        }).then(function () {
            subscribeSuccessMsg.textContent = "subscribed successfully";
            newsletterForm.reset();
        }).catch((error) => {
            console.log(error)
            subscribeSuccessMsg.style.color = "red";
            subscribeSuccessMsg.textContent = "not subscribed";
        })
    });
}

let backToTopBtn = document.querySelector(".back-to-top");

if (backToTopBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("visible-back-to-top");
        } else {
            backToTopBtn.classList.remove("visible-back-to-top");

        }
    });

    backToTopBtn.addEventListener("click",
        function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    );
}