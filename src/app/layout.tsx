import type { Metadata } from "next";
import { Nunito, Fraunces, Roboto } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fraunces = Fraunces({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Rachna Parakh's Portfolio",
  description: "Welcome to Rachna Parakh's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${fraunces.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
