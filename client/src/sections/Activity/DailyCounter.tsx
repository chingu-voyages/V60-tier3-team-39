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

// let iconSelection = ["group", "mail", "send", "chat", "side-navigation", "person", "schedule"]

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
            <div className="flex w-auto px-2 border-b border-muted/10">
              <div className="flex items-center py-6 w-full gap-3">
                <div className="bg-icon-bg h-8 aspect-square flex justify-center items-center rounded-md border border-muted/10 p-1">
                  <span className="material-icons text-brand-secondary bg-background-dark ">check</span>
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
                <button className=" h-8 aspect-square flex justify-center items-center border border-muted/10 p-2 rounded-md hover:border-inprog hover:bg-inprog/20 transition-colors">
                  <span className="material-icons text-primary hover:text-inprog ">edit</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
