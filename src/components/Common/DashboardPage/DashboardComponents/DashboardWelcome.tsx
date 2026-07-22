import { Icon } from "../../Icon"
import { ExitButton } from "../../ExitButton"
import { SearchBar } from "../SearchBar"
import WelcomeBtn from "../WelcomeBtn"


export default function DashboardWelcome() {
    return (
        <section className="welcome">
            <button
                className="welcome__faq-btn"
                type="button">
                <Icon
                    className="welcome__faq-icon welcome__icon"
                    role="faq"
                    aria-label="Часто задаваемые вопросы"
                />
            </button>

            <h1 className="welcome__title">Добро пожаловать!</h1>

            <div className="welcome__container">
                <ExitButton
                    className="welcome__action-btn btn"
                    href="#"
                    noBaseStyle={true}
                >
                    Загрузить данные
                </ExitButton>

                <p className="welcome__question">или задать вопрос</p>

                <div className="welcome__quick-list">
                    <WelcomeBtn text='Как структурировать Excel для загрузки?' />
                    <WelcomeBtn text='Покажи пример отчета на демо-данных' />
                    <WelcomeBtn text='Где хранятся мои файлы и защищены ли они?' />
                </div>
                <div className="welcome__actions">
                    <div className="welcome__actions-group">
                        <button
                            className="welcome__add-btn"
                            type="button"
                            aria-label="Добавить"
                        >
                            <Icon className="welcome__add-icon welcome__icon" role="add" />
                        </button>
                        <button
                            className="welcome__attachment-btn"
                            type="button"
                            aria-label="Прикрепить файл"
                        >
                            <Icon className="welcome__attachment-icon welcome__icon" role="attachment" />
                        </button>
                    </div>
                    <SearchBar />
                </div>
            </div>
        </section>
    )
}

