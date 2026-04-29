interface Activity {
  id:string;
  activityName: string;
  count: number;
  icon: string;
}

interface DailyCounterProps {
  activities: Activity[];
}

export default function DailyCounter({ activities }: DailyCounterProps) {
  console.log(`in DailyCounter`);

  return (
    <>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <div className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]">
              <div className="flex items-center ml-10 w-[80%]">
                <div className="bg-icon-bg w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
                  <img
                    src="/images/li-connections.png"
                    alt="linked in connections icon"
                  />
                </div>
                <p className="pl-4 font-medium">{activity.activityName}</p>
              </div>
              <div className="flex w-[35%] max-w-[150px] justify-around items-center">
                <div className="flex w-[60%] h-8 justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
                  <button>
                    <img src="../../images/minus.png" alt="-" className="" />
                  </button>
                  <div>6</div>
                  <button>
                    <img src="../../images/plus.png" alt="+" className="" />
                  </button>
                </div>
                <button className=" h-8 aspect-square flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
                  <img
                    src="/images/pencil.png"
                    alt="edit"
                    className="w-[60%] h-[60%]"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>      
    </>
  );
}
