import IconBrandFacebook from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-facebook.tsx"
import IconBrandWhatsapp from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-whatsapp.tsx"
import IconBrandInstagram from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-instagram.tsx"

export default function Footer() {
    const paymentFlags = [
        { name: "Visa", url: "visa-flag.png" },
        { name: "Mastercard", url: "master-flag.png" },
        { name: "Pix", url: "pix-flag.png" },
    ];

  return (
    <footer class="bg-white flex flex-col">
        <div className="footerinfo bg-slate-200">
            <div className="container mx-auto flex flex-col gap-4 py-4">
                <figure>
                    <img src="footer_logo_los_pimos.png" alt="Los Pimos" />
                    <figcaption class="">03 111 666 144</figcaption>
                </figure>
                <div className="email">
                    <h6 class="text-secondary font-semibold">
                        E-mail
                    </h6>
                    <p>
                        google@gmail.com
                    </p>
                </div>
                <ul className="socialMedia flex gap-4">
                    <li>
                        <a href="https://www.facebook.com" target="_blank">
                            <IconBrandFacebook size={32} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank">
                            <IconBrandInstagram size={32} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.whatsapp.com" target="_blank">
                            <IconBrandWhatsapp size={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="paymentFlags bg-slate-200">
            <ul class="container mx-auto flex justify-end py-2 gap-2">  
                {paymentFlags.map((paymentFlags, index) => (
                    <li key={index}>
                        <img width={48} src={paymentFlags.url} alt={paymentFlags.name} />
                    </li>
                ))}
            </ul>
        </div>
        <div class="infoBar w-full bg-gradient-to-r from-primary to-secondary">
            <div class="container mx-auto">
                <p class="py-2">@2024</p>
            </div>
      </div>
    </footer>
  );
}