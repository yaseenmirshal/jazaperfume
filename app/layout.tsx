"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar";
import Footer from "@/app/Components/Footer";
import Loader from "./Components/Loader";
import { playfair_display, roboto } from "./utils/fonts";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Setting title and description manually */}
        <title>Jaza Perfumes</title>
        <meta name="description" content="Feel The Presence" />

        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-700YMNFZ4D"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-700YMNFZ4D');
          `}
        </Script>
      </head>
      
      <body className={`${roboto} ${playfair_display}`}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
