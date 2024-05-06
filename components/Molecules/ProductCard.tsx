export default function ProductCard({ products, cards }: Readonly<any>) {
    return (
        <div class="w-full productCard grid grid-cols-4 gap-6">
            {
                Array.isArray(products) && products.slice(0, cards).map((product, idx) => (
                    <article key={idx} className="border border-transparent hover:border-slate-300 productCard__item flex flex-col justify-between items-center gap-y-4 shadow p-4">
                        <h3 class="h-min font-semibold">{product.name}</h3>
                        <figure class="w-full">
                            <img class="w-full object-cover" src={product.image} alt={product.name} />
                        </figure>
                        <div className="price w-full flex justify-between">
                            <span class="line-through">R$ {product.price.toFixed(2)}</span>
                            <span class="text-primary font-semibold">R$ {(product.price * 0.9).toFixed(2)}</span>
                        </div>
                        <a className="bg-secondary text-white w-full block text-center py-2 uppercase" target="_blank" href="https://www.whatsapp.com/catalog/554784177637/?app_absent=0">Comprar</a>
                    </article>
                ))
            }
        </div>
    );
}