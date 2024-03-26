// script.js

function storeData() {

    var element = document.getElementById("loader");
    element.style.display = "block";
    var Socket = new WebSocket(url, [protocal] );

    sendData()
    // Get form values
    var mainLink = document.getElementById("mainLink").value;
    var peripheralLink = document.getElementById("peripheralLink").value;
    var captionsBool = document.getElementById("captionsBool").value;
    var timestamp = document.getElementById("timestamp").value;
    var numClips = document.getElementById("numClips").value;
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