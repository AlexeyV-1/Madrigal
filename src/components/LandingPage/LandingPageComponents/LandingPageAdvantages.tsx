import { Icon } from "@/components/Common/Icon"

export function LandingPageAdvantages() {
    return (
        <section className="advantages">
            <h2 className="advantages__title">Преимущества решения</h2>
            <div className="advantages__card">
                <div className="advantages__card-head">
                    <div className="advantages__card-icon-wrapper">
                        <Icon role="pie" aria-label='Тематическое изображение' className="advantages__card-icon" />
                    </div>
                    <div className="advantages__card-title">Единое окно данных</div>
                </div>
                <p className="advantages__card-text">Больше никакого хаоса. Платформа автоматически
                    сводит отчеты из разрозненных SQL-баз, ERP-систем и Excel-таблиц в один чистый экран.</p>
            </div>
            {/* Card 2 */}
            <div className="advantages__card">
                <div className="advantages__card-head">
                    <div className="advantages__card-icon-wrapper">
                        <Icon role="time" aria-label='Тематическое изображение' className="advantages__card-icon" />
                    </div>
                    <div className="advantages__card-title">ИИ-аналитика без задержек</div>
                </div>
                <p className="advantages__card-text">Перспективный ИИ-модуль обрабатывает миллионы строк
                    данных за секунды. Он сам находит скрытые закономерности, которые человек упускает при
                    ручном анализе.</p>
            </div>
            {/* Card 3 */}
            <div className="advantages__card">
                <div className="advantages__card-head">
                    <div className="advantages__card-icon-wrapper">
                        <Icon role="static" aria-label='Тематическое изображение' className="advantages__card-icon" />
                    </div>
                    <div className="advantages__card-title">Полная независимость</div>
                </div>
                <p className="advantages__card-text">Безопасность государственного уровня. Платформа проектируется
                    под требования импортозамещения и может работать в закрытом контуре компании без отправки
                    данных во внешние облака.</p>
            </div>
            {/* Card 4 */}
            <div className="advantages__card">
                <div className="advantages__card-head">
                    <div className="advantages__card-icon-wrapper">
                        <Icon role="lock" aria-label='Тематическое изображение' className="advantages__card-icon" />
                    </div>
                    <div className="advantages__card-title">Быстрый старт и валидация ТЗ</div>
                </div>
                <p className="advantages__card-text">Frontend-прототип позволяет оценить эргономику,
                    согласовать будущие сценарии и утвердить ТЗ с руководством без затрат на дорогостоящую
                    backend-разработку.</p>
            </div>
        </section >
    )
}