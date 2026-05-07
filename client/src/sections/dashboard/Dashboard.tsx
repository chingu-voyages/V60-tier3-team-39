import Activity from "./Activity";
import StreakSquares from "../Activity/Streak";
import JourneyStats from "./JourneyStats";
import RecentApplications from "./RecentApplications";
import data from "../../data/data.json";

const Dashboard = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-w-360 mx-auto grid lg:grid-cols-[2.34fr_1fr] gap-8 p-10">
        <div className="space-y-8">
          <JourneyStats />
          <RecentApplications />
        </div>
        <div className="space-y-8">
          <div id="active-streak-area" className="w-full">
            <StreakSquares />
          </div>
          <div id="todays-activities-area"></div>
          <div id="conversion-rates-area"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
