import MyCalendar from "./CalendarTile";
import DailyCounter from "./DailyCounter";
import { useState, useEffect } from "react";
// import "react-calendar/dist/Calendar.css";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import "./calendar.css";

const [activityCount, setActivityCount] = useState(0);

// export function MyCalendar() {
//   return (
//     <div className="flex justify-center p-4 border-blue-500 border-solid border-b-2">
//       <Calendar calendarType="gregory" />
//     </div>
//   );
// }

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
  return (
    <>
      <div
        id="page-container"
        className="flex w-full flex-1 justify-center gap-6 px-10 py-10 bg-[#F8F8FB]"
      >
        <div
          id="left-side"
          className="flex flex-col h-full w-[60%] bg-white shadow-sm rounded-3xl"
        >
          <div className="h-[91px] flex items-center ml-8">
            <h3 className="font-bold text-m">Thursday, April 23</h3>
          </div>
          <DailyCounter(activityCount) />
          <div className="flex justify-end pr-5 mt-auto mb-5 items-bottom">
            <button className="border border-gray-400 rounded-md p-3 mx-5 text-sm">
              + Add Field
            </button>
            <button className="border border-gray-400 rounded-md bg-primary p-3 text-sm text-white">
              Save and Generate Report
            </button>
          </div>
        </div>
        <div id="right-side" className="w-[40%] flex flex-col gap-6 h-full">
          <div
            id="calendar-area"
            className="flex-[3] w-full flex justify-center items-center shadow-sm rounded-2xl bg-white"
          >
            <MyCalendar />
          </div>
          <div id="streak-summary-area" className="shadow-sm bg-white rounded-2xl flex flex-col flex-[2]">
            <div id="counter-area" className="flex-[4] flex flex-col w-full">
              <h3 className="m-2 font-bold">
                🔥Active Streak - {activeStreak} days
              </h3>
              <div className="border border-gray-400 border-solid w-full">squares squares</div>
            </div>
            <div id="summary-area" className="flex-[1] flex flex-col w-full mb-5">
              <h3 className="m-2 font-bold">Today's Summary</h3>
              <div className="flex justify-around w-full">
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
