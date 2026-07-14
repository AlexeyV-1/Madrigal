'use client'

import { ExitButton } from "@/components/WelcomePage/ExitButton"
import { CustomInput } from "../../Common/CustomInput"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplicationScheme, Application } from "@/api/types";
import { useState, useEffect } from "react";
import { CustomCheckbox } from '../../Common/CustomCheckbox'

interface ErrorMessage {
    firstAndLastNames?: string,
    nameOrganization?: string,
    phoneNumber?: string,
    agreement?: string
}

export function FeedbackForm() {
    const router = useRouter()
    const [error, setError] = useState<ErrorMessage | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        watch
    } = useForm<Application>({
        resolver: zodResolver(ApplicationScheme),
        mode: 'onChange'
    })

    /**
     * TODO: заменить на реальный запрос к API
     */
    const handleClick = () => {
        alert('YEAH!')
    }

    return (
        <form className="feedback__form">
            <CustomInput
                inputType="text"
                placeholder="Имя и Фамилия"
                id='firstAndLastNames'
                required={true}
                {...register("firstAndLastNames")}
                errorMessage={errors.firstAndLastNames?.message ?? error?.firstAndLastNames}
            />
            <CustomInput
                inputType="text"
                placeholder="Назвнание организации"
                id='phoneNumber'
                required={true}
                {...register("nameOrganization")}
                errorMessage={errors.nameOrganization?.message ?? error?.nameOrganization}
            />
            <CustomInput
                inputType="text"
                placeholder="Телефон"
                id='nameOrganization'
                required={true}
                {...register("phoneNumber")}
                errorMessage={errors.phoneNumber?.message ?? error?.phoneNumber}
            />
            <CustomCheckbox 
                inputType="checkbox"
                id='agreement'
                required={true}
                labelValue={
                    <span id="agreement-text" className="custom-input__text">
                        {'Нажимая кнопку, вы соглашаетесь с '}
                        <a href="#" className="custom-input__link">
                            Политикой обработки персональных данных
                        </a>
                    </span>
                }
                {...register("agreement")}
                errorMessage={errors.agreement?.message ?? error?.agreement}
            />
            <button className="feedback__btn feedback__btn--form btn" type="submit" disabled={!isValid || isSubmitting}>
                Отправить заявку
            </button>
        </form>
    )

    // <ExitButton href="/welcomepage" className="feedback__card-btn btn" noBaseStyle={true}>
          //   Отправить заявку
          //   </ExitButton>
}