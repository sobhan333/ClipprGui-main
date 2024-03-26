async function connectsocket() {
    const exampleSocket = new WebSocket("wss://s2zwrp5xhd.execute-api.us-west-2.amazonaws.com/production/");
    
    console.log("he1")
    
    console.log(exampleSocket.readyState)
    await new Promise(resolve => setTimeout(resolve, 3000));
    // exampleSocket.send({action: "SendMessage"});
    exampleSocket.send(JSON.stringify({action: "SendMessage"}));
    console.log(exampleSocket.readyState)
    console.log(exampleSocket.onmessage)
    console.log(exampleSocket.event)


    exampleSocket.onmessage = (event) => {
        console.log("he2")    
        console.log(event.data);
      };
    
        // exampleSocket.close()
    console.log(exampleSocket.readyState)
}

function printOutput() {
    console.log("This is a test output in VS Code terminal");
}

