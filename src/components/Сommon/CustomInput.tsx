import { FC, useState } from "react"
import { ChangeEventHandler } from "react"
import { forwardRef } from "react"

export interface CustomInputProps {
    inputType: 'email' | 'password' | 'search',
    placeholder: string,
    id: string,
    required: boolean,
    inputValue?: string
    labelValue?: string,
    name?: string,
    onBlur?: ChangeEventHandler<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    errorMessage?: string,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    disabled?: boolean
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ inputType, placeholder, id, required, labelValue, name, onChange, onBlur,
        errorMessage, onKeyDown, disabled, inputValue }, ref) => {
        const [input, setInput] = useState('')

        const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
            setInput(event.target.value)
            onChange?.(event)
        }

        /*
        const handleClear = () => {
            setInput('')
        }
            */

        return (
            <div className="custom-input">
                <input
                    className={id == 'query' ? "custom-input__field custom-input__field--query" : "custom-input__field"}
                    type={inputType}
                    id={id}
                    ref={ref}
                    placeholder={placeholder}
                    onChange={handleInput}
                    value={inputValue && input}
                    required={required}
                    name={name}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                />
                <label className="custom-input__label" htmlFor={id}>{labelValue}</label>
                {errorMessage && <span className="custom-input__error">{errorMessage}</span>}
            </div>
        )
    }
)

CustomInput.displayName = 'CustomInput'
