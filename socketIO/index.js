/**
 * Created by lenovo on 2017/11/28.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
let a = require('./module');
// a();
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        // console.log(socket);
    });
});

io.on('connection', function (socket) {
    socket.on('cmessage', function (msg) {
        console.log('message: ' + msg);
        io.emit('cmessage', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
