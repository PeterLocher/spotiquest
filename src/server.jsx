const server = require('http').createServer();
const io = require('socket.io')(server);

var path = require('path');
var Queue = require( path.resolve( __dirname, './PriorityQueue/priorityQueue.jsx' ) );

var queue = new Queue();
queue.append("slayer raining blood");

var currentPlayData = {name: 'Raining Blood', albumArt: 'spotify:album:5v5BfkxWDAKTkzrXl3H0mU', songLenght: 28000};

io.on('connect', (client) => {
    console.log("connection!");

    console.log("Sending: ", queue.items)
    client.emit('initial setup', queue.items);
    client.emit('newSongToPlay', currentPlayData);

    client.on('addSong', (song) => {
        client.broadcast.emit('songAdded', song);
        client.emit('songAdded', song);
        queue.append(song);

        console.log("someone added", song);
    });

    client.on('getNextSong', () => {
        var toSend = queue.removeFirst();
        client.emit('nextSong', toSend);
        console.log("Sent", toSend);
    });

    client.on('songData', (data) => {
        currentPlayData = data;
        client.broadcast.emit('newSongToPlay', data);
    })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);