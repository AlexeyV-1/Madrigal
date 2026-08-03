import QueryStatistics from "./QueryStatistics";

interface QueryMainProps {
    animationFn: () => void,
    monthlyChart: boolean
}

export function QueryMain({ animationFn, monthlyChart }: QueryMainProps) {
    return (
        <div className="container">
            <QueryStatistics animationFn={animationFn} monthlyChart={monthlyChart}/>
        </div >
    )
}