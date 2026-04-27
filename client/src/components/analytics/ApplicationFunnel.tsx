interface FunnelStage {
  stage: string
  count: number
  percentage: number
}

interface ApplicationFunnelProps {
  data: FunnelStage[]
}

const STAGE_COLORS: Record<string, string> = {
  Applied: '#3A30A5',
  Responded: '#F59E0B',
  Interview: '#1E40AF',
  Offer: '#00BF63',
}

const ApplicationFunnel = ({ data }: ApplicationFunnelProps) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm h-full flex flex-col">
      <p className="font-semibold text-gray-800 mb-4">Applications Funnel</p>
      <div className="flex flex-col justify-evenly flex-1">
        {data.map((item) => {
          const color = STAGE_COLORS[item.stage] ?? '#9ca3af'
          return (
            <div key={item.stage} className="flex items-center gap-3">
              <span className="w-22 text-sm text-gray-600 shrink-0">{item.stage}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
                <div
                  className="h-6 rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%`, backgroundColor: color }}
                />
              </div>
              <span className="w-6 text-sm font-semibold text-gray-700 text-right shrink-0">{item.count}</span>
              <span className="w-10 text-sm text-gray-400 text-right shrink-0">{item.percentage}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ApplicationFunnel
