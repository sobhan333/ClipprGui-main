async function connectsocket() {
  const exampleSocket = new WebSocket("wss://s2zwrp5xhd.execute-api.us-west-2.amazonaws.com/production/");
  showLoader()
  checksocket(exampleSocket)

    await new Promise(resolve => setTimeout(resolve, 3000));
    // exampleSocket.send({action: "SendMessage"});
    exampleSocket.send(JSON.stringify({action: "SendMessage"}));

    checksocket(exampleSocket)
    exampleSocket.onmessage = (event) => {
        console.log(event.data);
      };
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    exampleSocket.close()
    hideLoader()
    checksocket(exampleSocket)


}

function getlink(exampleSocket){
  
}

function checksocket(exampleSocket){
  if (exampleSocket.readyState == 0){
    console.log("The Socket has not opened yet")
  }else if (exampleSocket.readyState == 1){
    console.log("The Socket is open")
  } else {
    console.log("The Socket has now closed")
  }
}

function hideLoader() {
  var loader = document.getElementById("loader");
  document.querySelector(".loader").classList.add("loader--hidden");
}

function showLoader() {
  var loader = document.getElementById("loader");
  document.querySelector(".loader").classList.remove("loader--hidden");
}

function toggleDarkMode() {
  var body = document.body;
  var footer = document.querySelector(".aboutus")
  // Check if dark mode is enabled
  var isDarkMode = body.classList.contains('dark-mode');


  // Toggle dark mode
  if (isDarkMode) {
      // If dark mode is enabled, remove it
      body.classList.remove('dark-mode');
      footer.classList.remove('.aboutusdark')
  } else {
      // If dark mode is not enabled, add it
      body.classList.add('dark-mode');
  }
}
