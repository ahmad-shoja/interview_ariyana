"use client";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "./theme-provider";
import Rtl from "@/cache-provider";

const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-01-Hairline.woff",
      weight: "100",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-02-Thin.woff",
      weight: "200",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-03-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-04-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-05-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-06-Bold.woff",
      weight: "600",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-07-Heavy.woff",
      weight: "700",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-07-Heavy.woff",
      weight: "800",
    },
    {
      path: "./fonts/yekan/Yekan-Bakh-FaNum-07-Heavy.woff",
      weight: "900",
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
    <html lang="en" dir="rtl">
      <body className={`${yekanBakh.className}`}>
        <Rtl>
          <ThemeProvider>{children}</ThemeProvider>
        </Rtl>
      </body>
    </html>
  );
}
