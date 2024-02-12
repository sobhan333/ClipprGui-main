// script.js

function storeData() {
    // Get form values
    var mainLink = document.getElementById("mainLink").value;
    var peripheralLink = document.getElementById("peripheralLink").value;
    var captionsBool = document.getElementById("captionsBool").value;
    var timestamp = document.getElementById("timestamp").value;
    var numClips = document.getElementById("numClips").value;

    // Create a new paragraph element to display the information
    var infoParagraph = document.createElement("p");

    // Set the text content for the paragraph and set black color
    infoParagraph.style.color = "#000000";  // Black text color
    infoParagraph.textContent = "Main Link: " + mainLink +
                                ", Peripheral Link: " + peripheralLink +
                                ", Captions: " + captionsBool +
                                ", Timestamp: " + timestamp +
                                ", Number of Clips: " + numClips;

    // Append the paragraph to the form
    var form = document.getElementById("dataForm");
    form.appendChild(infoParagraph);
}
