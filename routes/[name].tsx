import { PageProps } from "$fresh/server.ts";
import { Header } from "../components/Atoms/Header.tsx";
import { InfoBar } from "../components/Atoms/infoBar.tsx";
import Carousel from "@/islands/Carousel.tsx";
import Footer from "../components/Atoms/Footer.tsx";
import products from "@/data/products.json" with { type: "json" };
import Categorias from "@/components/Organisms/Categorias.tsx";

export default function Page(props: PageProps) {
    const filteredProducts = products.filter(product => product.category === props.params.name);
    return (
        <div>
            <InfoBar/>
            <Header active=''/>
            <Carousel currentSlide={0} showArrows={false}/>
            <div className="container mx-auto">
                <h1 class="font-semibold text-secondary text-xl mt-6 capitalize">{props.params.name}</h1>
            </div>
            <Categorias data={filteredProducts} cards={5}/>
            <Footer />
        </div>
    )
}
