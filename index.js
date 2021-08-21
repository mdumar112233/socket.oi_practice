const express = require('express');
const app = express();
// const http = require('http');
// const expressServer = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.listen(3000)