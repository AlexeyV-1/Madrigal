import LandingPageAdvantagesItem from '../LandingPageAdvantagesItem'

export default function LandingPageAdvantages() {
    const advantagesContent = [
        {
            id: 1,
            title: 'Единое окно данных',
            text: 'Больше никакого хаоса. Платформа автоматически сводит отчёты из разрозненных SQL‑баз, ERP‑систем и Excel‑таблиц в один чистый экран.',
            iconRole: 'pie' as const,
        },
        {
            id: 2,
            title: 'ИИ-аналитика без задержек',
            text: 'Перспективный ИИ-модуль обрабатывает миллионы строк данных за секунды. Он сам находит скрытые закономерности, которые человек упускает при ручном анализе.',
            iconRole: 'time' as const,
        },
        {
            id: 3,
            title: 'Полная независимость',
            text: 'Безопасность государственного уровня. Платформа проектируется под требования импортозамещения и может работать в закрытом контуре компании без отправки данных во внешние облака.',
            iconRole: 'static' as const,
        },
        {
            id: 4,
            title: 'Быстрый старт и валидация ТЗ',
            text: 'Frontend-прототип позволяет оценить эргономику, согласовать будущие сценарии и утвердить ТЗ с руководством без затрат на дорогостоящую backend-разработку.',
            iconRole: 'lock' as const,
        },
    ] as const;

    return (
        <section className="advantages">
            <h2 className="advantages__title">Преимущества решения</h2>
            <div className="advantages__list">
                {advantagesContent.map((item) => (
                    <LandingPageAdvantagesItem
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        iconRole={item.iconRole}
                    />
                ))}
            </div>
        </section>
    );
}