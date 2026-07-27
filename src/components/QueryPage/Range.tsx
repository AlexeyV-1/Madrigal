'use client';

interface RangeProps {
    value: number;
    min?: number;
    max?: number;
    onChange: (v: number) => void;
}

export const CustomRange = ({
    value,
    min = 0,
    max = 100,
    onChange,
}: RangeProps) => {
    const percent = ((value - min) / (max - min)) * 100;

    return (
        <div className="range-wrapper">
            <div className="range-track-empty" />
            <div
                className="range-track-fill"
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
            <div className="range-thumb" />
        </div>
    );
};