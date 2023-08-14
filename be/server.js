const express = require('express');
const color = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDB = require('./src/config/db')
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4000
const webSocketPort = process.env.WEBSOCKET_PORT || 4001

connectDB()
const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/comment', require('./src/routes/commentRoute'))
app.use('/api/v1/product', require('./src/routes/productRoute'))
app.use('/api/v1/video', require('./src/routes/videoRoute'))

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
    },
});

io.on('connection', (socket) => {
    console.log('New client connected');
    
    socket.on('submitComment', (data) => {
        io.emit('newComment', data);
    });
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});