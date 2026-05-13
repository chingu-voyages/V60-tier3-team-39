import data from '../../data/data.json'
import StatCard from './StatCard'
import ApplicationFunnel from './ApplicationFunnel'
import StatusBreakdown from './StatusBreakdown'
import ResponseTimeTrend from './ResponseTimeTrend'
import WeeklyApplications from './ApplicationPerWeek'

const { analytics } = data

const Analytics = () => {
  return (
    <section className="max-w-360 mx-auto flex-1 p-10 bg-background flex flex-col gap-8">
      <div className="flex gap-8">
        <StatCard
          title="Total Applied"
          value={analytics.totalApplied}
          subtitle={`+${analytics.totalAppliedMonthly} this month`}
          accentColor="var(--color-applied)"
        />
        <StatCard
          title="Avg. Response"
          value={`${analytics.avgResponseDays}d`}
          subtitle="Days to first reply"
          accentColor="var(--color-inprog)"
        />
        <StatCard
          title="Interviews"
          value={analytics.interviews}
          subtitle={`${analytics.interviewRate}% interview rate`}
          accentColor="var(--color-interv)"
        />
        <StatCard
          title="Offers"
          value={analytics.offers}
          subtitle={`${analytics.offerRate}% offer rate`}
          accentColor="var(--color-brand)"
        />

      </div>

      <div className="flex gap-8">
        <div className="flex-1">
          <WeeklyApplications data={analytics.weeklyApplications} />
        </div>
        <div className="flex-1">
          <ApplicationFunnel data={analytics.funnel} />
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex-1">
          <StatusBreakdown data={analytics.statusBreakdown} />
        </div>
        <div className="flex-1">
          <ResponseTimeTrend data={analytics.responseTimeTrend} />
        </div>
      </div>
    </section>
  )
}

export default Analytics