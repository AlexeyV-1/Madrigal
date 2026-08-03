import QueryStatistics from "./QueryStatistics";

interface QueryMainProps {
    animationFn: () => void,
    monthlyChart: boolean,
    animationPageFn: () => void
}

export function QueryMain({ animationFn, monthlyChart, animationPageFn }: QueryMainProps) {
    return (
        <div className="container">
            <QueryStatistics animationFn={animationFn} monthlyChart={monthlyChart} animationPage={animationPageFn} />
        </div >
    )
}