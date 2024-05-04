import IconSearch from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/search.tsx"
import IconUserSquareRounded from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/user-square-rounded.tsx"
import IconHeart from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/heart.tsx"
import IconBabyCarriage from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/baby-carriage.tsx"

type Props = {
  active: string;
};

export function Header({ active }: Readonly<Props>) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Lançamentos", href: "/lancamentos" },
    { name: "Bebês", href: "/bebes" },
    { name: "Meninas", href: "/meninas" },
    { name: "Meninos", href: "/meninos" },
    { name: "Nossa História", href: "/about" },
  ];

  return (
    <header class="bg-white w-full max-w-screen-full flex flex-col">
      <div class="header-actions w-full">
        <div class="container mx-auto flex items-center justify-between p-4">
          <div class="w-full flex items-center gap-28">
            <a href="/" class="w-1/4 text-primary font-bold text-2xl">
              <img src="logo-los-pimos.svg" alt="" />
            </a>
            <div class="w-2/4 hidden md:flex items-center gap-2 relative">
              <input
                type="text"
                placeholder="Buscar produtos"
                class="w-full border border-gray-300 rounded-full placeholder-gray-300 py-2 px-6 focus:outline-none focus:border-secondary"
              />
              <button class="rounded-lg absolute right-4">
                <IconSearch size={20} class="text-tertiary"/>
              </button>
            </div>
            <div class="w-1/4 actions flex gap-4 justify-between">
              <div class="userActions w-content group flex flex-nowrap gap-2">
                <IconUserSquareRounded size={32} class="text-tertiary self-center"/>
                <a href="/login" class="text-black group-hover:text-secondary transition-colors self-center font-semibold underline">
                  Entre ou Cadastre-se
                </a>
              </div>
              <a href="/favorite" class="w-content text-gray-900 hover:text-secondary transition-colors group">
                <IconHeart size={32} class="text-tertiary hover:text-secondary"/>
              </a>
              <a href="/cart" class="w-content text-black hover:text-secondary transition-colors">
                <IconBabyCarriage size={32} class="text-tertiary hover:text-secondary"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-gradient-to-r from-primary to-secondary">
        <ul class="container mx-auto flex items-center gap-6 p-4">  
          {menus.map((menu, index) => (
            <li key={index}>
              <a
                href={menu.href}
                class={"text-white hover:text-tertiary transition-colors hover:ease-linear py-1 uppercase" +
                  (menu.href === active ? " border-b-2" : "")}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
