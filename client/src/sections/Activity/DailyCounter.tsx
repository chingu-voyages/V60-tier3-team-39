import { openModal, closeModal } from "./ActivityModal.tsx";

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
  onEditActivity: (id: string, icon: string, activityName: string) => void;
}

export default function DailyCounter({
  activities,
  onIncrementActivity,
  onEditActivity,
}: DailyCounterProps) {
  // console.log(`in DailyCounter ${activities.map((a) => a.date)}`);

  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <div className="flex w-auto h-20 mx-10 border-b-2 border-[#D7DEE4]">
              <div className="flex items-center ml-0 lg:ml-10 w-[80%]">
                <div className="bg-icon-bg h-8 aspect-square flex justify-center items-center rounded-md h-1rem w-3rem">
                  <span className="material-icons text-primary">{activity.icon}</span>
                </div>
                <p className="font-medium text-muted">{activity.activityName}</p>
              </div>
              <div className="flex w-[35%] max-w-37.5 justify-around items-center">
                <div className="flex w-[60%] h-8 justify-around items-center outline-muted/10 rounded-md outline-solid outline-1">
                  <button
                    onClick={() => onIncrementActivity(activity.id, -1)}
                    className="h-full aspect-square flex items-center justify-center "
                  >
                    <span className="material-icons text-primary">remove</span>
                  </button>
                  <div>{activity.count}</div>
                  <button
                    onClick={() => onIncrementActivity(activity.id, 1)}
                    className="h-full aspect-square flex items-center justify-center"
                  >
                    <span className="material-icons text-primary">add</span>
                  </button>
                </div>
                <button
                  className="
                  h-8 aspect-square 
                  flex justify-center items-center 
                  outline-gray-400 rounded-md outline-solid outline-1"
                  onClick={() => onEditActivity(activity.id, activity.icon, activity.activityName)}
                >
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
