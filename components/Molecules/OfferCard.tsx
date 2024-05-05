export default function OfferCard() {
    

  return (
    <div className="container mx-auto">
        <div className="offerCard max-w-md">
            <div className="offerCard__image relative border border-slate-100 bg-teal-50 p-4">
                <h2 class="text-xl">Oferta</h2>
                <h2 class="text-xl text-red-500">Especial</h2>
                <div className="discountBadge absolute right-2 bg-secondary text-black flex flex-col justify-center items-center w-24 h-24 rounded-full">
                    <span class="font-bold">Desconto</span>
                    <span class="font-bold">10%</span>
                </div>
                <figure class="flex items-center justify-center">
                    <img width={338} src="oferta-especial-destaque.png" alt="Oferta Especial" />
                </figure>
                <div className="offerPrice">
                    <p class="productName font-semibold">Conjunto</p>
                    <div className="productPrice">
                        <span class="text-2xl text-red-500 mr-1 font-semibold">R$ 65,20</span>
                        <span class="text-sm line-through font-semibold">R$ 69,99</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}