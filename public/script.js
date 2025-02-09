// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";  // Correct Firestore imports

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe73t3GoU2oxFP-_ObxRLZw9T4jpKQ5M8",
  authDomain: "mezlal-b5eaa.firebaseapp.com",
  projectId: "mezlal-b5eaa",
  storageBucket: "mezlal-b5eaa.firebasestorage.app",
  messagingSenderId: "999296410160",
  appId: "1:999296410160:web:f6977598ec698ca1cb43f5",
  measurementId: "G-VCYVESJY9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);  // Initialize Firestore

// Log Firebase initialization to check for issues
console.log("Firebase initialized", app);

// Event listener for email submission
document.getElementById("submit-email").addEventListener("click", async function() {
    const email = document.getElementById("email-input").value;
    console.log("Email submitted:", email); // Debugging log

    if (email) {
        try {
            // Save email to Firestore
            await addDoc(collection(db, "waitlist"), {
                email: email,
                timestamp: serverTimestamp()  // Optional: add a timestamp
            });

            alert(`Thank you for joining the waitlist with the email: ${email}`);
            document.getElementById("email-input").value = '';  // Clear input field after submission
        } catch (error) {
            console.error("Error saving email to Firestore: ", error);
            alert("An error occurred. Please try again.");
        }
    } else {
        alert("Please enter a valid email address.");
    }
});

// Google Analytics Setup
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-VCYVESJY9M');  // Replace with your Google Analytics ID
