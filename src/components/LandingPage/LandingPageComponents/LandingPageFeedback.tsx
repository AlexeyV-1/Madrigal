import { ExitButton } from "@/components/Common/ExitButton"
import { FeedbackCard } from "./FeedbackCard"

export function LandingPageFeedback() {
    return (
        <section className='feedback'>
            <h2 className='feedback__title'>Начните управлять данными на новом уровне</h2>
            <p className="feedback__text">Протестируйте интерактивные сценарии ИИ-модуля на фиктивных данных прямо
                сейчас.</p>
            <ExitButton href="/welcomepage" className="btn feedback__btn" noBaseStyle={true}>
                Начать аналитику
            </ExitButton>

            <FeedbackCard />
        </section>
    )
}