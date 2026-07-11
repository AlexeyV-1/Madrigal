import { Header } from "../Common/header";
import { LandingMain } from "./LandingMain";

// Подключить шрифты Inter;

export default function LandingPage() {
    return (
        <>
            <Header />
            <main>
                <LandingMain />
            </main>
        </>
    )
}