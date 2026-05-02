import Activity from "./Activity"
import JourneyStats from "./JourneyStats"

const Dashboard = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-360 mx-auto grid lg:grid-cols-[900px_428px] gap-8 p-10">
        <div className="row-span-2">
          <JourneyStats />
        </div>

        <Activity />
      </div>

    </section>
  )
}

export default Dashboard