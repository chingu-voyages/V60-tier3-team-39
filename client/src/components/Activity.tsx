import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import "./calendar.css";

export function MyCalendar() {
  return (
    <div className="flex justify-center p-4 outline-blue-500 outline-solid outline-2">
      <Calendar calendarType="gregory" />
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

export function clickCounter(activityCount, buttonPressed) {
  if (buttonPressed === "minus") {
    return activityCount - 1;
  } else if (buttonPressed === "plus") {
    return activityCount + 1;
  }
  return activityCount;
}

const Activity = () => {
  return (
    <>
      <div className="page-container flex justify-center w-full gap-4">
        <div className="activities-list w-[60%] ml-[40px] mr-[16px] my-[40px] outline-red-500 outline-solid outline-2">
          <div className="h-[91px] flex items-center ml-8">
            <h3>Thursday, April 23</h3>
          </div>
          <div
            id="li-connections-section"
            className="flex w-auto h-[80px] mx-10 border-b-2 border-blue-700"
          >
            <div
              id="li-connections-label"
              className="flex items-center ml-10 w-[80%]"
            >
              <div className="bg-[#C6E3E1] w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                <img
                  src="/images/li-connections.png"
                  alt="linked in connections icon"
                />
              </div>
              <p className="pl-4 font-medium">LinkedIn connection requests</p>
            </div>
            <div
              id="li-connections-controls"
              className="flex w-[20%] justify-around items-center"
            >
              <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                <button>
                  <img src="../../images/minus.png" alt="-" className="" />
                </button>
                <div>6</div>
                <button>
                  <img src="../../images/plus.png" alt="+" className="" />
                </button>
              </div>
              <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                <img
                  src="/images/pencil.png"
                  alt="edit"
                  className="w-[60%] h-[60%]"
                />
              </button>
            </div>
          </div>
          <div
            id="interviews-scheduled-section"
            className="flex w-auto h-[80px] mx-10 border-b-2 border-blue-700"
          >
            <div
              id="interviews-scheduled-label"
              className="flex items-center ml-10 w-[80%]"
            >
              <div className="bg-[#C6E3E1] w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                <img
                  src="/images/mdi_clock-outline.png"
                  alt="interviews scheduled icon"
                />
              </div>
              <p className="pl-4 font-medium">Interviews Scheduled</p>
            </div>
            <div
              id="interviews-scheduled-controls"
              className="flex w-[20%] justify-around items-center"
            >
              <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                <button>
                  <img src="../../images/minus.png" alt="-" className="" />
                </button>
                <div>6</div>
                <button>
                  <img src="../../images/plus.png" alt="+" className="" />
                </button>
              </div>
              <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                <img
                  src="/images/pencil.png"
                  alt="edit"
                  className="w-[60%] h-[60%]"
                />
              </button>
            </div>
          </div>
          <div
            id="applications-submitted-section"
            className="flex w-auto h-[80px] mx-10 border-b-2 border-blue-700"
          >
            <div
              id="applications-submitted-label"
              className="flex items-center ml-10 w-[80%]"
            >
              <div className="bg-[#C6E3E1] w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                <img
                  src="/images/half-cube.png"
                  alt="applications submitted icon"
                />
              </div>
              <p className="pl-4 font-medium">Applications submitted</p>
            </div>
            <div
              id="applications-submitted-controls"
              className="flex w-[20%] justify-around items-center"
            >
              <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                <button>
                  <img src="../../images/minus.png" alt="-" className="" />
                </button>
                <div>6</div>
                <button>
                  <img src="../../images/plus.png" alt="+" className="" />
                </button>
              </div>
              <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                <img
                  src="/images/pencil.png"
                  alt="edit"
                  className="w-[60%] h-[60%]"
                />
              </button>
            </div>
          </div>
          <div
            id="outreach-emails-section"
            className="flex w-auto h-[80px] mx-10 border-b-2 border-blue-700"
          >
            <div
              id="outreach-emails-label"
              className="flex items-center ml-10 w-[80%]"
            >
              <div className="bg-[#C6E3E1] w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                <img
                  src="/images/envelope.png"
                  alt="outreach emails sent icon"
                />
              </div>
              <p className="pl-4 font-medium">Outreach emails sent</p>
            </div>
            <div
              id="outreach-emails-controls"
              className="flex w-[20%] justify-around items-center"
            >
              <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                <button>
                  <img src="../../images/minus.png" alt="-" className="" />
                </button>
                <div>6</div>
                <button>
                  <img src="../../images/plus.png" alt="+" className="" />
                </button>
              </div>
              <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                <img
                  src="/images/pencil.png"
                  alt="edit"
                  className="w-[60%] h-[60%]"
                />
              </button>
            </div>
          </div>
          <div
            id="meetups-events-section"
            className="flex w-auto h-[80px] mx-10 border-b-2 border-blue-700"
          >
            <div
              id="meetups-events-label"
              className="flex items-center ml-10 w-[80%]"
            >
              <div className="bg-[#C6E3E1] w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                <img
                  src="/images/two-people.png"
                  alt="meetups/events attended icon"
                />
              </div>
              <p className="pl-4 font-medium">Meetups / events attended</p>
            </div>
            <div
              id="meetups-events-controls"
              className="flex w-[20%] justify-around items-center"
            >
              <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                <button>
                  <img src="../../images/minus.png" alt="-" className="" />
                </button>
                <div>6</div>
                <button>
                  <img src="../../images/plus.png" alt="+" className="" />
                </button>
              </div>
              <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                <img
                  src="/images/pencil.png"
                  alt="edit"
                  className="w-[60%] h-[60%]"
                />
              </button>
            </div>
          </div>
          <div
            id="extra-activity-one-section"
            className="flex w-auto h-[80px] mx-10 border-b-2 border-blue-700"
          >
            <div
              id="extra-activity-one-label"
              className="flex items-center ml-10 w-[80%]"
            >
              <div className="bg-[#C6E3E1] w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                {/* <img
                  src="/images/li-connections.png"
                  alt="linked in connections icon"
                /> */}
              </div>
              <p className="pl-4 font-medium">Add an activity</p>
            </div>
            <div
              id="extra-activity-one-controls"
              className="flex w-[20%] justify-around items-center"
            >
              <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                <button>
                  <img src="../../images/minus.png" alt="-" className="" />
                </button>
                <div>6</div>
                <button>
                  <img src="../../images/plus.png" alt="+" className="" />
                </button>
              </div>
              <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                <img
                  src="/images/pencil.png"
                  alt="edit"
                  className="w-[60%] h-[60%]"
                />
              </button>
            </div>
          </div>
          <div
            id="extra-activity-two-section"
            className="flex w-auto h-[80px] mx-10 border-b-2 border-blue-700"
          >
            <div
              id="extra-activity-two-label"
              className="flex items-center ml-10 w-[80%]"
            >
              <div className="bg-[#C6E3E1] w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                {/* <img
                  src="/images/li-connections.png"
                  alt="linked in connections icon"
                /> */}
              </div>
              <p className="pl-4 font-medium">Add an activity</p>
            </div>
            <div
              id="extra-activity-two-controls"
              className="flex w-[20%] justify-around items-center"
            >
              <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                <button>
                  <img src="../../images/minus.png" alt="-" className="" />
                </button>
                <div>6</div>
                <button>
                  <img src="../../images/plus.png" alt="+" className="" />
                </button>
              </div>
              <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                <img
                  src="/images/pencil.png"
                  alt="edit"
                  className="w-[60%] h-[60%]"
                />
              </button>
            </div>
          </div>
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
