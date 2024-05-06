import Shelf from "@/components/Molecules/Shelf.tsx";
import { PageProps } from "$fresh/server.ts";
import type { Products } from "@/types/Product.ts";
type Props = {
    data: Products[];
    cards: number;
    props?: PageProps;
};
export default function Categorias({ data }: Readonly<Props>) {
    return (
        <section class="py-20">
                <div className="container mx-auto flex items-center gap-20">
                    <Shelf products={data} cards={25}/>
                </div>
        </section>
    );
}