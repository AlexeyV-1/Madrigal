'use client';

import { Icon } from "../Common/Icon";
import { SearchBar } from "../DashboardPage/SearchBar";
import { CustomRange } from "./Range";
import Selector from "./Selector";
import { useState } from 'react';
import StatisticsList from "./StatisticsList";
import CopyBtn from "./CopyBtn";
import RangeYear from "./RangeYears";
import RangeProcent from './RangeProcent'


export default function QueryStatistics() {

    const [sliderValue, setSliderValue] = useState<number>(50);
    return (
        <section className="statistics">
            <p className="statistics__text">Сделай мне график по самым крупным поставщикам и
                распиши, что там происходит</p>
            <div className="statistics__filter">
                <form>
                    <Selector />
                    <div className="statistics__analytics">
                    </div>
                </form>
            </div>
            <h3 className="statistics__title">Статистика</h3>
            <div className="statistics__range-wrapper">
                <CustomRange
                    value={45}
                    min={0}
                    max={100}
                    onChange={setSliderValue}
                />
                <CustomRange
                    value={61}
                    min={0}
                    max={100}
                    onChange={setSliderValue}
                />
                <CustomRange
                    value={46}
                    min={0}
                    max={100}
                    onChange={setSliderValue}
                />
                <CustomRange
                    value={26}
                    min={0}
                    max={100}
                    onChange={setSliderValue}
                />
                <CustomRange
                    value={50}
                    min={0}
                    max={100}
                    onChange={setSliderValue}
                />
                <CustomRange
                    value={80}
                    min={0}
                    max={100}
                    onChange={setSliderValue}
                />
                <CustomRange
                    value={90}
                    min={0}
                    max={100}
                    onChange={setSliderValue}
                />
                <RangeProcent years={['45%', '61%', '46%', '26%', '50%', '89%', '95%']} />
                <RangeYear years={['2020', '2021', '2022', '2023', '2024', '2025', '2026']} />
            </div>
            <div className="statistics__download-btn">
                <Icon className="download-icon" role="download" />
                Скачать
            </div>
            <ul className="statistics__list">
                Аналитическая записка по файлу «Реестр_Контрактов_2026»
                <StatisticsList text="Ключевой инсайт: Общая сумма контрактов
                    за анализируемый период составила 1.2 млрд рублей. Пик расходов пришелся на март 2026 года." />
                <StatisticsList text="Концентрация рисков: На долю топ-3
                    поставщиков приходится 68% всех бюджетных средств. Главный исполнитель — АО «ТехноСтрой» (412 млн руб.)." />
                <StatisticsList text="Аномалия: Зафиксирован резкий рост
                    мелких закупок у одного и того же поставщика в конце квартала (возможный признак дробления контрактов для обхода торгов)." />
            </ul>
            <div className="statistics__recommendation">
                <h3 className="statistics__recommendation-title">Рекомендации</h3>
                <p className="statistics__recommendation-text">Рекомендуется провести
                    дополнительный аудит договоров с ООО «Альфа» на предмет завышения рыночной
                    стоимости.</p>
            </div>
            <CopyBtn />
            <SearchBar />
        </section>
    )
}