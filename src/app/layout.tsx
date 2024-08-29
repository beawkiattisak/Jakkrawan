import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Anakotmai from "next/font/local"

const anakotmai = Anakotmai({
  src: [{
    path: "../../public/fonts/Anakotmai.ttf",
    weight: "400",
  }],
  variable: "--font-anakotmai"
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "พรรคจักรวาลคือความสุข | Jakkrawan Party",
  description: "เว็ปไซต์พรรคจักรวาลคือความสุข | Jakkrawan Party 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anakotmai.className}>{children}</body>
    </html>
  );
}
