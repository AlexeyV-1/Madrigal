'use client';

import dynamic from 'next/dynamic';
import { Icon } from '../Common/Icon';
import { SearchBar } from '../DashboardPage/SearchBar';
import { DelayedBlock } from './DelayedBlock';

import CopyBtn from './CopyBtn';
import { YearsRanges } from './YearsRanges';
import { StatisticsNotes } from './StatisticsNotes';

const RevenueChart = dynamic(
    () => import('./RevenueChart').then((mod) => mod.RevenueChart),
    { ssr: false }
);

const Selector = dynamic(
    () => import('./Selector'), 
    { ssr: false }
);

interface QueryStatisticsProps {
    animationFn: () => void,
    monthlyChart: boolean,
    setMonthlyChart?: () => void,
    animationPage: () => void
}

export default function QueryStatistics({ animationFn, monthlyChart, setMonthlyChart, animationPage }: QueryStatisticsProps) {
    return (
        <section className="statistics">
            <DelayedBlock delayMs={0}>
                <p className="statistics__text">
                    Сделай мне график по самым крупным поставщикам и распиши, что там происходит
                </p>
                <div className="statistics__filter">
                    <form>
                        <Selector />
                        <div className="statistics__analytics"></div>
                    </form>
                </div>
            </DelayedBlock>

            <DelayedBlock delayMs={333}>
                {monthlyChart ?
                    <RevenueChart
                        data={[
                            { month: '01', value: 70 },
                            { month: '02', value: 92 },
                            { month: '03', value: 130 },
                            { month: '04', value: 80 },
                            { month: '05', value: 92 },
                            { month: '06', value: 160 },
                            { month: '07', value: 192 },
                            { month: '08', value: 211 },
                            { month: '09', value: 320 },
                            { month: '10', value: 288 },
                            { month: '11', value: 313 },
                            { month: '12', value: 360 },
                        ]}
                    /> : <YearsRanges />
                }
            </DelayedBlock>

            <DelayedBlock delayMs={666}>
                <div className="statistics__btn-wrapper">
                    {!monthlyChart &&
                        <button
                            className="statistics__stat-btn"
                            onClick={animationFn}
                        >
                            Получить статистику
                        </button>
                    }
                    <button className="statistics__download-btn">
                        <Icon className="download-icon" role="download" />
                        Скачать
                    </button>
                </div>
            </DelayedBlock>

            <DelayedBlock delayMs={999}>
                <StatisticsNotes page={monthlyChart ? 'second' : 'first'} />
            </DelayedBlock>

            <DelayedBlock delayMs={1332}>
                <div className="statistics__recommendation">
                    <h3 className="statistics__recommendation-title">Рекомендации</h3>
                    <p className="statistics__recommendation-text">
                        Рекомендуется провести дополнительный аудит договоров с ООО «Альфа» на предмет завышения рыночной стоимости.
                    </p>
                </div>
            </DelayedBlock>

            <DelayedBlock delayMs={1665}>
                <CopyBtn />
                <SearchBar onTogglePageAnimation={animationPage}/>
            </DelayedBlock>
        </section>
    );
}