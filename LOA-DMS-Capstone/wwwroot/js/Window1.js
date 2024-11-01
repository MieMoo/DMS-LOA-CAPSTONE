// Function to change the course title when selected from the dropdown
function changeCourse(courseName) {
    document.getElementById("college-title").innerText = courseName;
}

// Function to display the logout confirmation modal
function handleLogout(event) {
    event.preventDefault();
    document.getElementById('logoutModal').style.display = 'flex';
}

// Function to confirm logout and redirect to login page
function confirmLogout() {
    window.location.href = '/Home/Login'; // Redirect to login page
}

// Function to cancel logout and hide the modal
function cancelLogout() {
    document.getElementById('logoutModal').style.display = 'none';
}

// Function to show the notification modal
function showNotificationModal() {
    document.getElementById('notificationModal').style.display = 'flex';
}

// Function to close the notification modal
function closeNotificationModal() {
    document.getElementById('notificationModal').style.display = 'none';
}


// Function to open the modal
function openModal() {
    document.querySelector('.modal').style.display = 'flex'; // Change to 'flex' to center content
}

// Function to close the modal
function closeModal() {
    document.querySelector('.modal').style.display = 'none'; // Hide modal
}

// Example of attaching the functions to buttons (you should customize this to your implementation)
document.querySelector('.logout-button').addEventListener('click', openModal); // Button to open the modal
document.querySelector('.no-button').addEventListener('click', closeModal); // Button to close the modal
