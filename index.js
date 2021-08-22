const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

io.on('connection', (socket) => {
    console.log('user connected')


    // setTimeout(() => {
    //     socket.send('server send data to client')
    // }, 3000)

    // custom event create
    // setInterval(() => {
    //     let d = new Date();
    //     let t = d.getTime();
    //     socket.emit('MyEvent', t)
    // }, 2000);

    // data coming from client

    socket.on('message', (msg) => {
        console.log(msg);
    })


    socket.on('disconnect', () => {
        console.log('user disconnect')
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000)