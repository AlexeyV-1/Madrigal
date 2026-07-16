import { FeedbackForm } from "./FeedbackForm"

export function FeedbackCard() {
    return (
    <div className="feedback-card">
            <h2 className="feedback-card__title">Обсудить проект</h2>
            <p className="feedback-card__text">Оставьте контакты, и мы адаптируем frontend-прототип
                платформы под специфику ваших ведомственных или корпоративных данных.</p>
            <FeedbackForm />
    </div>
    )
}