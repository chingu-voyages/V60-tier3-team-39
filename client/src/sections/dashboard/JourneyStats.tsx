const journeyStats = [
  {
    title: "total applied",
    value: 32,
    subtitle: 'all time',
    color: 'text-applied'
  },
  {
    title: "active",
    value: 8,
    subtitle: 'in progress',
    color: 'text-inprog'
  },
  {
    title: "interviews",
    value: 10,
    subtitle: 'set / done',
    color: 'text-interv'
  },
  {
    title: "offers",
    value: 2,
    subtitle: 'received',
    color: 'text-offer'
  },
]

const JourneyStats = () => {

  return (
    <div className="w-full overflow-hidden space-y-6 ">
      <h2 className="text-primary text-base lg:text-lg font-bold">Career Journey</h2>
      <div className="w-full flex justify-between">
        {journeyStats.map(({ title, value, subtitle, color }) => (
          <div className="w-32.5 flex flex-col">
            <h3 className="text-sm lg:text-base text-muted font-semibold uppercase tracking-wide">{title}</h3>
            <div className={`flex items-baseline gap-1 ${color}`}>
              <span className='font-bold text-[1.75rem] lg:text-[2.125rem]'>{value}</span>
              <span className="font-medium text-sm lg:text-base">{subtitle}</span>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default JourneyStats