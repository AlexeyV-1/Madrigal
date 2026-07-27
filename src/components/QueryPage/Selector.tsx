'use client';

import { useState } from 'react';

interface SelectorProps {
    onParamsChange?: (params: { period: string; count: string; region: string }) => void;
}

export default function Selector({ onParamsChange }: SelectorProps) {
    const [period, setPeriod] = useState('');
    const [count, setCount] = useState('');
    const [region, setRegion] = useState('');

    const handleChange = () => {
        if (onParamsChange) {
            onParamsChange({ period, count, region });
        }
    };

    return (
        <div className='filter__wrapper'>
            <div className="filter__group">
                <select
                    className='filter__element'
                    value={period}
                    onChange={(e) => {
                        setPeriod(e.target.value);
                        handleChange();
                    }}
                >
                    <option value="" disabled>Период</option>
                    <option value="all">Все</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
                <br /><br />
            </div>
            <div className="filter">
                <select
                    className='filter__element'
                    value={count}
                    onChange={(e) => {
                        setCount(e.target.value);
                        handleChange();
                    }}
                >
                    <option value="" disabled>Сумма</option>
                    <option value="all">Все</option>
                    <option value="1m">От 1 млн</option>
                    <option value="5m">От 5 млн</option>
                    <option value="10m">От 10 млн</option>
                    <option value="15m">От 15 млн</option>
                    <option value="20m">От 20 млн</option>
                </select>
                <br /><br />
            </div>
            <div className="filter">
                <select
                    className='filter__element'
                    value={region}
                    onChange={(e) => {
                        setRegion(e.target.value);
                        handleChange();
                    }}
                >
                    <option value="" disabled>Регион</option>
                    <option value="all">Все</option>
                    <option value="center">Центральный</option>
                    <option value="northwestern">Северо‑Западный</option>
                    <option value="volga">Приволжский</option>
                    <option value="southern">Южный</option>
                    <option value="ural">Уральский</option>
                </select>
            </div>
        </div>
    );
}