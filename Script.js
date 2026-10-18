
document.addEventListener("DOMContentLoaded", function () {

    // Add to Cart
    let cart = [];
    let buttons = document.querySelectorAll(
        "#menu article button, #chefs-special article button"
    );

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {

            let item = button.closest("article");
            let name = item.querySelector("h4, h3").innerText;
            let priceText = item.querySelector(
                "p:nth-of-type(2)"
            );

            if (priceText) {
                let price = Number(
                    priceText.innerText.replace(/[^0-9]/g, "")
                );

                cart.push({
                    name: name,
                    price: price
                });

                alert(
                    name + " added to cart!\n" +
                    "Cart Items: " + cart.length + "\n" +
                    "Total: Rs. " +
                    cart.reduce(function (total, food) {
                        return total + food.price;
                    }, 0)
                );

                button.innerText = "Added to Cart";
            }
        });
    });


    // Sign Up Form
    let signupForm = document.querySelector("#signup form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("signup-name").value;
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;

        if (name !== "" && email !== "" && password !== "") {
            alert("Account form submitted successfully!");
            signupForm.reset();
        }
    });


    // Login Form
    let loginForm = document.querySelector("#login form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;

        if (email !== "" && password !== "") {
            alert("Login form submitted successfully!");
            loginForm.reset();
        }
    });


    // Table Reservation
    let reservationForm = document.querySelector(
        "#reservation form"
    );

    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("customer-name").value;
        let date = document.getElementById("booking-date").value;
        let time = document.getElementById("booking-time").value;
        let guests = document.getElementById("guests").value;

        alert(
            "Table Booking Submitted!\n\n" +
            "Name: " + name + "\n" +
            "Date: " + date + "\n" +
            "Time: " + time + "\n" +
            "Guests: " + guests
        );

        reservationForm.reset();
    });

});
      
