'use client';

import { useState } from 'react';
import DashboardWelcome from './DashboardWelcome';
import DashboardActions from './DashboardActions';
// import DashboardTable from "./DashboardTable";
import DashboardChart from '../Common/DashboardChart';

export function DashboardMain() {
    const [isChartVisible, setIsChartVisible] = useState(false);
    const [animated, setAnimated] = useState(false);

    const toggleChartTrue = () => setIsChartVisible(true);
    const toggleChartFalse = () => setIsChartVisible(false);
    const toggleAnimation = () => setAnimated((prev) => !prev);

    return (
        <div className="container">
            <div className={animated ? "dashboard-transition-wrapper dashboard-transition-wrapper--animated" : "dashboard-transition-wrapper"}>
                <DashboardWelcome
                    isVisible={!isChartVisible}
                />
                <DashboardChart
                    isVisible={isChartVisible}
                    deleteFileFn={toggleChartFalse}
                />
                <DashboardActions 
                    onToggleChart={toggleChartTrue} 
                    onTogglePageAnimation={toggleAnimation}
                    isChart={isChartVisible}
                />
            </div>
        </div>
    );
}
