import Hero_section from "../components/hero_section";
import Mais_vendidos from "../components/mais_vendidos";
import Missao from "../components/missao_visao_valores";
import Header from "../components/header";
import Footer from "../components/footer";
import ProdutosEmDestaque from "../components/em_destaque";
import getEmDestaque from "@/actions/home/actions";

export default async function Home() {
  const produtos_loja = await getEmDestaque()
  return (
    <main>
      <Header/>
      <Hero_section/>
      <ProdutosEmDestaque produtos={produtos_loja}/>
      <Mais_vendidos/>
      <Missao/>
      <Footer/>
    </main>
  );
}
