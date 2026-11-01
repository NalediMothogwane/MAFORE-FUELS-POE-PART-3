document.getElementById("contactForm").addEventListener("submit", function(event) {

            event.preventDefault();

            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var messageType = document.getElementById("messageType").value;
            var message = document.getElementById("message").value;

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

            document.getElementById("response").innerHTML =
                "Your information has been validated. Your email is ready to send.";

            window.location.href = emailLink;

        });




