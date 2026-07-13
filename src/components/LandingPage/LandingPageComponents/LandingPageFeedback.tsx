import { ExitButton } from "@/components/WelcomePage/ExitButton"

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
                                    aria-labelledby="agreement-text"
                                />
                                <span className="feedback__card-checkbox-box"></span>
                                <span id="agreement-text" className="feedback__card-checkbox-text">
                                    Нажимая кнопку, вы соглашаетесь с{' '}
                                    <a href="#" className="feedback__card-link">
                                        Политикой обработки персональных данных
                                    </a>
                                </span>
                            </label>
                        </div>
                        <ExitButton href="/welcomepage" className="feedback__card-btn btn" noBaseStyle={true}>
                            Отправить заявку
                        </ExitButton>
                    </div>
                </div>
            </div>
        </section>
    )
}