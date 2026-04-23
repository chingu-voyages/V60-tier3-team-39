import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import "./calendar.css";

export function MyCalendar() {
  return (
    <div className="flex justify-center p-4 outline-blue-500 outline-solid outline-2">
      <Calendar calendarType="gregory"/>
    </div>
  );
}

// export function MyDayPicker() {
//   return (
//     <div className = "p-4 outline-blue-500 outline-solid outline-2 ">
//       <DayPicker />
//     </div>
//   )
// }

const Activity = () => {
  return (
    <>
      <div className="page-container flex justify-center w-full gap-4">
        <div className="activities-list w-[60%] ml-[40px] mr-[16px] my-[40px] outline-red-500 outline-solid outline-2">
          <h3>list of activities</h3>
        </div>
        <div className="right-side-tiles w-[40%] my-[40px] ml-[16px] mr-[40px] flex flex-col gap-3 outlinel-green-500 outline-solid outline-2">
          <MyCalendar />
          <h3 className="m-2 outline-blue-500 outline-solid outline-2">
            streak counter
          </h3>
          <h3 className="m-2 outline-blue-500 outline-solid outline-2">
            today's summary
          </h3>
        </div>
      </div>
    </>
  );
};

export default Activity;
