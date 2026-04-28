import data from '../../data/data.json'
import StatCard from './StatCard'
import ApplicationFunnel from './ApplicationFunnel'
import StatusBreakdown from './StatusBreakdown'
import ResponseTimeTrend from './ResponseTimeTrend'
import WeeklyApplications from './ApplicationPerWeek'

const { analytics } = data

const Analytics = () => {
  return (
    <section className="flex-1 p-6 bg-gray-50 flex flex-col gap-6">
      <div className="flex gap-4">
        <StatCard
          title="Total Applied"
          value={analytics.totalApplied}
          subtitle={`+${analytics.totalAppliedMonthly} this month`}
          accentColor="#3A30A5"
        />
        <StatCard
          title="Interviews"
          value={analytics.interviews}
          subtitle={`${analytics.interviewRate}% interview rate`}
          accentColor="#1E40AF"
        />
        <StatCard
          title="Offers"
          value={analytics.offers}
          subtitle={`${analytics.offerRate}% offer rate`}
          accentColor="#00BF63"
        />
        <StatCard
          title="Avg. Response"
          value={`${analytics.avgResponseDays}d`}
          subtitle="Days to first reply"
          accentColor="#FD9617"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <WeeklyApplications data={analytics.weeklyApplications} />
        </div>
        <div className="flex-1">
          <ApplicationFunnel data={analytics.funnel} />
        </div>
      </div>

      <div className="flex gap-4">
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