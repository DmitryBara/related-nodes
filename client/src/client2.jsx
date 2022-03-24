
import React, { useState } from 'react'
import socket from './socket-client';


const SecondClient = () => {

  const [message, setMessage] = useState()

  socket.on('connect', () => {
    socket.on("secondServerEvent", (message) => {
      setMessage(message)
    });
  });

  return (
    <>
      <h1>Client 2</h1>
      <p>{message || "Awaiting message from 1 client..."}</p>
    </>
  )
}


export default SecondClient;
