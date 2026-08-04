import RangeYear from './RangeYears';
import RangeProcent from './RangeProcent';
import { CustomRange } from './Range';
import { useState } from 'react';
import { Year } from './QueryStatistics';

interface YearsRangesProps {
    year: string,
    yearFn: (year: Year) => void
}

export const YearsRanges = ({ year, yearFn }: YearsRangesProps) => {
    const [sliderValue, setSliderValue] = useState<number>(50);

    return (
        <>
            <h3 className="statistics__title">Статистика</h3>
            <div className="statistics__range-wrapper">
                <CustomRange value={45} min={0} max={100} onChange={setSliderValue}
                    active={year == '2020'} changeYear={() => yearFn('2020')}
                />
                <CustomRange value={61} min={0} max={100} onChange={setSliderValue}
                    active={year == '2021'} changeYear={() => yearFn('2021')}
                />
                <CustomRange value={46} min={0} max={100} onChange={setSliderValue}
                    active={year == '2022'} changeYear={() => yearFn('2022')}
                />
                <CustomRange value={26} min={0} max={100} onChange={setSliderValue}
                    active={year == '2023'} changeYear={() => yearFn('2023')}
                />
                <CustomRange value={50} min={0} max={100} onChange={setSliderValue}
                    active={year == '2024'} changeYear={() => yearFn('2024')}
                />
                <CustomRange value={80} min={0} max={100} onChange={setSliderValue}
                    active={year == '2025'} changeYear={() => yearFn('2025')}
                />
                <CustomRange value={90} min={0} max={100} onChange={setSliderValue}
                    active={year == '2026'} changeYear={() => yearFn('2026')}
                />
                <RangeProcent years={['45%', '61%', '46%', '26%', '50%', '80%', '90%']} />
                <RangeYear years={['2020', '2021', '2022', '2023', '2024', '2025', '2026']} />
            </div>
        </>
    )
}