import type { Metadata } from "next";
import "./globals.css";
import { manrope, openSansBold, openSansExtraBold, openSansMedium, openSansRegular } from "../lib/font";

export const metadata: Metadata = {
  title: "Boldo",
  description: "Test project for Tonic Technologies"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSansRegular.variable} ${openSansMedium.variable} ${openSansBold.variable} ${openSansExtraBold.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
