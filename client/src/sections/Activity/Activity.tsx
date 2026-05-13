import data from "../../data/data.json";
import { MyDatePicker } from "./CalendarTile";
import DailyCounter from "./DailyCounter";
import StreakSquares from "./Streak";
import { useState } from "react";

const iconOptions = [
  "group",
  "mail",
  "send",
  "chat",
  "menu",
  "person",
  "schedule",
];

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
  }

  function handleCloseModal() {
    setModal(false);
  }

  function updateDate(newDate: Date) {
    setDate(newDate);
  }

  const [selectedIcon, setSelectedIcon] = useState("check");
  const [showIconMenu, setShowIconMenu] = useState(false);

  function handleSelectIcon(iconName: string) {
    setSelectedIcon(iconName);
    setShowIconMenu(false);
  }
  

  function handleActivityEdit() {}

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

      {/************************* Overlay *******************************/}
      <div
        id="overlay"
        className={`fixed opacity-0 z-10 [transition:200ms_ease-in-out] 
                  top-0 left-0 right-0 bottom-0 bg-muted
                  ${modal ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}
                  `}
        onClick={() => handleCloseModal()}
      ></div>

      {/************************** Modal ***************************/}
      <form
        id="modal-container"
        className={`modal 
        md:w-150 w-[75vw] md:h-60 h-[35vw]
        ${modal ? "" : "hidden"}`}
        onSubmit={handleActivityEdit}
      >
        <div className="flex justify-between items-center m-7">
          <h3 className="text-[24px] font-bold font-primary">Edit Activity</h3>

          <button
            type="button"
            className="w-8 aspect-square flex items-center justify-center
            border border-gray-400 
          rounded 3xl
          "
            onClick={() => handleCloseModal()}
          >
            <span className="material-icons text-primary">close</span>
          </button>
        </div>

        <div
          className="flex justify-between 
        h-[68px]  mx-7"
        >
          <div className="flex flex-col justify-between">
            <h4 className="font-primary font-bold text-lg">ICON</h4>
            <button
              id="iconButton"
              type="button"
              className="flex border border-solid border-gray-400/50 
            h-10 w-22 rounded-xl
            justify-between items-center pl-3"
              onClick={() => setShowIconMenu(true)}
            >
              <div
                className="bg-icon-bg h-8 aspect-square 
              flex justify-center items-center rounded-md h-1rem w-3rem"
              >
                <span className="material-icons text-primary">check</span>
              </div>{" "}
              <span className="material-icons">keyboard_arrow_down</span>
            </button>
            {showIconMenu && (
              <div className="absolute mt-2 w-22 rounded-xl border border-gray-300 bg-white shadow-md p-2 z-20">
                <div className="flex flex-col gap-2">
                  {iconOptions.map((iconName) => (
                    <button
                      key={iconName}
                      type="button"
                      className="flex justify-center items-center"
                      onClick={() => handleSelectIcon(iconName)}
                    >
                      <div className="bg-icon-bg h-8 w-8 rounded-md flex justify-center items-center">
                        <span className="material-icons text-primary">
                          {iconName}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="font-primary font-bold text-lg">NAME</h4>
            <input
              className="border border-solid border-gray-400/50 
            h-10 w-100 rounded-xl text-left pl-3 text-primary font-semibold"
              placeholder="Edit name of activity"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end mr-8 gap-4 my-5">
          <button
            type="button"
            className="h-10 border rounded-xl px-4 
            text-primary font-semibold"
            onClick={() => handleCloseModal()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-10 border rounded-xl px-4 
            text-white bg-primary font-semibold"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default Activity;
