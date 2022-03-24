import { Server } from "socket.io"
import server from './server.js'


const socketIOServer = new Server(server);


export default socketIOServer;