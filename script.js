document.getElementById("submit-email").addEventListener("click", function() {
    const email = document.getElementById("email-input").value;
    if (email) {
        alert(`Thank you for joining the waitlist with the email: ${email}`);
        document.getElementById("email-input").value = '';  // Clear input field after submission
    } else {
        alert("Please enter a valid email address.");
    }
});


// Google Analytics Setup

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');  // Replace with your Google Analytics ID

