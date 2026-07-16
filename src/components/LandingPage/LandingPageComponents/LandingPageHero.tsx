import { ExitButton } from "@/components/Common/ExitButton"

export function LandingPageHero() {
    return (
        <section className="hero">
            <span className="hero__description">ИИ-платформа нового поколения</span>
            <h1 className="hero__title">Управляйте будущим на основе данных</h1>
            <p className="hero__text"><b>«Мадригал»</b> собирает разрозненные ведомственные и корпоративные отчеты
                в единую аналитическую экосистему. Прогнозируйте риски и находите скрытые аномалии с
                помощью встроенных моделей ИИ.</p>
            <ExitButton href="/welcomepage" className="hero__btn btn" noBaseStyle={true}>
                Начать аналитику
            </ExitButton>
        </section>
    )
}