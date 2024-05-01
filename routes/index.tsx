import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import  Header from "../components/Header.tsx";

export default function Home() {
  return (
    <main>
      <Header active="true" />
    </main>
  );
}
