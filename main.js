const webSocketServer = require('ws');

const wss = new webSocketServer.Server({port: 8080})

let nbrClient = 0;

wss.on("connection", ws => {
    nbrClient = nbrClient + 1;
    console.log("new client has connected");
    console.log(`Current client connections: ${nbrClient}`);

    ws.on("message", data => {
        console.log(`client has sent us: ${data}`);
    });

    ws.on("close", () => {
        nbrClient = nbrClient - 1;
        console.log("client has disconnected");
        console.log(`Current client connections: ${nbrClient}`);
    });

    ws.onerror = function() {
        console.log("some error has occured");
    }
});

console.log("The websocket server is running on port 8080");