interface StatisticsListProps {
    text: string;
}

export default function StatisticsList({
    text,
}: StatisticsListProps) {
    return (
        <li
            className="statistics__list-element"
        >
            {text}
        </li>
    )

}
