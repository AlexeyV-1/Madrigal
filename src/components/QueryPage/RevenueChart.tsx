'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface RevenueChartProps {
  data: { month: string; value: number }[]
  unitLabel?: string
  color?: string
  gridColor?: string
}

export function RevenueChart({
  data,
  unitLabel = 'млн руб.',
  color = '#EA5932',
  gridColor = 'rgba(255,255,255,0.15)',
}: RevenueChartProps) {
  return (
    <>
    <h3 className="statistics__title">Статистика по месяцам</h3>
    <div className='revenue-chart'>
      <div className='revenue-chart__label'>{unitLabel}</div>
      <ResponsiveContainer width="100%" height={261}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={gridColor} />
          <XAxis
            dataKey="month"
            stroke="none"
            tick={{ fill: color, fontWeight: 600 }}
            axisLine={{ stroke: '#fff' }}
            tickLine={false}
          />
          <YAxis
            stroke="none"
            tick={{ fill: '#fff' }}
            axisLine={false}
            tickLine={false}
            domain={[0, 450]}
            ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400, 450]}
          />
          <Tooltip
            contentStyle={{
              background: '#1a1a1a',
              border: `1px solid ${color}`,
              borderRadius: 8,
            }}
            labelStyle={{ color: '#fff' }}
          />
          <Line
            type="linear"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color, r: 5, strokeWidth: 0 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}