import { Icon } from "../Common/Icon"
import { ExitButton } from "../Common/ExitButton"
import { SearchBar } from "./SearchBar"
import WelcomeBtn from "./WelcomeBtn"

interface DashboardWelcomeProps {
    onToggleChart: () => void;
    isVisible: boolean;
}

export default function DashboardWelcome({
    onToggleChart,
    isVisible,
}: DashboardWelcomeProps) {
    const containerClass = `dashboard-animatable ${isVisible ? 'is-visible' : ''}`;

    return (
        <div className={containerClass}>
            <section className="welcome">
                <button
                    className="welcome__faq-btn"
                    type="button"
                    onClick={onToggleChart}
                >
                    <Icon
                        className="welcome__faq-icon welcome__icon"
                        role="faq"
                        aria-label="Часто задаваемые вопросы"
                    />
                </button>

                <h1 className="welcome__title">Добро пожаловать!</h1>

                <div className="welcome__container">
                    <div className="welcome__inner">
                        <ExitButton
                            className="welcome__action-btn btn"
                            href="#"
                            noBaseStyle={true}
                        >
                            Загрузить данные
                        </ExitButton>

                        <p className="welcome__question">или задать вопрос</p>

                        <div className="welcome__quick-list">
                            <WelcomeBtn text="Как структурировать Excel для загрузки?" />
                            <WelcomeBtn text="Покажи пример отчета на демо-данных" />
                            <WelcomeBtn text="Где хранятся мои файлы и защищены ли они?" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}