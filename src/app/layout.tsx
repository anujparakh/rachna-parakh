import type { Metadata } from 'next';
import { Nunito, Fraunces, Roboto } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const nunito = Nunito({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-nunito',
});

const fraunces = Fraunces({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6HBJ4R55M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P6HBJ4R55M');
          `}
        </Script>
      </head>
      <body
        className={`${nunito.variable} ${fraunces.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
