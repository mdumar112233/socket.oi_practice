const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(expressServer);

// BROADCAST WITH NAMESPACE
let buyNameSpace = io.of('/buy');
let sellNameSpace = io.of('/sell');

buyNameSpace.on('connection', (socket) => {
    buyNameSpace.emit('MyEvent', 'buy name space')
})

sellNameSpace.on('connection', (socket) => {
    sellNameSpace.emit('MyEvent', 'sell name space')
})

// USER SOCKET CONNECTION AND DISCONNECT
// io.on('connection', (socket) => {
//     console.log('user connected')

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
    // socket.on('message', (msg) => {
    //     console.log(msg);
    // })

    // data coming from client with custom event
    // socket.on('MyEvent', (msg) => {
    //     console.log(msg);
    // })

    // BROADCAST FOR ALL USER
    // io.sockets.emit('MyBroadcast', 'hello everyone')




    // USER DISCONNECT WITH SOCKET.OI
//     socket.on('disconnect', () => {
//         console.log('user disconnect')
//     })
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000)