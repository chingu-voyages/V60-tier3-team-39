interface StatCardProps {
  title: string
  value: string | number
  subtitle: string
  accentColor: string
}

const StatCard = ({ title, value, subtitle, accentColor }: StatCardProps) => {
  return (
    <div className={`bg-card rounded-xl p-5 flex-1 border border-muted/10 border-t-4 shadow-sm`} style={{ borderTopColor: accentColor }}>
      <p className="font-heading font-semibold uppercase tracking-wide mb-1">{title}</p>
      <p className="text-4xl font-bold mb-1" style={{ color: accentColor }}>{value}</p>
      <p className="text-[.9375rem] text-muted font-medium">{subtitle}</p>
    </div>
  )
}

export default StatCard
