"use client"
import { signOut } from "next-auth/react"

const SignOut = () => {
  return (
    <div>
      <button onClick={()=>signOut()}>SignOut</button>
    </div>
  )
}

export default SignOut
