import { Icon } from "../Common/Icon"
import WelcomeBtn from "./WelcomeBtn"

export default function DashboardTable() {
    return (

        <section className="table">
            <div className="table__panel">
                <h2 className="table__title">Создание таблицы</h2>
                <button
                    type="button"
                    className="table__close-btn"
                    aria-label="Закрыть окно"
                >
                    <Icon className="table__close-icon" role="cross" />
                </button>

                <form className="table__settings">

                    <div className="table__row">
                        <label className="table__label" htmlFor="columns">Колонки</label>
                        <input
                            type="number"
                            id="columns"
                            name="columns"
                            className="table__input"
                        />
                    </div>

                    <div className="table__row">
                        <label className="table__label" htmlFor="rows">Строки</label>
                        <input
                            type="number"
                            id="rows"
                            name="rows"
                            className="table__input"
                        />
                    </div>

                </form>

                <button className="table__action-btn" type="button">
                    Создать таблицу
                </button>
            </div>
            <div className="table__templates">
                <h2 className="table__templates-title">Готовые шаблоны</h2>
                <WelcomeBtn text="Мониторинг KPI" />
                <WelcomeBtn text="Бюджет ведомства" />
                <WelcomeBtn text="Закупки и тендеры" />
            </div>
        </section>
    )
}