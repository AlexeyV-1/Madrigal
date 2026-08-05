'use client';

import dynamic from 'next/dynamic';
import { Icon } from '../Common/Icon';
import { SearchBar } from '../DashboardPage/SearchBar';
import { DelayedBlock } from './DelayedBlock';
import { useCallback, useState } from 'react';
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

export type Year = '' | '2020' | '2021' | '2022' | '2023' | '2024' | '2025' | '2026';

const VALID_YEARS: Year[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];

function isYear(value: string): value is Year {
    return (VALID_YEARS as string[]).includes(value);
}

interface QueryStatisticsProps {
    animationFn: () => void,
    monthlyChart: boolean,
    setMonthlyChart?: () => void,
    animationPage: () => void
}

export default function QueryStatistics({ animationFn, monthlyChart, setMonthlyChart, animationPage }: QueryStatisticsProps) {
    const [hasFile, setHasFile] = useState(false)
    const [year, setYear] = useState<Year>('')

    const handleYear = (year: Year) => {
        setYear(year)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (!selectedFiles || selectedFiles.length === 0) {
            return
        }
        setHasFile(true)
    }

    const handleSelectorChange = useCallback((params: { period: string; count: string; region: string }) => {
        setYear(isYear(params.period) ? params.period : '');
    }, []);

    return (
        <section className="statistics">
            <div className="statistics__wrapper">
                <p className="statistics__text">
                    Сделай мне график по самым крупным поставщикам и распиши, что там происходит
                </p>
                <DelayedBlock delayMs={0} className="statistics__filter-block">
                    <Selector onParamsChange={handleSelectorChange} />
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
                        /> : <YearsRanges year={year} yearFn={handleYear} />
                    }
                </DelayedBlock>

                <DelayedBlock delayMs={666} className='statistics__block--third'>
                    {!monthlyChart &&
                        <button
                            className={year !== '' ? "statistics__stat-btn statistics__stat-btn--active" : "statistics__stat-btn"}
                            onClick={animationFn}
                        >
                            Получить статистику
                        </button>
                    }
                    <a
                        className="statistics__download-btn"
                        href="/IMG/Chart.png"
                        download
                    >
                        <Icon className="download-icon" role="download" />
                        Скачать
                    </a>

                </DelayedBlock>
            </div>
            <div className="statistics__wrapper-down">
                <p className="statistics__text-adaptive">
                    Сделай мне график по самым крупным поставщикам и распиши, что там происходит
                </p>
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
                   {// <CopyBtn handleFileChange={(e) => handleFileChange(e)} /> 
                   }
                </DelayedBlock>
            </div>
            { /*
            <div className="attachment__wrapper">
                <DelayedBlock delayMs={1665} className='statistics__block--sixth'>
                    <div className="wrapper">
                        { /*
                        <label htmlFor="attachment-files" className="welcome__attachment-btn">
                            <Icon className="welcome__attachment-icon welcome__icon" role="attachment" />
                        </label> }
                        <label htmlFor="attachment-files" className="welcome__attachment-btn">
                            <Icon className="welcome__attachment-icon welcome__icon" role="add" />
                        </label>
                    </div>
                    <SearchBar
                        onTogglePageAnimation={animationPage}
                        isChart={hasFile}
                    />
                </DelayedBlock>
            </div>
                */ }
            <DelayedBlock delayMs={1665} className='statistics__block--sixth'>
                <CopyBtn handleFileChange={(e) => handleFileChange(e)} />
                <SearchBar
                    onTogglePageAnimation={animationPage}
                    isChart={hasFile}
                />
            </DelayedBlock>
        </section>
    );
}