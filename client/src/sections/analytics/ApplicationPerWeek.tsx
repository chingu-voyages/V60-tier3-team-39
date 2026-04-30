import { BarChart, Bar, XAxis, Cell, ResponsiveContainer, Tooltip } from 'recharts'

interface WeeklyData {
  week: string
  count: number
}

interface WeeklyApplicationsProps {
  data: WeeklyData[]
  highlightWeek?: string
}

const WeeklyApplications = ({ data, highlightWeek = 'Week 4' }: WeeklyApplicationsProps) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="font-semibold text-gray-800 mb-0.5">Application per week</p>
      <p className="text-xs text-gray-400 mb-4">Last 6 weeks</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap="15%">
          <XAxis
            dataKey="week"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#9ca3af' }}
          />
          <Tooltip
            cursor={false}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
            formatter={(value) => [value, 'Applications']}
          />
          <Bar dataKey="count" radius={[4, 4, 0, 0]}>
            {data.map((entry) => (
              <Cell
                key={entry.week}
                fill={entry.week === highlightWeek ? '#0D3E3B' : '#C6E3E1'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeeklyApplications
