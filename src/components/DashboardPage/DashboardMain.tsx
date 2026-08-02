'use client';

import { useState } from 'react';
import DashboardWelcome from './DashboardWelcome';
import DashboardActions from './DashboardActions';
// import DashboardTable from "./DashboardTable";
import DashboardChart from '../Common/DashboardPage/DashboardChart/DashboardChart';

export function DashboardMain() {
    const [isChartVisible, setIsChartVisible] = useState(false);
    const [animated, setAnimated] = useState(false);

    const toggleChart = () => setIsChartVisible((prev) => !prev);
    const toggleAnimation = () => setAnimated((prev) => !prev);

    return (
        <div className="container">
            <div className={animated ? "dashboard-transition-wrapper dashboard-transition-wrapper--animated" : "dashboard-transition-wrapper"}>
                <DashboardWelcome
                    onToggleChart={toggleChart}
                    isVisible={!isChartVisible}
                />
                <DashboardChart
                    isVisible={isChartVisible}
                />
                <DashboardActions 
                    onToggleChart={toggleChart} 
                    onTogglePageAnimation={toggleAnimation}
                />
            </div>
        </div>
    );
}
