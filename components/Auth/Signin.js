"use client";
import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <h2>SignIn with NextAuth</h2>
      {/* Google Login */}
      <div style={{ margin: "30px 0" }}>
        <button
          onClick={() =>
            signIn("google", { callbackUrl:"/" })
          }
        >
          Continou with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
