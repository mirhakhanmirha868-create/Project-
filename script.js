
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

});
