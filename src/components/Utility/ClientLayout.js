"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import BootstrapClient from "@/components/Utility/BootstrapClient";

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <BootstrapClient />
      <Navbar />
      {children}
      <Footer />
    </SessionProvider>
  );
}