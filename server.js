import { createServer } from 'http'
import app from './app.js'


const server = createServer(app);

server.listen(process.env.SERVER_PORT);


export default server
