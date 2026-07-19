import FormLoginComponent from "./FormLoginComponent";

export default function LoginPage() {

    return (
        <div className="login-page animation-wrapper">
            <div className="login-page__wrapper">
                <h1 className="login-page__title" >Авторизация</h1>
                <FormLoginComponent />
            </div>
        </div>
    )
}