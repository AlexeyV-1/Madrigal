import { Icon } from '../Common/Icon';

export function LandingMain() {
    return (
        <div className="container">
            <section className="hero">
                <span className="hero__description">ИИ-платформа нового поколения</span>
                <h1 className="hero__title">Управляйте будущим на основе данных</h1>
                <p className="hero__text"><b>«Мадригал»</b> собирает разрозненные ведомственные и корпоративные отчеты
                    в единую аналитическую экосистему. Прогнозируйте риски и находите скрытые аномалии с
                    помощью встроенных моделей ИИ.</p>
                <button className="hero__btn btn" type="button">Начать аналитику</button>
            </section>
            {/* Card 1 */}
            <section className="advantages">
                <h2 className="advantages__title">Преимущества решения</h2>
                <div className="advantages__card">
                    <div className="advantages__card-head">
                        <div className="advantages__card-icon-wrapper">
                            <Icon role="pie" className="advantages__card-icon" />
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
                            <Icon role="time" className="advantages__card-icon" />
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
                            <Icon role="static" className="advantages__card-icon" />
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
                            <Icon role="lock" className="advantages__card-icon" />
                        </div>
                        <div className="advantages__card-title">Быстрый старт и валидация ТЗ</div>
                    </div>
                    <p className="advantages__card-text">Frontend-прототип позволяет оценить эргономику,
                        согласовать будущие сценарии и утвердить ТЗ с руководством без затрат на дорогостоящую
                        backend-разработку.</p>
                </div>
            </section >

            <section className='scenary'>
                <h2 className="scenary__title">Сценарии применения</h2>

                {/* Item 1 */}
                <div className="scenary__item">
                    <p className="scenary__item-text">Мониторинг KPI и госконтрактов</p>
                    <Icon role="arrow" className="scenary__item-symbol" />
                </div>
                {/* Item 2 */}
                <div className="scenary__item">
                    <p className="scenary__item-text">Оптимизация корпоративных расходов</p>
                    <Icon role="arrow" className="scenary__item-symbol" />
                </div>
                {/* Item 3 */}
                <div className="scenary__item">
                    <p className="scenary__item-text">Автоматическая генерация отчетности</p>
                    <Icon role="arrow" className="scenary__item-symbol" />
                </div>
            </section>

            <section className='feedback'>
                <h2 className='feedback__title'>Начните управлять данными на новом уровне</h2>
                <p className="feedback__text">Протестируйте интерактивные сценарии ИИ-модуля на фиктивных данных прямо
                    сейчас.</p>
                <button className="feedback__btn btn" type="button">Начать аналитику</button>

                <div className="feedback__card">
                    <div className="feedback__wrapper">
                        <h2 className="feedback__card-title">Обсудить проект</h2>
                        <p className="feedback__card-text">Оставьте контакты, и мы адаптируем frontend-прототип
                            платформы под специфику ваших ведомственных или корпоративных данных.</p>
                        <div className="feedback__card-form">
                            <input
                                type="text"
                                placeholder='Имя и фамилия'
                                className="feedback__card-input"
                                required
                            />
                            <input
                                type="text"
                                placeholder='Название организации'
                                className="feedback__card-input"
                                required
                            />
                            <input
                                type="number"
                                placeholder='Телефон'
                                className="feedback__card-input"
                                required
                            />
                            <div className="feedback__card-agreement">
                                <label className="feedback__card-label">
                                    <input
                                        type="checkbox"
                                        className="feedback__card-checkbox"
                                        required
                                    />
                                    <span className="feedback__card-checkbox-visual"></span>
                                </label>
                                <div className="feedback__card-text-wrapper">
                                    Нажимая кнопку, вы соглашаетесь с{' '}
                                    <a href="/privacy" className="feedback__card-link">
                                        Политикой обработки персональных данных
                                    </a>
                                </div>
                            </div>
                            <button className="feedback__card-btn btn" type='button'>Отправить заявку</button>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}