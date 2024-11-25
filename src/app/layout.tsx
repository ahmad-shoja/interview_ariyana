"use client";
import localFont from "next/font/local";
import "./globals.css";

const yekanBakh = localFont({
  src: [
    {
      weight: "400",
      path: "./fonts/yekan/Yekan-Bakh-FaNum-04-Regular.woff",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-06-Bold.woff",
      weight: "600",
    },
  ],
  variable: "--font-yekan",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${yekanBakh.className}`}>{children}</body>
    </html>
  );
}
