type StreakSquaresProps = {
  activeStreak: number;
};

export default function StreakSquares({ activeStreak }: StreakSquaresProps) {
  return (
    <div className="grid grid-rows-2 grid-cols-15 sm:gap-1 md:gap-2">
      {Array.from({ length: 30 }).map((_, index) => (
        <div
          key={index}
          className={`w-full aspect-square rounded-sm ${
            index < activeStreak ? "bg-primary" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}
