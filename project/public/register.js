document.addEventListener("DOMContentLoaded", () => {
    let loginButton = document.querySelector(".log-in");
    let signupButton = document.querySelector(".sign-up");

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = "/login"; // Redirect to the login route
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", () => {
            window.location.href = "/signup"; // Redirect to the signup route
        });
    }
});
b