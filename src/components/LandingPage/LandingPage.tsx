import { Header } from "@/components/Common/header";
import { LandingMain } from "./LandingMain";

export default function LandingPage() {
    return (
        <div className="animation-wrapper">
            <Header />
            <main>
                <LandingMain />
            </main>
        </div>
    )
}