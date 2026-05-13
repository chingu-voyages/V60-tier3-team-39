interface FunnelStage {
  stage: string
  count: number
  percentage: number
}

interface ApplicationFunnelProps {
  data: FunnelStage[]
}

const STAGE_COLORS: Record<string, string> = {
  Applied: 'var(--color-applied)',
  Responded: 'var(--color-inprog)',
  Interview: 'var(--color-interv)',
  Offer: 'var(--color-brand)',
}

const ApplicationFunnel = ({ data }: ApplicationFunnelProps) => {
  return (
    <div className="bg-background rounded-xl p-6 shadow-sm h-full flex flex-col border border-muted/10">
      <p className="text-lg font-semibold font-heading mb-0.5">Applications Funnel</p>
      <div className="flex flex-col justify-evenly flex-1">
        {data.map((item) => {
          const color = STAGE_COLORS[item.stage] ?? '#9ca3af'
          return (
            <div key={item.stage} className="flex items-center gap-4">
              <span className="w-24 text-muted shrink-0">{item.stage}</span>
              <div className="flex-1 bg-muted/10 rounded-full h-6 overflow-hidden">
                <div
                  className="h-6 rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%`, backgroundColor: color }}
                />
              </div>
              <span className="w-6 font-semibold text-right shrink-0" style={{ color }}>{item.count}</span>
              <span className="w-10 text-muted text-right shrink-0">{item.percentage}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ApplicationFunnel
