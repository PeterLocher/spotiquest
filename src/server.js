const server = require('http').createServer();
const io = require('socket.io')(server);

var data = ["goddag"];

io.on('connect', (client) => {
    console.log("connection!");
    client.emit('initial setup', data)
    client.on('press!', (signal) => {
        client.broadcast.emit('kage?', signal);
        data.push(signal);
        console.log("someone pressed", signal);
    })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);