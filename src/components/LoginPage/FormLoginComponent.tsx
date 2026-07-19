'use client'

import { CustomInput } from "../Common/CustomInput";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Login, LoginScheme } from "@/api/types";
import { useState, useEffect } from "react";

interface ErrorMessage {
    email?: string,
    password?: string
}

export default function FormLoginComponent() {
    const router = useRouter()
    const [error, setError] = useState<ErrorMessage | null>(null)
    const [showPassword, setShowPassword] = useState(false)
    const [animationPage, setAnimationPage] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        watch
    } = useForm<Login>({
        resolver: zodResolver(LoginScheme),
        mode: 'onChange'
    })

    /**
     * TODO: заменить на реальный запрос к API
     */ 
    const handleClick = (data: Login) => {
        if (
            data.email === 'madrigal@mail.ru' &&
            data.password === '1234567890'
        ) {
            setError(null)
            setAnimationPage(true)

        setTimeout(() => {
            router.push('/landingpage')
            // setAnimationPage(false)
        }, 500)
        } else {
            setError({
                email: 'Неверный email',
                password: 'Неверный пароль'
            })
        }
    }

    useEffect(() => {
        const subscription = watch(() => setError(null))
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <form className={animationPage ? "login-page__form login-page__form--active" : "login-page__form"} noValidate={true} onSubmit={handleSubmit(handleClick)}>
            <CustomInput
                inputType="email"
                placeholder="Логин"
                id='email'
                required={true}
                {...register("email")}
                errorMessage={errors.email?.message ?? error?.email}
            />
            <CustomInput
                inputType="password"
                placeholder="Пароль"
                id='password'
                required={true}
                {...register("password")}
                showPassword={showPassword}
                onTogglePassword={() => {
                    setShowPassword((prev) => !prev)
                }}
                errorMessage={errors.password?.message ?? error?.password}
            />
            <button className="login-page__btn btn" type="submit" disabled={!isValid || isSubmitting}>Войти</button>
        </form>
    )
}