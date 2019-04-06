const server = require('http').createServer();
const io = require('socket.io')(server);

var path = require('path');
var Queue = require( path.resolve( __dirname, './PriorityQueue/priorityQueue.jsx' ) );

var queue = new Queue();
queue.append("KAGE!");

io.on('connect', (client) => {
    console.log("connection!");

    console.log("Sending: ", queue.items)
    client.emit('initial setup', queue.items);

    client.on('addSong', (song) => {
        client.broadcast.emit('songAdded', song);
        client.emit('songAdded', song);
        queue.append(song);

        console.log("someone added", song);
    })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);