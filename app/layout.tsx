import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lato } from 'next/font/google'

export const metadata: Metadata = {
  title: "Cabana Quatro Estações",
  description: "Seu refúgio romântico na serra",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased ${playfair.variable} ${lato.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
