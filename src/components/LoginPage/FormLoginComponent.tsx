'use client'

import { CustomInput } from "../Common/CustomInput";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login, LoginScheme } from "@/api/types";
import { useState } from "react";

export default function FormLoginComponent() {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Login>({
        resolver: zodResolver(LoginScheme)
    })

    const handleClick = (data: Login) => {
        if (
            data.email === 'mymail@yandex.ru' && 
            data.password === '1234567890'
        ) {
            setError(null)
            router.push('/welcomepage')
        } else {
            setError('Данные неверные! Проверьте их ещё раз!')
        }
    }

    return (
        <form className="login-page__form" noValidate={true} onSubmit={handleSubmit((data) => {handleClick(data)})}>
            <CustomInput
                inputType="email"
                placeholder="Email"
                id='email'
                required={true}
                labelValue="Введите Ваш Email"
                {...register("email")}
                errorMessage={errors.email && errors.email.message}
            />
            <CustomInput
                inputType="password"
                placeholder="Пароль"
                id='password'
                required={true}
                labelValue="Введите Ваш Пароль"
                {...register("password")}
                errorMessage={errors.password && errors.password.message}
            />
            <button className="login-page__btn" type="submit">Submit</button>
            {error && <span className="login-page__error">{error}</span>}
        </form>
    )
}