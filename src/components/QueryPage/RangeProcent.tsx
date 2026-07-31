interface RangeProcentProps {
    years: string[];
}

export default function RangeYear({ years }: RangeProcentProps) {
    return (
        <div className="statistics__range-procents">
            {years.map((year, index) => (
                <span
                    key={`year-${index}`}
                    className="statistics__range-procent"
                >
                    {year}
                </span>
            ))}
        </div>
    );
}