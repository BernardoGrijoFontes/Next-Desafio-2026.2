import Hero_section from "../components/hero_section";
import Mais_vendidos from "../components/mais_vendidos";
import Missao from "../components/missao_visao_valores";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero_section/>
      <Mais_vendidos/>
      <Missao/>
      <Footer/>
    </main>
  );
}
