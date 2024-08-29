// Profile Dropdown Functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.querySelector('.profile-btn');
    const profileContent = document.querySelector('.profile-content');

    profileBtn.addEventListener('click', function() {
        profileContent.style.display = profileContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown when clicking outside
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.profile-btn')) {
            if (profileContent.style.display === 'block') {
                profileContent.style.display = 'none';
            }
        }
    });

    // Apply button functionality
    const applyButtons = document.querySelectorAll('.project-card .btn-primary');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Application submitted successfully!');
        });
    });

    // Redeem button functionality
    const redeemButton = document.querySelector('.profile-content .btn-secondary');
    if (redeemButton) {
        redeemButton.addEventListener('click', function() {
            alert('Points redemption feature coming soon!');
        });
    }

    // History button functionality
    const historyButton = document.querySelector('.profile-content .btn-primary');
    if (historyButton) {
        historyButton.addEventListener('click', function() {
            window.location.href = 'history.html';
        });
    }
});

// Function to update profile stats (simulated)
function updateProfileStats() {
    const pointsElement = document.querySelector('.profile-content p:nth-child(2)');
    const carbonOffsetElement = document.querySelector('.profile-content p:nth-child(3)');

    if (pointsElement && carbonOffsetElement) {
        const currentPoints = parseInt(pointsElement.textContent.split(': ')[1]);
        const currentCarbonOffset = parseInt(carbonOffsetElement.textContent.split(': ')[1]);

        pointsElement.textContent = `Points: ${currentPoints + 50}`;
        carbonOffsetElement.textContent = `Carbon Offset: ${currentCarbonOffset + 25} kg`;
    }
}

// Call updateProfileStats when an action is completed (simulated)
// This would typically be called after a successful API request
// updateProfileStats();