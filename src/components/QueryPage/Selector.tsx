'use client';

import { useEffect, useRef, useState } from 'react';
import Choices from 'choices.js';
import "choices.js/public/assets/styles/choices.css";

interface SelectorProps {
    onParamsChange?: (params: { period: string; count: string; region: string }) => void;
}

export default function Selector({ onParamsChange }: SelectorProps) {
    const [period, setPeriod] = useState('Период');
    const [count, setCount] = useState('Цена');
    const [region, setRegion] = useState('Регион');

    const periodRef = useRef<HTMLSelectElement | null>(null);
    const countRef = useRef<HTMLSelectElement | null>(null);
    const regionRef = useRef<HTMLSelectElement | null>(null);

    useEffect(() => {
        const initChoices = (
            ref: React.RefObject<HTMLSelectElement | null>,
            setValue: (v: string) => void
        ) => {
            const element = ref.current;
            if (!element) return;

            const choices = new Choices(element, {
                silent: false,
                removeItemButton: false,
                searchEnabled: false,
                allowHTML: false,
                placeholder: true,
                itemSelectText: ''
            });

            const handleChange = () => {
                setValue(element.value);
            };

            element.addEventListener('change', handleChange);

            return () => {
                element.removeEventListener('change', handleChange);
                choices.destroy();
            };
        };

        const cleanupPeriod = initChoices(periodRef, setPeriod);
        const cleanupCount = initChoices(countRef, setCount);
        const cleanupRegion = initChoices(regionRef, setRegion);

        return () => {
            cleanupPeriod?.();
            cleanupCount?.();
            cleanupRegion?.();
        };
    }, []);

    useEffect(() => {
        if (onParamsChange) {
            onParamsChange({ period, count, region });
        }
    }, [period, count, region, onParamsChange]);

    return (
        <div className='statistics__filter'>
            <select ref={periodRef} defaultValue="">
                <option value="" disabled hidden>Период</option>
                <option value="all">Все</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
            <select ref={countRef} defaultValue="">
                <option value="" disabled hidden>Сумма</option>
                <option value="all">Все</option>
                <option value="1m">От 1 млн</option>
                <option value="5m">От 5 млн</option>
                <option value="10m">От 10 млн</option>
                <option value="15m">От 15 млн</option>
                <option value="20m">От 20 млн</option>
            </select>
            <select ref={regionRef} defaultValue="">
                <option value="" disabled hidden>Регион</option>
                <option value="all">Все</option>
                <option value="center">Центральный</option>
                <option value="northwestern">Северо‑Западный</option>
                <option value="volga">Приволжский</option>
                <option value="southern">Южный</option>
                <option value="ural">Уральский</option>
            </select>
        </div>
    );
}
