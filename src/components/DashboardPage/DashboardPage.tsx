import { DashboardMain } from "./DashboardMain"
import { Header } from "@/components/Common/header"

export default function DashboardPage() {
    return (
        <div className="animation-wrapper">
            <Header page="dashboard"/>
            <main>
                <DashboardMain />
            </main>
        </div>
    )
}