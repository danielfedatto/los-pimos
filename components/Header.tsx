import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/lemon-2.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Lançamentos", href: "/lancamentos" },
    { name: "Bebês", href: "/bebes" },
    { name: "Meninas", href: "/meninas" },
    { name: "Meninos", href: "/meninos" },
    { name: "Nossa História", href: "/about" },
  ];

  return (
    <header class="bg-white w-full max-w-screen-full flex flex-col md:flex-row gap-4">
      <div className="w-full bg-gradient-to-r from-primary to-secondary">
        <ul class="container mx-auto flex items-center gap-6 p-4">  
        {menus.map((menu) => (
          <li>
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
