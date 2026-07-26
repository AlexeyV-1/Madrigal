import DashboardWelcome from "./DashboardWelcome"
import DashboardTable from "./DashboardTable"

export function DashboardMain() {
    return (
        <div className="container">
            <DashboardWelcome />
            <DashboardTable />
           {/* <DashboardPage/>  */}
            {/* Компоненты страницы, модульное подключение*/}
            {/* Элемент - Main, то есть его содержимое */}
        </div>
    )
}