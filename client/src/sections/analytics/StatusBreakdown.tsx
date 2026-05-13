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
  { key: 'applied', label: 'Applied', color: 'var(--color-applied)' },
  { key: 'offer', label: 'Offer', color: 'var(--color-brand)' },
  { key: 'interview', label: 'Interview', color: 'var(--color-interv)' },
  { key: 'rejected', label: 'Rejected', color: 'var(--color-reject)' },
] as const

const StatusBreakdown = ({ data }: StatusBreakdownProps) => {
  const chartData = STATUS_CONFIG.map((s) => ({
    name: s.label,
    value: data[s.key],
    color: s.color,
  }))

  return (
    <div className="bg-background rounded-xl p-5 shadow-sm h-full w-full flex flex-col border border-muted/10">
      <p className="text-lg font-semibold font-heading mb-0.5">Status Breakdown</p>
      <p className="text-sm text-muted mb-6">Current pipeline overview</p>
      <div className="grid grid-cols-2">
        <div className="min-w-0 ml-10" style={{ flex: '1 1 140px', minHeight: 160 }}>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="65%"
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
        <div className="grid gap-4 p-6">
          {STATUS_CONFIG.map((s) => (
            <div key={s.key} className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-sm inline-block shrink-0" style={{ backgroundColor: s.color }} />
              <span className="font-heading text-muted w-20">{s.label}</span>
              <span className="text-xl font-bold ml-10">{data[s.key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatusBreakdown
