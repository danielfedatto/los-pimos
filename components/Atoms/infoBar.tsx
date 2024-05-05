import IconTruckDelivery from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/truck-delivery.tsx"

export function InfoBar() {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-secondary">
        <div class="container mx-auto flex items-center justify-center gap-2">
            <IconTruckDelivery stroke={0.8} size={32} class="text-white" />
            <p class="uppercase text-white text-center">Entregas em Itajaí e região / taxa a consultar</p>
        </div>
    </div>
  );
}
