import { Icon } from "../Common/Icon";
import { SearchBar } from "../DashboardPage/SearchBar";
import Selector from "./Selector";

export default function QueryStatistics() {
    return (
        <section className="statistics">
            <p className="statistics__text">Сделай мне график по самым крупным поставщикам и распиши, что там происходит</p>

            <div className="statistics__filter">
                <form>
                    <Selector />
                    <div className="statistics__analytics">
                    </div>
                </form>
            </div>
            <h3 className="statistics__title">Статистика</h3>
            {/* range input custom */}
            <div className="statistics__download-btn">
                <Icon className="download-icon" role="download" />
                Скачать
            </div>
            <ul className="statistics__list">
                Аналитическая записка по файлу «Реестр_Контрактов_2026»
                {/* li - компоненты */}
                <li className="statistics__list-element">Ключевой инсайт: Общая сумма контрактов
                    за анализируемый период составила 1.2 млрд рублей. Пик расходов пришелся на март 2026 года.</li>
                <li className="statistics__list-element">Концентрация рисков: На долю топ-3
                    поставщиков приходится 68% всех бюджетных средств. Главный исполнитель — АО «ТехноСтрой» (412 млн руб.).</li>
                <li className="statistics__list-element">Аномалия: Зафиксирован резкий рост
                    мелких закупок у одного и того же поставщика в конце квартала (возможный признак дробления контрактов для обхода торгов).</li>
            </ul>

            <div className="statistics__recommendation">
                <h3 className="statistics__recommendation-title">Рекомендации</h3>
                <p className="statistics__recommendation-text">Рекомендуется провести
                    дополнительный аудит договоров с ООО «Альфа» на предмет завышения рыночной стоимости.</p>
            </div>
            {/* Сделать в компонент */}
            <div className="statistics__copy-wrapper">
                <div className="statistics__copy-icons">
                    <Icon className="statistics__copy-icon" role="copy-1" />
                    <Icon className="statistics__copy-icon" role="copy-2" />
                </div>
                <div className="statistics__copy-background">
                    <Icon className="statistics__copy-arrow" role="arrow" />
                </div>
            </div>
            <SearchBar />
        </section>
    )
}