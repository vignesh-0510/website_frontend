"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return <button className = 'nav-link' onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>;
}