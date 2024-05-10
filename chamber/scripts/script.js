// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Get the last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");
    // Get the current date
    var currentDate = new Date();

    if (lastVisit) {
      // Calculate the time difference in milliseconds
      var timeDifference = currentDate - new Date(lastVisit);

      // Convert milliseconds to days
      var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      // Display message based on time difference
      if (daysDifference === 0) {
        document.getElementById("message").innerText = "Back so soon! Awesome!";
      } else {
        var message = (daysDifference === 1) ? "day" : "days";
        document.getElementById("message").innerText = "You last visited " + daysDifference + " " + message + " ago.";
      }
    } else {
      document.getElementById("message").innerText = "Welcome! Let us know if you have any questions.";
    }

    // Update last visit date in localStorage
    localStorage.setItem("lastVisit", currentDate);

    // Fade out the last visit message after 2.5 seconds
    setTimeout(() => {
        var messageElement = document.getElementById("message");
        messageElement.style.transition = "opacity 0.5s ease-out";
        messageElement.style.opacity = 0;

        // Remove the message from the DOM after the animation completes
        setTimeout(() => {
            messageElement.remove();
        }, 500);
    }, 2500);
} else {
    // localStorage not supported
    document.getElementById("message").innerText = "Sorry, localStorage is not supported in your browser.";
}
