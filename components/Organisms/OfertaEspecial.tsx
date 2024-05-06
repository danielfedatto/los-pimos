import OfferCard from "@/components/Molecules/OfferCard.tsx";
import Shelf from "@/components/Molecules/Shelf.tsx";
import type { Products } from "@/types/Product.ts";
type Props = {
    data: Products[];
};
export default function OfertaEspecial({ data }: Readonly<Props>) {
    return (
        <section class="py-20">
                <div className="container mx-auto flex items-center gap-20">
                    <OfferCard />
                    <Shelf cards={8} products={data}/>
                </div>
        </section>
    );
}