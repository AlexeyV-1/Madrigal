interface RangeYearsProps {
    years: string[];
}

export default function RangeYear({ years }: RangeYearsProps) {
    return (
        <div className="statistics__range-years">
            {years.map((year, index) => (
                <span
                    key={`year-${index}`}
                    className="statistics__range-year"
                >
                    {year}
                </span>
            ))}
        </div>
    );
}