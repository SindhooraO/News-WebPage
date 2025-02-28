document.addEventListener("DOMContentLoaded", function () {
    const userName = localStorage.getItem("userName"); // Get username from localStorage
    const userGreeting = document.getElementById("userGreeting"); // Navbar element for greeting
    const registerLink = document.getElementById("registerLink"); // Register navbar link

    if (userName) {
        userGreeting.textContent = `Hello, ${userName}!`; // Show user name
        userGreeting.style.color = "green";
        userGreeting.style.fontWeight = "bold";

        // Replace Register link with Logout button
        registerLink.innerHTML = `<a href="#" id="logoutButton">Logout</a>`;

        // Add event listener to logout
        document.getElementById("logoutButton").addEventListener("click", function () {
            localStorage.removeItem("userName"); // Remove user data
            window.location.href = "index.html"; // Refresh page
        });
    }
});
