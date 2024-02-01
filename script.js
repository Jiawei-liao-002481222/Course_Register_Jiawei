document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    //Add code to handle the registration (e.g., sending data to a server)

    alert('Registration successful!');
});
