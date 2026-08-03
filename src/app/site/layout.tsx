import "@/./src/app/globals.css"
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function AuthLayout({
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