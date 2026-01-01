import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./client/scss/index.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin'],
})

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
      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
