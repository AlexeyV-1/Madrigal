import { Icon } from "./Icon";

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <Icon className="header__logo" role="logo"/>
            </div>
        </header>
    )
}