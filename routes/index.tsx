import { PageProps } from "$fresh/server.ts";
import { Header } from "../components/Atoms/Header.tsx";
import { InfoBar } from "../components/Atoms/infoBar.tsx";
import Carousel from "@/islands/Carousel.tsx";
import Footer from "../components/Atoms/Footer.tsx";
import products from "@/data/products.json" with { type: "json" };
import OfertaEspecial from "@/components/Organisms/OfertaEspecial.tsx";
import OfertaSasonal from "@/components/Organisms/OfertaSasonal.tsx";

export default function Home(ctx: PageProps) {
  return (
    <div>
      <InfoBar/>
      <Header active=''/>
      <Carousel currentSlide={0} showArrows={false}/>
      <OfertaSasonal data={products} cards={5}/>
      <OfertaEspecial data={products}/>
      <Footer />
    </div>
  );
}