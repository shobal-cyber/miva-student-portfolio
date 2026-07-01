document.getElementById('contactForm').addEventListener('submit', function(event) { 
    event.preventDefault(); // Stop page from submitting out right 
     
    const name = document.getElementById('userName').value.trim(); 
    const email = document.getElementById('userEmail').value.trim(); 
    const phone = document.getElementById('userPhone').value.trim(); 
    const message = document.getElementById('userMessage').value.trim(); 
    const feedback = document.getElementById('formFeedback'); 
 
    // RegEx configurations 
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const phoneCheck = /^[0-9]+$/; 
 
    // Validation conditional logic rules 
    if (!name || !email || !phone || !message) { 
        feedback.innerText = "All fields are mandatory. Please fill out completely."; 
        feedback.style.color = "#e74c3c"; 
    } else if (!emailCheck.test(email)) { 
        feedback.innerText = "Please provide a valid structural email address."; 
        feedback.style.color = "#e74c3c"; 
    } else if (!phoneCheck.test(phone)) { 
        feedback.innerText = "Phone details must contain only numerical digits."; 
        feedback.style.color = "#e74c3c"; 
    } else { 
        feedback.innerText = "Thank you! Message processed successfully for Heart Lubem."; 
        feedback.style.color = "#2ecc71"; 
this.reset(); // clear fields safely 
} 
});