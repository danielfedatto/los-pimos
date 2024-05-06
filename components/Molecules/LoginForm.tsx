type Props = {
};
export default function Categorias({}: Readonly<Props>) {
    return (
        <section class="py-20">
                <div className="container mx-auto flex justify-center items-center gap-20">
                    <form class="flex flex-col gap-y-2">
                        <label for="email" class="block text-sm font-medium text-slate-700">E-mail</label>
                        <input type="email" name="email" id="email" class="w-sm px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" value="" placeholder="you@example.com" data-np-autofill-field-type="email" data-np-uid="063acedb-e2e6-41dd-878f-fd4e119565b6" />
                        <label for="password" class="block text-sm font-medium text-slate-700">Senha</label>
                        <input type="password" name="password" id="password" class="w-sm px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none" value="" data-np-intersection-state="visible" />
                        <button class="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Entrar</button>
                    </form>
                </div>
        </section>
    );
}