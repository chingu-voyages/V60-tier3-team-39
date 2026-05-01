import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface StatusBreakdownData {
  applied: number
  interview: number
  offer: number
  rejected: number
}

interface StatusBreakdownProps {
  data: StatusBreakdownData
}

const STATUS_CONFIG = [
  { key: 'applied', label: 'Applied', color: '#3A30A5' },
  { key: 'interview', label: 'Interview', color: '#1E40AF' },
  { key: 'offer', label: 'Offer', color: '#00BF63' },
  { key: 'rejected', label: 'Rejected', color: '#941919' },
] as const

const StatusBreakdown = ({ data }: StatusBreakdownProps) => {
  const chartData = STATUS_CONFIG.map((s) => ({
    name: s.label,
    value: data[s.key],
    color: s.color,
  }))

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm h-full w-full flex flex-col">
      <p className="font-semibold text-gray-800 mb-0.5">Status Breakdown</p>
      <p className="text-xs text-gray-400 mb-4">Current pipeline overview</p>
      <div className="flex items-center flex-1 min-w-0 gap-4">
        <div className="min-w-0 ml-10" style={{ flex: '1 1 140px', minHeight: 160 }}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="58%"
                outerRadius="95%"
                dataKey="value"
                strokeWidth={0}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col gap-4 ml-6 px-32">
          {STATUS_CONFIG.map((s) => (
            <div key={s.key} className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-sm inline-block shrink-0" style={{ backgroundColor: s.color }} />
              <span className="text-sm text-gray-600 w-20">{s.label}</span>
              <span className="text-sm font-bold text-gray-800">{data[s.key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatusBreakdown
