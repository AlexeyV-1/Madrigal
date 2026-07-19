import { useState } from "react"
import { ChangeEventHandler, FocusEventHandler } from "react"
import { forwardRef } from "react"
import { Icon } from "./Icon"

interface CustomInputBaseProps {
    inputType: 'email' | 'text',
    placeholder: string,
    id: string,
    required: boolean,
    inputValue?: string,
    labelValue?: string,
    name?: string,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    errorMessage?: string,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    disabled?: boolean
    contrast?: boolean
}

interface CustomInputPasswordProps extends Omit<CustomInputBaseProps, 'inputType'> {
    inputType: 'password',
    showPassword: boolean,
    onTogglePassword: () => void,
}

export type CustomInputProps = CustomInputBaseProps | CustomInputPasswordProps

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    (props, ref) => {
        const { inputType, placeholder, id, required, labelValue, name, onChange, onBlur,
            errorMessage, onKeyDown, inputValue, disabled, contrast } = props
        const [input, setInput] = useState('')

        const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
            setInput(event.target.value)
            onChange?.(event)
        }

        const isPassword = inputType === 'password'
        const showPassword = isPassword ? props.showPassword : undefined
        const onTogglePassword = isPassword ? props.onTogglePassword : undefined

        const passwordInputType = showPassword ? 'text' : 'password'

        return (
            <div className={id == 'password' ? "custom-input custom-input--password" : contrast ? "custom-input custom-input--contrast" : 
                "custom-input"
            }>
                <input
                    className={ id == 'query' ? "custom-input__field custom-input__field--query" : "custom-input__field"}
                    type={inputType == 'password' ? passwordInputType : inputType}
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
                {labelValue && <label className="custom-input__label" htmlFor={id}>{labelValue}</label>}
                {isPassword && <button
                    className="custom-input__btn"
                    onClick={onTogglePassword}
                    type="button"
                >  {showPassword ? <Icon role="eye-closed" className='custom-input__icon' /> :
                    <Icon role="eye" className='custom-input__icon' />
                    }
                </button>
                }
                {errorMessage && <span className="custom-input__error">{errorMessage}</span>}
            </div>
        )
    }
)

CustomInput.displayName = 'CustomInput'
