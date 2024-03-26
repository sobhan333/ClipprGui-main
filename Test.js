async function connectsocket() {
    const exampleSocket = new WebSocket("wss://s2zwrp5xhd.execute-api.us-west-2.amazonaws.com/production/");
    
    console.log("he1")
    
    console.log(exampleSocket.readyState)
    await new Promise(resolve => setTimeout(resolve, 3000));
    exampleSocket.send({"action": "SendMessage"});
    console.log(exampleSocket.readyState)


    exampleSocket.onmessage = (event) => {
        console.log("he2")    
        console.log(event.data);
      };
}

function printOutput() {
    console.log("This is a test output in VS Code terminal");
}

