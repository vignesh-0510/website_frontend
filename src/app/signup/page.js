"use client";
import { useState } from "react";

export default function SignupPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        });
        if (res.ok) alert("Signup successful! You can now log in.");
    };

    return (
        <div className="container my-5">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="form-control mb-2"
                onChange={(e) => setForm({ ...form, name: e.target.value })}/>
            <input type="email" placeholder="Email" className="form-control mb-2"
                onChange={(e) => setForm({ ...form, email: e.target.value })}/>
            <input type="password" placeholder="Password" className="form-control mb-2"
                onChange={(e) => setForm({ ...form, password: e.target.value })}/>
            <select className="form-select mb-2" onChange={(e) => setForm({ ...form, role: e.target.value })}>
            <option value="user">User</option>
            <option value="admin">Administrator</option>
            </select>
            <button type="submit" className="btn btn-dark w-100">Sign Up</button>
        </form>
        </div>
    );
}