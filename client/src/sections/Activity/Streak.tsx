import data from "../../data/data.json";
import { useState } from "react";

export default function StreakSquares() {
  const [streak] = useState(data.activeStreak);
  return (
    <div id="counter-area" className="flex flex-col justify-between py-1">
      <h3 className="text-lg font-bold font-heading">
        🔥 Active Streak - <span className="text-brand-secondary">{data.activeStreak}</span> days
      </h3>
      <div className="w-full mt-3">
        <div className="grid grid-rows-2 grid-cols-15 sm:gap-1 md:gap-1.75">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className={`w-full aspect-square rounded-sm ${index < streak ? "bg-brand-secondary" : "bg-muted/10"
                }`}
            ></div>
          ))}
        </div>
        <div className="text-end mt-3 text-muted font-medium text-sm">
          <p>Log activity daily to maintain your streak</p>
        </div>
      </div>
    </div>
  );
}
