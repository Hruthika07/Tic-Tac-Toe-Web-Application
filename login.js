document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the username and password entered by the user
        const username = loginForm.elements['username'].value;
        const password = loginForm.elements['password'].value;

        // Your authentication logic goes here (e.g., check against stored credentials)
        // For demonstration purposes, let's assume valid credentials are 'admin' and 'password'
        if (username === 'admin' && password === 'pass123') {
            // Redirect the user to the Tic-Tac-Toe game page upon successful login
            window.location.href = 'index.html'; // Change 'index.html' to your actual game page
        } else {
            // Display an error message if the credentials are invalid
            alert('Invalid username or password. Please try again.');
        }
    });
});
