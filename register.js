document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from refreshing the page

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (name === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        // Store the name in localStorage
        localStorage.setItem("userName", name);

        alert("Registered successfully!");

        // Redirect to the homepage
        window.location.href = "index.html";
    });
});
