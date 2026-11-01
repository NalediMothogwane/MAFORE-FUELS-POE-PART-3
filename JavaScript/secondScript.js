
        document.getElementById("enquiryForm").addEventListener("submit", function(event) {

            event.preventDefault();

            var name = document.getElementById("name").value;
            var enquiryType = document.getElementById("enquiryType").value;
            var fuelType = document.getElementById("fuelType").value;
            var message = document.getElementById("message").value;

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

