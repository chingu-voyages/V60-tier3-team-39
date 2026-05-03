import Activity from "./Activity"
import JourneyStats from "./JourneyStats"
import RecentApplications from "./RecentApplications"

const Dashboard = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-360 mx-auto grid lg:grid-cols-[2.34fr_1fr] gap-8 p-10">
        <div className="space-y-8">
          <JourneyStats />
          <RecentApplications />
        </div>
        <Activity />
      </div>

    </section>
  )
}

export default Dashboard