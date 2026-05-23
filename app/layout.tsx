import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Lato } from 'next/font/google'
import Script from "next/script";

export const metadata: Metadata = {
  title: "Cabana Quatro Estações",
  description: "Seu refúgio romântico na serra",
  icons: {
    icon: "/favicon.png"
  }
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
      <body className="min-h-full flex flex-col">{children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="c6465b66-ad92-4529-a453-9c0cc1905a60"
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3813995312074701');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
