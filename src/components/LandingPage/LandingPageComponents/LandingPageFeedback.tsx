import { ExitButton } from "@/components/WelcomePage/ExitButton"
import { FeedbackForm } from "./FeedbackForm"

export function LandingPageFeedback() {
    return (
        <section className='feedback'>
            <h2 className='feedback__title'>Начните управлять данными на новом уровне</h2>
            <p className="feedback__text">Протестируйте интерактивные сценарии ИИ-модуля на фиктивных данных прямо
                сейчас.</p>
            <ExitButton href="/welcomepage" className="feedback__btn btn" noBaseStyle={true}>
                Начать аналитику
            </ExitButton>

            <div className="feedback__card">
                <div className="feedback__wrapper">
                    <h2 className="feedback__card-title">Обсудить проект</h2>
                    <p className="feedback__card-text">Оставьте контакты, и мы адаптируем frontend-прототип
                        платформы под специфику ваших ведомственных или корпоративных данных.</p>
                    <FeedbackForm />
                </div>
            </div>
        </section>
    )
}