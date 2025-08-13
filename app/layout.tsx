import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const librefranklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rayan Ereteo",
  description: "Bienvenue sur mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${librefranklin.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
