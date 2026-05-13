import data from "../../data/data.json";
import { useState } from "react";

export default function StreakSquares() {
  const [streak] = useState(data.activeStreak);
  return (
    <div id="counter-area" className="flex-4 flex flex-col w-full bg-card">
      <h3 className="m-2 font-bold">
        🔥Active Streak - {data.activeStreak} days
      </h3>
      <div className="w-full mt-4 px-5">
        <div className="grid grid-rows-2 grid-cols-15 sm:gap-1 md:gap-2">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className={`w-full aspect-square rounded-sm ${index < streak ? "bg-primary" : "bg-gray-300"
                }`}
            ></div>
          ))}
        </div>
        <div className="flex justify-end pr-5">
          <p>Log activity daily to maintain your streak</p>
        </div>
      </div>
    </div>
  );
}
