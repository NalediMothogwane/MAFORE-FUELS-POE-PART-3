
document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var messageType = document.getElementById("messageType").value;
    var message = document.getElementById("message").value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10}$/;

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("messageTypeError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("response").innerHTML = "";

    var valid = true;

    // Check name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your full name.";
        valid = false;
    } else if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Name must contain at least 2 characters.";
        valid = false;
    }

    // Check email
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    // Check phone number
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid 10-digit phone number.";
        valid = false;
    }

    // Check message type
    if (messageType === "") {
        document.getElementById("messageTypeError").innerHTML = "Please select a message type.";
        valid = false;
    }

    // Check message
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Please enter your message.";
        valid = false;
    }

    if (valid === false) {
        return;
    }

    // Prepare email
    var emailSubject = "MFR Fuels - " + messageType;

    var emailBody =
        "Full Name: " + name + "\n" +
        "Email Address: " + email + "\n" +
        "Phone Number: " + phone + "\n" +
        "Message Type: " + messageType + "\n" +
        "Message: " + message;

    var emailLink = "mailto:info@mfrfuels.co.za" +
        "?subject=" + encodeURIComponent(emailSubject) +
        "&body=" + encodeURIComponent(emailBody);

    // Display the email link
    document.getElementById("response").innerHTML =
        "Your information has been validated successfully. " +
        "<a href='" + emailLink + "'>Click here to send your email.</a>";

});

