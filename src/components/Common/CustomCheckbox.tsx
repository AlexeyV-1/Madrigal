import { ReactNode, useState } from "react"
import { ChangeEventHandler, FocusEventHandler } from "react"
import { forwardRef } from "react"
import { Icon } from "./Icon"

interface CustomCheckboxProps {
    inputType: 'checkbox',
    id: string,
    required: boolean,
    labelValue: string | ReactNode,
    name?: string,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    errorMessage?: string,
    disabled?: boolean
}

export const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
    (props, ref) => {
        const { inputType, id, required, labelValue, name, onBlur, onChange, errorMessage, disabled } = props

        return (
            <div className="custom-input custom-input--checkbox">
                <div className="custom-input__wrapper">
                    <input
                        className="custom-input__field"
                        type={inputType}
                        id={id}
                        ref={ref}
                        onChange={onChange}
                        required={required}
                        name={name}
                        onBlur={onBlur}
                        disabled={disabled}
                    />
                    <span className="custom-input__indicator">
                        <Icon role="tick" className="custom-input__tick-icon" />
                    </span>
                    {labelValue && <label className="custom-input__label" htmlFor={id}>{labelValue}</label>}
                </div>
                {errorMessage && <span className="custom-input__error">{errorMessage}</span>}
            </div>
        )
    }
)

CustomCheckbox.displayName = 'CustomInput'