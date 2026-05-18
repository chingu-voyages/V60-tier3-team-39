import data from "../../data/data.json";
import { MyDatePicker } from "./CalendarTile";
import DailyCounter from "./DailyCounter";
import StreakSquares from "./Streak";
import { useState } from "react";

const iconOptions = [
  "check",
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
        icon: "check",
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

  const [selectedIcon, setSelectedIcon] = useState("check");
  const [showIconMenu, setShowIconMenu] = useState(false);
  const [selectedActivityName, setSelectedActivityName] = useState("");
  const [selectedId, setSelectedId] = useState("");

  function handleEditActivity(id: string, icon: string, activityName: string) {
    console.log(
      `Edit activity: ${id} Icon: ${icon} ActivityName: ${activityName}`,
    );
    setSelectedId(id);
    setSelectedIcon(icon);
    setSelectedActivityName(activityName);
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === selectedId
          ? { ...activity, activityName: selectedActivityName, icon: selectedIcon }
          : activity,
      ),
    );
    setModal(false);
  }

  function updateDate(newDate: Date) {
    setDate(newDate);
  }

  function handleSelectIcon(iconName: string) {
    setSelectedIcon(iconName);
    setShowIconMenu(false);
  }

  return (
    <>
      <div
        id="page-container"
        className="max-w-360 mx-auto grid lg:grid-cols-[1.5fr_1fr] w-full lg:justify-center gap-10 p-10 bg-background"
      >
        <div
          id="left-side"
          className="flex flex-col 
          h-full w-full px-6
          bg-card border border-muted/10 rounded-3xl"
        >
          <div className="pt-8 pb-2 flex items-center">
            <h3 className="font-bold text-lg font-heading">
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
              className="border border-muted/10 rounded-md p-3 mx-5 text-sm"
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
          className="flex flex-col h-full w-full gap-8"
        >
          <div
            id="calendar-area"
            className="w-full rounded-3xl bg-card border border-muted/10"
          >
            <MyDatePicker selectedDate={date} updateDate={updateDate} />
          </div>
          <div
            id="streak-summary-area"
            className="bg-card rounded-3xl"
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
        // onSubmit={() => handleSubmit(selectedIcon, selectedActivityName)}
        onSubmit={handleSubmit}
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
        h-17  mx-7"
        >
          <div className="flex flex-col justify-between">
            <h4 className="font-primary font-bold text-lg">ICON</h4>
            <button
              id="iconButton"
              type="button"
              className="flex border border-solid border-gray-400/50 
            h-11 w-22 rounded-xl
            justify-between items-center p-2"
              onClick={() => setShowIconMenu(true)}
            >
              <div
                className="bg-icon-bg h-8 aspect-square 
              flex justify-center items-center rounded-md h-1rem w-3rem"
              >
                <span className="material-icons text-primary">
                  {selectedIcon}
                </span>
              </div>{" "}
              <span className="material-icons">keyboard_arrow_down</span>
            </button>
            {showIconMenu && (
              <div
                className="absolute mt-7 w-22 rounded-xl border border-gray-300 bg-white 
              shadow-md p-2 z-20"
              >
                <div className="flex flex-col gap-2">
                  {iconOptions.map((iconName) => (
                    <button
                      key={iconName}
                      type="button"
                      className="flex justify-left items-center"
                      onClick={() => handleSelectIcon(iconName)}
                    >
                      <div
                        className="bg-icon-bg h-8 aspect-square rounded-md 
                      flex justify-center items-center"
                      >
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
              // placeholder="Edit name of activity"
              type="text"
              value={selectedActivityName}
              onChange={(e) => setSelectedActivityName(e.target.value)}
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
