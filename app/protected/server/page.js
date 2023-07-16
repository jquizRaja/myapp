"use server"
import React from "react";

const ProtectedServerPage = () => {
  return (
    <div>
    <h1>ProtectedServerPage</h1>
    <i style={{color:"red"}}>Server Side Page </i>
    <h2>
      <p>You are Logged as <b>Raja bhatti</b></p>
    </h2>
  </div>
  )
}
export default ProtectedServerPage
