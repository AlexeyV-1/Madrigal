import RangeYear from './RangeYears';
import RangeProcent from './RangeProcent';
import { CustomRange } from './Range';
import { useState } from 'react';

export const YearsRanges = () => {
    const [sliderValue, setSliderValue] = useState<number>(50);

    return (
        <>
            <h3 className="statistics__title">Статистика</h3>
            <div className="statistics__range-wrapper">
                <CustomRange value={45} min={0} max={100} onChange={setSliderValue} />
                <CustomRange value={61} min={0} max={100} onChange={setSliderValue} />
                <CustomRange value={46} min={0} max={100} onChange={setSliderValue} />
                <CustomRange value={26} min={0} max={100} onChange={setSliderValue} />
                <CustomRange value={50} min={0} max={100} onChange={setSliderValue} />
                <CustomRange value={80} min={0} max={100} onChange={setSliderValue} />
                <CustomRange value={90} min={0} max={100} onChange={setSliderValue} />
                <RangeProcent years={['45%', '61%', '46%', '26%', '50%', '80%', '90%']} />
                <RangeYear years={['2020', '2021', '2022', '2023', '2024', '2025', '2026']} />
            </div>
        </>
    )
}