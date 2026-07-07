import { FC, useState } from "react"
import { ChangeEventHandler } from "react"

export interface CustomInputProps {
    btnType: 'email' | 'password',
    placeholder: string,
    id: string,
    required: boolean,
    labelValue: string,
    onChange: (value:string) => void
}

export const CustomInput: FC<CustomInputProps> = ({ btnType, placeholder, id, required, labelValue, onChange }) => {
    const [input, setInput] = useState('')

    const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput(event.target.value)
        onChange(event.target.value)
    } 

    /*
    const handleClear = () => {
        setInput('')
    }
        */

     return (
        <div className="custom-input">
            <input className="custom-input__field" type={btnType} id={id} placeholder={placeholder} onChange={handleInput} value={input ?? ''} required={required} />
            <label className="custom-input__label" htmlFor={id}>{labelValue}</label>
        </div>
    )
}
    