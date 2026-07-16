import LandingPageScenaryItem from "../LandingPageScenaryItem"

export function LandingPageScenary() {
    const landingScenaryContent = [
        {
            summary: 'Мониторинг KPI и госконтрактов',
            title: "Руководство видит срывы сроков слишком поздно.",
            text: "«Мадригал»: Платформа подсвечивает риски неисполнения бюджетов за 30 дней до дедлайна. ИИ анализирует темпы работы подрядчиков и сигнализирует об аномалиях."
        },
        {
            summary: "Оптимизация корпоративных расходов",
            title: "Финансовый отдел тратит недели на поиск утечек бюджета.",
            text: "«Мадригал»: ИИ автоматически сканирует транзакции, моментально обнаруживает дублирующиеся платежи, скрытые комиссии и подозрительные цепочки контрагентов."
        },
        {
            summary: "Автоматическая генерация отчётности",
            title: "Аналитики тонут в рутине, собирая презентации вручную.",
            text: "«Мадригал»: Интеллектуальный ассистент сам формулирует текстовые выводы по графикам и выгружает готовые аналитические записки по ГОСТу в один клик."
        }
    ]

    return (
        <section className='scenary'>
            <h2 className="scenary__title">Сценарии применения</h2>
            <ul className="scenary__list">
                <div className="scenary__list-head">

                </div>
                {landingScenaryContent.map((obj) => (
                    <li key={obj.summary} className="scenary__item">
                        <LandingPageScenaryItem
                            summary={obj.summary}
                            title={obj.title}
                            text={obj.text}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}