"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <div className="container my-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" className="form-control mb-2"
               onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="form-control mb-2"
               onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
}