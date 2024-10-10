import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarComponent from "./(Components)/(Root)/Navbar";
import DatiContextProvider from "./providers/DataProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <DatiContextProvider>
          <NavbarComponent />
          {children}
        </DatiContextProvider>
      </body>
    </html>
  );
}
