import { Icon } from "../Common/Icon"
import { SearchBar } from "../DashboardPage/SearchBar"
import CopyBtn from "../QueryPage/CopyBtn"
import { useState } from "react"

export default function FailQuery() {
    const [hasFile, setHasFile] = useState(false)
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files
      if (!selectedFiles || selectedFiles.length === 0) {
        return
      }
      setHasFile(true)
    }

    return (
        <div className="fail-query">
        <div className="fail-query__wrapper">  
            <Icon role='fail-query' className="fail-query__icon"/> 
            <p className="fail-query__title">Не удалось обработать запрос</p>
            <p className="fail-query__text">Сформулируйте запрос проще</p>
        </div>
        <div>
            <CopyBtn handleFileChange={(e) => handleFileChange(e)} />
            <SearchBar 
                isChart={hasFile}
            />
        </div>
        </div>
    )
}