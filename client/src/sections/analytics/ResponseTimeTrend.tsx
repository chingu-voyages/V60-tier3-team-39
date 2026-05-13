import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

interface TrendData {
  week: string
  days: number
}

interface ResponseTimeTrendProps {
  data: TrendData[]
}

const ResponseTimeTrend = ({ data }: ResponseTimeTrendProps) => {
  return (
    <div className="bg-background rounded-xl p-5 shadow-sm h-full flex flex-col border border-muted/10">
      <p className="text-lg font-semibold font-heading mb-0.5">Response time trend</p>
      <p className="text-sm text-muted">Average days to first reply</p>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 10, right: 10, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="var(--color-brand-secondary" stopOpacity={0.5} />
                <stop offset="70%" stopColor="var(--color-brand-secondary" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fill: 'var(--color-muted)', fontWeight: 'bold' }}
              padding={{ left: 24, right: 24 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
              formatter={(value) => [`${value}d`, 'Avg. Response']}
            />
            <Area
              type="monotone"
              dataKey="days"
              stroke="var(--color-brand-secondary"
              strokeWidth={2.5}
              fill="url(#trendGradient)"
              dot={false}
              activeDot={{ r: 5, fill: 'var(--color-brand-secondary' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ResponseTimeTrend
