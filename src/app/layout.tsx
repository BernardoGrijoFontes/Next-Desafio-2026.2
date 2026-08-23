import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import BotaoWhatsApp from "../components/botao_whatsapp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Next Wear Brechó",
  description: "Um brechó focado em moda rotativa e sustentável",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
        <BotaoWhatsApp/>
      </body>
    </html>
  );
}
