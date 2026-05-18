import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface MyDatePickerProps {
  selectedDate: Date;
  updateDate: (newDate: Date) => void;
}

export function MyDatePicker({
  selectedDate,
  updateDate }: MyDatePickerProps) {

  return (
    <div className="w-full rounded-3xl p-6">
      <DayPicker
        classNames={{
          selected: "bg-background-dark text-white rounded-lg",
          day: "rounded-lg hover:bg-muted",
          today: "font-bold text-primary",
        }}
        mode="single"
        navLayout="around"
        captionLayout="dropdown"
        showOutsideDays
        animate
        selected={selectedDate}
        onSelect={(date) => {
          if (date) updateDate(date);
        }}
        required={false}
      />
    </div>
  );
}
