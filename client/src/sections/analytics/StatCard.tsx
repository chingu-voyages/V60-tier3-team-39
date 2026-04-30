interface StatCardProps {
  title: string
  value: string | number
  subtitle: string
  accentColor: string
}

const StatCard = ({ title, value, subtitle, accentColor }: StatCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-5 flex-1 border-t-4 shadow-sm`} style={{ borderTopColor: accentColor }}>
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{title}</p>
      <p className="text-4xl font-bold mb-1" style={{ color: accentColor }}>{value}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  )
}

export default StatCard
