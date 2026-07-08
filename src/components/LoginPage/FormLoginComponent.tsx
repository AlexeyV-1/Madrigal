'use client'

import { CustomInput } from "../Сommon/CustomInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormLoginComponent() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        if (
            email === 'mymail@yandex.ru' && 
            password === '1234567890'
        ) {
            router.push('/welcomepage')
        } else {
            window.alert('ВСЁ ЧЕРЕЗ ЖОПУ!!!')
        }
    }

    return (
        <form className="login-page__form">
            <CustomInput
                inputType="email"
                placeholder="Email"
                id='email'
                required={true}
                labelValue="Введите Ваш Email"
                onChange={setEmail}
            />
            <CustomInput
                inputType="password"
                placeholder="Пароль"
                id='password'
                required={true}
                labelValue="Введите Ваш Пароль"
                onChange={setPassword}
            />
            <button className="login-page__btn" type="button" onClick={handleClick}>Submit</button>
        </form>
    )
}