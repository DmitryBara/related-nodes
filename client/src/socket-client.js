import { io } from 'socket.io-client'

const serverPort = process.env.REACT_APP_SERVER_PORT

const socket = io.connect(`http://127.0.0.1:${serverPort}`, { transports: ['websocket'] })

export default socket;