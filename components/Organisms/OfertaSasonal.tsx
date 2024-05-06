import Shelf from "@/components/Molecules/Shelf.tsx";
import type { Products } from "@/types/Product.ts";
type Props = {
    data: Products[];
    cards: number;
};
export default function OfertaSasonal({ data, cards }: Readonly<Props>) {
    return (
        <section class="py-20">
                <div className="container mx-auto flex items-center gap-20">
                    <Shelf products={data} cards={4}/>
                </div>
        </section>
    );
}