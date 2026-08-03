import { Icon } from "../Common/Icon"
import { SearchBar } from "../DashboardPage/SearchBar"
import CopyBtn from "../QueryPage/CopyBtn"

export default function FailQuery() {
    return (
        <div className="fail-query">
        <div className="fail-query__wrapper">  
            <Icon role='fail-query' className="fail-query__icon"/> 
            <p className="fail-query__title">Не удалось обработать запрос</p>
            <p className="fail-query__text">Сформулируйте запрос проще</p>
        </div>
        <div>
            <CopyBtn />
            <SearchBar />
        </div>
        </div>
    )
}