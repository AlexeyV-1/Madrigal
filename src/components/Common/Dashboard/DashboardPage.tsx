import { DashboardMain } from "./DashboardComponents/DashboardMain"
import { Header } from "../../Common/header"

export default function DashboardPage() {
    return (
        <div className="animation-wrapper">
            <Header />
            <main>
                <DashboardMain />
            </main>
        </div>
    )
}