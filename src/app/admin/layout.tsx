import "@/./src/app/globals.css"
import Footer from "@/src/components/footer";

export default function Adminayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
        <Footer/>
    </>
  );
}
