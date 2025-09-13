/* =========================================================
   SCRIPT.JS;This file handles interactivity for the website.
   Main features included:
   1. Contact form validation
   
   ========================================================= */

/* =========================================================
   CONTACT FORM VALIDATION
   - Checks required fields: name, email, message
   - Ensures email format is valid
   - Provides real-time feedback via alert (can be replaced with modal or inline messages later)
   ========================================================= */

// Select the form by ID (defined in contact.html)
const contactForm = document.getElementById("contactForm");

// Add "submit" event listener (runs when user clicks "Send Message")
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Initialize an array to collect errors
    let errors = [];

    /* ---------- VALIDATION RULES ---------- */

    // 1. Check Name
    if (name === "") {
      errors.push("Full name is required.");
    }

    // 2. Check Email (simple regex pattern for valid email format)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      errors.push("Email address is required.");
    } else if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    // 3. Check Phone (optional, but must be valid if provided)
    const phonePattern = /^[0-9+\-\s]{7,15}$/; // Allows numbers, +, -, space
    if (phone !== "" && !phonePattern.test(phone)) {
      errors.push("Phone number format is invalid.");
    }

    // 4. Check Message
    if (message === "") {
      errors.push("Message cannot be empty.");
    }

    /* ---------- SHOW RESULTS ---------- */

    if (errors.length > 0) {
      // If there are errors, show them all at once
      alert("Please fix the following errors:\n- " + errors.join("\n- "));
    } else {
      // If no errors, simulate successful submission
      alert("Thank you for reaching out, " + name + "! Your message has been sent.");
      contactForm.reset(); // Clears form fields after success
    }
  });
}


