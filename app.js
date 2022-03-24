import express from "express";


const app = express();
app.use(express.json());


if (process.env.SERVER_NUMBER == 1) {
  import('./node1.js')
} else if (process.env.SERVER_NUMBER == 2) {
  import('./node2.js')
}


export default app;

