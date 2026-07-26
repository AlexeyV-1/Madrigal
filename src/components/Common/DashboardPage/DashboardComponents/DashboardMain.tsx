'use client';

import { useState } from 'react';
import DashboardWelcome from './DashboardWelcome';
import DashboardActions from './DashboardActions';
import DashboardChart from '../DashboardChart/DashboardsChart';

export function DashboardMain() {
    const [isChartVisible, setIsChartVisible] = useState(false);

    const toggleChart = () => setIsChartVisible((prev) => !prev);

    return (
        <div className="container">
            {isChartVisible ? null : (
                <DashboardWelcome />
            )}
            {isChartVisible && <DashboardChart />}
            <DashboardActions onToggleChart={toggleChart} />
            {/* <DashboardTable /> Временно отключено. Остается доделать функционал 
          скрытия/показа таблицы по нажатию на кнопку. */}
        </div>
    );
}