"use client"
import React from "react";

const ProtectedClientPage = () => {
  return (
  <div>
    <h1>ProtectedClientPage</h1>
    <i style={{color:"red"}}>Client Side</i>
    <h2>
      <p>You are Logged as <b>Raja bhatti</b></p>
    </h2>
  </div>
  )
};

export default ProtectedClientPage;
