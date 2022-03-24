import socketIOServer from './socket-server.js'
import axios from 'axios'


socketIOServer.on("connection", (socket) => {
  socket.on("firstClientEvent", (message) => {
    axios.get(`${process.env.SECOND_SERVER_ADDRESS}/webhook?message=${message}`)
  });
})