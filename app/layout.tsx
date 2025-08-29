import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const librefranklin = Libre_Franklin({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rayan Ereteo",
  description: "Bienvenue sur mon site web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${librefranklin.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
