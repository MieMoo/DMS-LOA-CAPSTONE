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
            window.location.href = 'file:///C:/Users/angel/Downloads/DMS-E3/Login.html'; // Redirect to login page
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