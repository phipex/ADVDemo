/**
 * Created by desarrollo on 2017-04-22.
 */
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const objetoBillete = JSON.stringify({valor:20000})

// Broadcast to all.
wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });
};


wss.on('connection', function connection(ws) {
    console.log('nueva conexion');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        //ws.send(objetoBillete);
        // Broadcast to everyone else.
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(objetoBillete);
            }
        });
    });

    ws.send(objetoBillete);
});
