import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}</body>
        <Footer/>
    </html>
  );
}
