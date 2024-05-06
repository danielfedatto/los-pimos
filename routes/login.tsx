import { PageProps } from "$fresh/server.ts";
import { Header } from "../components/Atoms/Header.tsx";
import { InfoBar } from "../components/Atoms/infoBar.tsx";
import Footer from "../components/Atoms/Footer.tsx";
import LoginForm from "@/components/Molecules/LoginForm.tsx"; 

export default function Login(ctx: PageProps) {
    return (
        <div>
            <InfoBar/>
            <Header active=''/>
            <LoginForm />
            <Footer />
        </div>
    )
}
