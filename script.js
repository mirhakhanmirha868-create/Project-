
document.addEventListener("DOMContentLoaded", function () {

    // Sign Up
    let signupForm = document.querySelector("#signup form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Sign Up Successful!");
            signupForm.reset();
        });
    }

    // Login
    let loginForm = document.querySelector("#login form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Login Successful!");
            loginForm.reset();
        });
    }

    // Add to Cart
    let cart = [];

    let buttons = document.querySelectorAll(
        "#menu article button, #chefs-special article button"
    );

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

            let item = button.closest("article");

            if (!item) {
                return;
            }

            let nameElement = item.querySelector("h4, h3");
            let priceText = item.querySelector("p:nth-of-type(2)");

            if (nameElement && priceText) {
                let name = nameElement.innerText;

                let price = Number(
                    priceText.innerText.replace(/[^0-9]/g, "")
                );

                cart.push({
                    name: name,
                    price: price
                });

                let total = cart.reduce(function (sum, food) {
                    return sum + food.price;
                }, 0);

                alert(
                    name + " added to cart!\n" +
                    "Total Items: " + cart.length + "\n" +
                    "Total Price: Rs. " + total
                );
            }
        });
    });

    // Table Reservation
    let reservationForm = document.querySelector(
        "#reservation form"
    );

    if (reservationForm) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("customer-name");
            let date = document.getElementById("booking-date");
            let time = document.getElementById("booking-time");
            let guests = document.getElementById("guests");

            if (name && date && time && guests) {
                alert(
                    "Reservation Request Submitted!\n" +
                    "Name: " + name.value + "\n" +
                    "Date: " + date.value + "\n" +
                    "Time: " + time.value + "\n" +
                    "Guests: " + guests.value
                );

                reservationForm.reset();
            } else {
                alert("Please check your reservation form IDs.");
            }
        });
    }

    // Contact Form
    let contactForm = document.querySelector("#contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Your message has been submitted successfully!");
            contactForm.reset();
        });
    }

});
                
