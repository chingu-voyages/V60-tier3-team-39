import { MyCalendar } from "./CalendarTile";
import { MyDatePicker } from "./CalendarTile";
import DailyCounter from "./DailyCounter";
import StreakSquares from "./Streak";
import { useState, useEffect } from "react";
// import "react-calendar/dist/Calendar.css";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import "./calendar.css";

// export function MyDayPicker() {
//   return (
//     <div className = "p-4 outline-blue-500 outline-solid outline-2 ">
//       <DayPicker />
//     </div>
//   )
// }

export function clickCounter(activityCount: number, buttonPressed: string) {
  if (buttonPressed === "minus") {
    return activityCount - 1;
  } else if (buttonPressed === "plus") {
    return activityCount + 1;
  }
  return activityCount;
}

const todaysActions = 18;
const applications = 3;
const totalActions = 21;
const activeStreak = 9;

const Activity = () => {
  const [activityCount, setActivityCount] = useState(0);

  return (
    <>
      <div
        id="page-container"
        className="flex flex-col md:flex-row w-full flex-1 justify-center gap-6 px-10 py-10 bg-[#F8F8FB]"
      >
        <div
          id="left-side"
          className="flex flex-col h-full w-full md:w-[60%] bg-white shadow-sm rounded-3xl"
        >
          <div className="min-h-14 md:min-h-22.75 py-4 flex items-center ml-8">
            <h3 className="font-bold text-m">Thursday, April 23</h3>
          </div>
          <DailyCounter activityCount={activityCount} />
          <div className="flex justify-end pr-5 mt-auto mb-5 items-bottom">
            <button
              className="border border-gray-400 rounded-md p-3 mx-5 text-sm"
              onClick={() =>
                setActivityCount(clickCounter(activityCount, "plus"))
              }
            >
              + Add Field
            </button>
            <button className="border border-gray-400 rounded-md bg-primary p-3 text-sm text-white">
              Save and Generate Report
            </button>
          </div>
        </div>
        <div id="right-side" className="w-full md:w-[40%] min-w-[350px] flex flex-col gap-6 h-full">
          <div
            id="calendar-area"
            className="flex-3 w-full flex items-stretch justify-stretch shadow-sm rounded-2xl bg-white"
          >
            <MyDatePicker />
          </div>
          <div
            id="streak-summary-area"
            className="flex-2 w-full shadow-sm bg-white rounded-2xl flex flex-col"
          >
            <div id="counter-area" className="flex-4 flex flex-col w-full">
              <h3 className="m-2 font-bold">
                🔥Active Streak - {activeStreak} days
              </h3>
              <div className="w-full mt-4 px-5">
                <StreakSquares activeStreak={activeStreak}/>
              </div>
            </div>
            <div
              id="summary-area"
              className="flex-2 flex flex-col w-full mb-5"
            >
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
