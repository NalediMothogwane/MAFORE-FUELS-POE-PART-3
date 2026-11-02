



// Images used in the slideshow
var images = [
    "Images/Side View of Station.jpg",
    "Images/Worker Refueling car.jpg",
    "Images/Petrol Nozzle.jpg",
    "Images/Petrol Pump.jpg",
    "Images/Diesel Pump.jpg"
];

var currentSlide = 0;

// Display the next image
function nextSlide() {

    currentSlide++;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    document.getElementById("slideImage").src = images[currentSlide];

}

// Display the previous image
function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    document.getElementById("slideImage").src = images[currentSlide];

}

// Change images automatically every 4 seconds
setInterval(nextSlide, 4000);
