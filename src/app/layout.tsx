import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import "./client/scss/index.scss";


export const serif = IBM_Plex_Serif({
  variable: '--ibm-plex-serif',
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const sans = IBM_Plex_Sans({
  variable: '--ibm-plex-sans',
  subsets: ["latin"],
  weight: ["400", "500"],
});
export const metadata: Metadata = {
  title: "VGOA.DEV",
  description: "Get in touch. VGOA@VGOA.DEV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
