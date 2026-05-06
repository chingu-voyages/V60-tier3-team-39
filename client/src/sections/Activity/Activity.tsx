import data from "../../data/data.json";
import { MyDatePicker } from "./CalendarTile";
import DailyCounter from "./DailyCounter";
import StreakSquares from "./Streak";
import { useState } from "react";

const todaysActions = 18;
const applications = 3;
const totalActions = 21;

const Activity = () => {
  const [activities, setActivities] = useState(data.activities);
  const [streak] = useState(data.activeStreak);
  const [date, setDate] = useState<Date>(new Date());

  function handleAddActivity() {
    setActivities((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        date: new Date().toISOString().slice(0, 10),
        activityName: "New Activity",
        count: 0,
        icon: "/images/li-connections.png",
      },
    ]);
  }

  function handleIncrementActivity(id: string, increment: number) {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id
          ? { ...activity, count: Math.max(activity.count + increment,0) }
          : activity,
      ),
    );
  }

 function updateDate(newDate: Date) {
    setDate(newDate)
  } 

  return (
    <>
      <div
        id="page-container"
        className="flex flex-1 flex-col md:flex-row w-full 
        justify-center gap-6 px-2 sm:px-10 py-10 bg-[#F8F8FB]"
      >
        <div
          id="left-side"
          className="flex flex-col 
          h-full w-full min-w-[350px] md:w-[60%] 
          bg-white shadow-sm rounded-3xl"
        >
          <div className="min-h-14 md:min-h-22.75 py-4 flex items-center ml-8">
            <h3 className="font-bold text-m">
              {date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
          </div>
          <DailyCounter
            activities={activities}
            onIncrementActivity={handleIncrementActivity}
          />
          <div className="flex justify-end pr-5 mt-auto pt-3 mb-5 items-bottom">
            <button
              className="border border-gray-400 rounded-md p-3 mx-5 text-sm"
              onClick={handleAddActivity}
            >
              + Add Field
            </button>
            <button
              className="border border-gray-400 rounded-md 
            bg-primary 
            p-3 
            text-sm 
            text-white"
            >
              Save and Generate Report
            </button>
          </div>
        </div>
        <div
          id="right-side"
          className="w-full md:w-[40%] min-w-[350px] 
          flex flex-col 
          gap-6 
          h-full"
        >
          <div
            id="calendar-area"
            className="flex flex-3 
            w-full 
            items-stretch justify-stretch 
            shadow-sm rounded-3xl bg-white"
          >
            <MyDatePicker
              selectedDate={date} 
              updateDate={updateDate}
              />
          </div>
          <div
            id="streak-summary-area"
            className="flex flex-2 flex-col w-full shadow-sm bg-white rounded-3xl"
          >
            <div id="counter-area" className="flex-4 flex flex-col w-full">
              <h3 className="m-2 font-bold">🔥Active Streak - {streak} days</h3>
              <div className="w-full mt-4 px-5">
                <StreakSquares activeStreak={streak} />
              </div>
              <div className="flex justify-end pr-5">
                <p>Log activity daily to maintain your streak</p>
              </div>
            </div>
            <div id="summary-area" className="flex-2 flex flex-col w-full mb-5">
              <h3 className="m-2 font-bold">Today's Summary</h3>
              <div className="flex justify-around w-full pt-3">
                <p>
                  Actions today{" "}
                  <span className="font-bold pl-2">{todaysActions}</span>
                </p>
                <p>
                  Applications{" "}
                  <span className="font-bold pl-2">{applications}</span>
                </p>
                <p>
                  Total Actions{" "}
                  <span className="font-bold pl-2">{totalActions}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
