import socketIOServer from './socket-server.js'
import app from './app.js'


// Socket which opened between server 2 and client 2 (subscribers)
let subscribedSecondClient


// Make independent enpoint for subscription on updates
// Now it's realized not in clean way: every new socket connection determined as subscribtion
socketIOServer.on("connection", (socket) => {
  subscribedSecondClient = socket
})


//  Webhook used only for recieve messages from node 1
app.use('/webhook', (req, res, next) => {
  const message = req.query.message
  subscribedSecondClient.emit("secondServerEvent", message)
  return res.send('ok');
})
