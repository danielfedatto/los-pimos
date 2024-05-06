import ProductCard from "@/components/Molecules/ProductCard.tsx";
import type { Products } from "@/types/Product.ts";
type Props = {
    products: Products[];
    cards: number;
};

export default function Shelf({ products, cards }: Readonly<Props>) {
    return (
        <ProductCard products={products} cards={cards} />
    );
}