// script.js

function storeData() {
    sendData()
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

function sendData(mainLinkValue, perfLinkValue, captionsValue) {
    // Construct the URL with the provided values
    const apiUrl = `https://okm85hbhd9.execute-api.us-east-2.amazonaws.com/test/transactions?transactionId=${mainLinkValue}&type=${perfLinkValue}&amount=${captionsValue}`;


    window.open(apiUrl, '_blank');
    // Now you can use the apiUrl for further processing, like making a request
    // For example, you can use fetch to make a GET request
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            console.log('Response JSON:', data);
            // Handle the response data here
            const jsonData = data;
            
            console.log('Parsed JSON:', jsonData);
            return jsonData;
            
        })
        .catch(error => {
            // Handle errors here
            console.error('Error:', error);
        });
}

function signin() {
    const yt = 'https://www.youtube.com/watch?v=VegDvRLVlOI';
    window.open(yt, '_blank').focus();
}


// Example usage
const mainLink = 'MLinkValue';
const perfLink = 'PLinkValue';
const captions = true;
// const timestamp = 0;
// const clipNumber = 0;

sendData(mainLink, perfLink, captions);
