/**
 * Created by lenovo on 2017/11/28.
 */
let WebSocketServer = require('ws').Server;
// var app = require('express')();
// var http = require('http').Server(app);
let uid = 1;
let wss = new WebSocketServer({port: 3002});
wss.on('connection', function (ws) {
    ws.uid = uid;
    wss.broadcast({
        uid: uid,
        type: 'message'
    });
    ws.send(JSON.stringify({
        uid: uid,
        type: 'assign'
    }));
    uid++;
    ws.on('close', function () {
        wss.broadcast({
            uid: uid,
            type: 'leave'
        })
    });
    ws.on('message', function (data) {
        var data = JSON.parse(data);
        wss.broadcast({
            uid: uid,
            message: data.message,
            type: 'message'
        });
    });
});
wss.broadcast = function (data) {
    wss.clients.forEach(function each(client) {
        client.send(JSON.stringify(data));
    });
};
// http.listen(3002, function () {
//     console.log('listening on *:3002');
// });
