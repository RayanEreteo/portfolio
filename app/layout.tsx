import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChakraProviderWrapper from "@/components/ChakraProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rayan Ereteo | Portfolio",
  description: "Bienvenue sur mon portfolio de développeur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ChakraProviderWrapper>{children}</ChakraProviderWrapper></body>
    </html>
  );
}
