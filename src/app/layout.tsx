import type { Metadata } from "next";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import localFont from "next/font/local";

import "./globals.css";

const joystix = localFont({
  src: [
    {
      path: "../../public/fonts/joystix.ttf",
      weight: "400",
    },
  ],
  variable: "--font-joystix",
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const joystix = localFont({
//   src: "./fonts/joystix.ttf",
//   variable: "--font-joystix",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Nazarly Digital",
  description: "Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${joystix.variable} font-sans`}>
      <link rel="icon" href="/assets/logo/logo.svg" />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
