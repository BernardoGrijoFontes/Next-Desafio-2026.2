import "@/./src/app/globals.css"
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import BotaoWhatsApp from "@/src/components/botao_whatsapp";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  );
}