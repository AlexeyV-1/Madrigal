import { Icon } from "../../Icon"
import { ExitButton } from "../../ExitButton"
import WelcomeBtn from "./WelcomeBtn"

export default function DashboardWelcome() {
    return (
        <section className="welcome">
            <Icon className="welcome__icon" role="faq" />
            <h1 className="welcome__title">Добро пожаловать!</h1>
            <div className="welcome__container">
                <ExitButton
                    className="btn welcome__btn"
                    href="#"
                    noBaseStyle={true}
                >
                    Загрузить данные
                </ExitButton>
                <p className="welcome__question">или задать вопрос</p>
                <div className="welcome__list">
                    <WelcomeBtn
                        text='Как  структурировать Excel для загрузки?'
                    />
                    <WelcomeBtn
                        text='Покажи пример отчета на демо-данных'
                    />
                    <WelcomeBtn
                        text='Где хранятся мои файлы и защищены ли они?'
                    />
                </div>
            </div>
        </section>
    )
}

