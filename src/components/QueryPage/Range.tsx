'use client';

interface RangeProps {
    value: number;
    min?: number;
    max?: number;
    onChange: (v: number) => void;
    active: boolean;
    changeYear: () => void
}

export const CustomRange = ({
    value,
    min = 0,
    max = 100,
    onChange,
    active, 
    changeYear
}: RangeProps) => {
    const percent = ((value - min) / (max - min)) * 100;

    return (
        <button 
            className="range-btn"
            type="button"
            onClick={changeYear}
        >
            <div className="range-track-empty" />
            <div
                className={active ? "range-track-fill range-track-fill--active" : "range-track-fill"}
                style={{ width: `${percent}%` }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="range-input"
                aria-label="Регулировка стоимости"
            />
            <div className={active ? "range-thumb range-thumb--active" : "range-thumb"} />
        </button>
    );
};