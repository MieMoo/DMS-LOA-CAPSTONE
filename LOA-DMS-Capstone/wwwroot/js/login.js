function navigateToCCSView(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both fields are filled
    if (username === '' || password === '') {
        alert('Please fill in both the username and password fields.');
        return; // Stop the function execution if fields are empty
    }

    const credentials = {
        '002': {
            password: '123',
            redirect: '/Home/Window1'
        },
        '111': {
            password: '567',
            redirect: '/Home/Dashboard'
        },
        '001': {
            password: '890',
            redirect: '/Home/HRview'
        }
    };

    

    if (credentials[username] && credentials[username].password === password) {
        window.location.href = credentials[username].redirect;
    } else {
        alert('Incorrect username or password!');
    }
}
