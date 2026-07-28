import { Header } from "@/components/Common/Header"
import { QueryMain } from "./QueryMain"

export default function QueryPage() {
    return (
        <div className="animation-wrapper">
            <Header page="query" />
            <main>
                <QueryMain />
            </main>
        </div>
    )
}