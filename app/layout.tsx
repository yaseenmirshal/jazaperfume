import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./Components/Navbar";
import Footer from "@/app/Components/Footer"; 
import { playfair_display, roboto } from "./utils/fonts";
import Script from 'next/script'; // Import the Script component from Next.js

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaza Perfumes",
  description: "Feel The Presence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
