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
    <div className="bg-white rounded-xl p-5 shadow-sm h-full flex flex-col">
      <p className="font-semibold text-gray-800 mb-0.5">Response time trend</p>
      <p className="text-xs text-gray-400 mb-4">Average days to first reply</p>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 10, right: 10, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#21A59B" stopOpacity={0.5} />
                <stop offset="70%" stopColor="#21A59B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
              formatter={(value) => [`${value}d`, 'Avg. Response']}
            />
            <Area
              type="monotone"
              dataKey="days"
              stroke="#21A59B"
              strokeWidth={2.5}
              fill="url(#trendGradient)"
              dot={false}
              activeDot={{ r: 5, fill: '#21A59B' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ResponseTimeTrend
