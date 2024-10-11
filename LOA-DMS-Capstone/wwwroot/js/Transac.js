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

/* NEW CODE BELOW */

// Get elements for transaction and requisition buttons
const transactionButton = document.getElementById('transactionButton');
const requisitionButton = document.getElementById('requisitionButton');

// Get elements for modals
const modalBackground = document.getElementById('modalBackground');
const transactionModal = document.getElementById('transactionModal');
const requisitionModal = document.getElementById('requisitionModal');

// Open the transaction modal when the button is clicked
transactionButton.addEventListener('click', function () {
    modalBackground.style.display = 'flex'; // Show the background
    transactionModal.style.display = 'block'; // Show transaction modal
    requisitionModal.style.display = 'none'; // Hide requisition modal (just in case)
});

// Open the requisition modal when the button is clicked
requisitionButton.addEventListener('click', function () {
    modalBackground.style.display = 'flex'; // Show the background
    requisitionModal.style.display = 'block'; // Show requisition modal
    transactionModal.style.display = 'none'; // Hide transaction modal (just in case)
});

// Function to close any modal
function closeModal() {
    modalBackground.style.display = 'none'; // Hide background
    transactionModal.style.display = 'none'; // Hide transaction modal
    requisitionModal.style.display = 'none'; // Hide requisition modal
}
