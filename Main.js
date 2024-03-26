async function connectsocket() {
  const exampleSocket = new WebSocket("wss://s2zwrp5xhd.execute-api.us-west-2.amazonaws.com/production/");

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