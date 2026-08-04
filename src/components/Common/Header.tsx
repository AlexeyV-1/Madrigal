'use client'

import { Icon } from "./Icon";

interface HeaderProps {
    page: 'landing' | 'dashboard' | 'query'
}

export function Header({ page }: HeaderProps) {
    return (
        <header className={`header header--${page}`}>
            <div className="container">
                <div className='header__wrapper'>
                    <Icon className="header__logo" role="logo" />
                    <button 
                        className="header__btn"
                        onClick={() => alert("Данная функция будет реализована позже!")}
                    >
                        <Icon className="header__info" role="faq" />
                    </button>
                </div>
            </div>
        </header>
    )
}