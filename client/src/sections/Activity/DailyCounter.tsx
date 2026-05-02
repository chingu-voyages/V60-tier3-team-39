interface Activity {
  id: string;
  date: string;
  activityName: string;
  count: number;
  icon: string;
}

interface DailyCounterProps {
  activities: Activity[];
  onIncrementActivity: (id: string, increment: number) => void;
}

export default function DailyCounter({
  activities,
  onIncrementActivity,
}: DailyCounterProps) {
  console.log(`in DailyCounter ${activities.map((a) => a.date)}`);

  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <div className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]">
              <div className="flex items-center ml-0 lg:ml-10 w-[80%]">
                <div className="bg-icon-bg h-[32px] aspect-square flex justify-center items-center rounded-md h-1rem w-3rem">
                  <img src="/images/check.png" alt="check-mark icon" />
                </div>
                <p className="pl-4 font-medium">{activity.activityName}</p>
              </div>
              <div className="flex w-[35%] max-w-[150px] justify-around items-center">
                <div className="flex w-[60%] h-8 justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                  <button
                    onClick={() => onIncrementActivity(activity.id, -1)}
                    className="h-full aspect-square flex items-center justify-center"
                  >
                    <span className="material-icons text-primary">remove</span>
                    {/* <FontAwesomeIcon
                      icon={faMinus}
                      className="w-full aspect-square text-primary"
                    /> */}
                  </button>
                  <div>{activity.count}</div>
                  <button
                    onClick={() => onIncrementActivity(activity.id, 1)}
                    className="h-full aspect-square flex items-center justify-center"
                  >
                    <span className="material-icons text-primary">add</span>
                    {/* <FontAwesomeIcon
                      icon={faPlus}
                      className="h-3/4 w-3/4 text-primary"
                    /> */}
                  </button>
                </div>
                <button className=" h-8 aspect-square flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                  <span className="material-icons text-primary">edit</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
