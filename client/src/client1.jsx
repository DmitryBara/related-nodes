
import React, { useState } from 'react'
import socket from './socket-client';


const FirstClient = () => {

  const [message, setMessage] = useState()

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit("firstClientEvent", message);

    document.getElementById("message-form").reset();
    setMessage(undefined)
  }

  return (
    <>
      <h1>Client 1</h1>
      <form id="message-form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
    </>
  )
}


export default FirstClient;
