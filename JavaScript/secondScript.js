
document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var enquiryType = document.getElementById("enquiryType").value;
    var fuelType = document.getElementById("fuelType").value;
    var message = document.getElementById("message").value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^[0-9]{10}$/;

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("enquiryTypeError").innerHTML = "";
    document.getElementById("fuelTypeError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";

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

    // Check enquiry type
    if (enquiryType === "") {
        document.getElementById("enquiryTypeError").innerHTML = "Please select an enquiry type.";
        valid = false;
    }

    // Check fuel type
    if ((enquiryType === "Fuel Prices" || enquiryType === "Fuel Availability") &&
        (fuelType !== "Petrol" && fuelType !== "Diesel")) {

        document.getElementById("fuelTypeError").innerHTML = "Please select Petrol or Diesel.";
        valid = false;
    }

    // Check message
    if (message === "") {
        document.getElementById("messageError").innerHTML = "Please enter your enquiry.";
        valid = false;
    }

    if (valid === false) {
        return;
    }

    var response = "";

    if (enquiryType === "Fuel Prices" && fuelType === "Petrol") {

        response = "Thank you " + name +
        ". The sample petrol price listed on our website is R25.99 per litre. Please contact us to confirm the latest price.";

    } else if (enquiryType === "Fuel Prices" && fuelType === "Diesel") {

        response = "Thank you " + name +
        ". The sample diesel price listed on our website is R26.49 per litre. Please contact us to confirm the latest price.";

    } else if (enquiryType === "Fuel Availability") {

        response = "Thank you " + name +
        ". Your fuel availability enquiry has been received. Please contact MFR Fuels on 013261000 to confirm availability.";

    } else {

        response = "Thank you " + name +
        ". Your enquiry about " + enquiryType +
        " has been received. MFR Fuels will assist you with your enquiry.";

    }

    document.getElementById("response").innerHTML = response;

    document.getElementById("enquiryForm").reset();

});

