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
    <div className="bg-card rounded-xl p-6 shadow-sm border border-muted/10">
      <p className="text-lg font-semibold font-heading mb-0.5">Application per week</p>
      <p className="text-sm text-muted">Last 6 weeks</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barCategoryGap="15%" margin={{ bottom: 0, left: 0, right: 0, top: 0 }}>
          <XAxis
            dataKey="week"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: 'var(--color-muted)', fontWeight: 'bold' }}
            tickMargin={12}
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
                fill={entry.week === highlightWeek ? 'var(--color-brand-secondary)' : 'var(--color-foreground)'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeeklyApplications
