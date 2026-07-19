'use client'

import { CustomInput } from "../../Common/CustomInput"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplicationScheme, Application } from "@/api/types";
import { SuccessFeedback } from "./SuccessFeedback";
import { useState } from "react";
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
    const [success, setSuccess] = useState<boolean>(false)

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
    const Success = () => {
        setSuccess(true)

        setTimeout(() => {
            setSuccess(false)
        }, 6000)
    }

    return (
        <form className="feedback-card__form" onSubmit={handleSubmit(Success)}>
            <CustomInput
                inputType="text"
                placeholder="Имя и Фамилия"
                id='firstAndLastNames'
                required={true}
                {...register("firstAndLastNames")}
                contrast={true}
                errorMessage={errors.firstAndLastNames?.message ?? error?.firstAndLastNames}
            />
            <CustomInput
                inputType="text"
                placeholder="Назвнание организации"
                id='phoneNumber'
                required={true}
                {...register("nameOrganization")}
                contrast={true}
                errorMessage={errors.nameOrganization?.message ?? error?.nameOrganization}
            />
            <CustomInput
                inputType="text"
                placeholder="Телефон"
                id='nameOrganization'
                required={true}
                {...register("phoneNumber")}
                contrast={true}
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
            <button className="feedback-card__btn feedback-card__btn--form btn" type="submit" disabled={!isValid || isSubmitting}>
                Отправить заявку
            </button>
            <SuccessFeedback state={success}/>
        </form>
    )

    // <ExitButton href="/welcomepage" className="feedback__card-btn btn" noBaseStyle={true}>
    //   Отправить заявку
    //   </ExitButton>
}