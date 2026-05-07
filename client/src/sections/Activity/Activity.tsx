import data from "../../data/data.json";
import { MyDatePicker } from "./CalendarTile";
import DailyCounter from "./DailyCounter";
import StreakSquares from "./Streak";
import { useState } from "react";
import { openModal, closeModal } from "./ActivityModal.tsx";

const todaysActions = 18;
const applications = 3;
const totalActions = 21;

const Activity = () => {
  const [activities, setActivities] = useState(data.activities);
  const [modal, setModal] = useState<boolean>(false);
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
          ? { ...activity, count: Math.max(activity.count + increment, 0) }
          : activity,
      ),
    );
  }

  function handleEditActivity(id: string) {
    console.log(`Edit activity: ${id}`);
    setModal(true);
    // openModal(id, modal);
  }

  function handleCloseModal() {
    setModal(false);
    // closeModal(modal);
  }

  function updateDate(newDate: Date) {
    setDate(newDate);
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
          h-full w-full min-w-87.5 md:w-[60%] 
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
            onEditActivity={handleEditActivity}
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
          className="w-full md:w-[40%] min-w-87.5 
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
            <MyDatePicker selectedDate={date} updateDate={updateDate} />
          </div>
          <div
            id="streak-summary-area"
            className="flex flex-2 flex-col w-full shadow-sm bg-white rounded-3xl"
          >
            <StreakSquares />
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
      <div
        id="overlay"
        className={`fixed opacity-0 z-10 [transition:200ms_ease-in-out] 
                  top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] 
                  ${modal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                  `}
        onClick={() => handleCloseModal()}
      >
        <div
          id="modal-header"
          className={`fixed z-11 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        md:w-150 w-[75vw] md:h-50 h-[35vw]
        rounded-3xl border border-muted/20 bg-white 
        ${modal ? "" : ""}`}
        >
          <button onClick={() => handleCloseModal()}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Activity;
